import { Request, Response } from 'express';
import WeatherData from '../../models/weather-data.model';
import { interval, Subject } from 'rxjs';

export const weatherDataSubject = new Subject();
let failedInserts: any[] = [];

weatherDataSubject
    .subscribe(
        async (data: any) => {
            Array.isArray(data) ? data.forEach(el => el.t = parseInt(el.t, 10) * 1000) : data.t = parseInt(data.t, 10) * 1000;
            await DataHandler.InsertData(data);
        }
    );

// INFO every 5 minutes
interval(5 * 60 * 1000)
    .subscribe(async () => {
        if (failedInserts.length > 0) {
            console.info(`[Interval] fallback insert`);
            await DataHandler.InsertData(failedInserts);
            failedInserts = [];
        }
    });

export const MDB_INTERVAL_STRING: {[key in string]: string} = {
    hour: '%Y-%m-%dT%H:00',
    day: '%Y-%m-%d',
    month: '%Y-%m',
    // complete: %Y-%m-%dT%H:%M:%S.%LZ
};

export class DataHandler {
    public static async InsertData(data: any | any[]) {
        try {
            console.log(`[data] recevied`, Array.isArray(data) ? data : [data]);
            await WeatherData.insertMany(Array.isArray(data) ? data : [data]);
        } catch (error) {
            console.error(`[MQTT] data insertion`, error);
            failedInserts.push(data);
        }
    }

    public async GetWeeklyData(req: Request, res: Response) {
        const target: string = req.query.target as string;
        const today = new Date();
        const dw = today.getDay();
        const sd = today.getDate() - (dw - 1);
        const ed = today.getDate() + (7 - dw);
        const start = new Date(today.getFullYear(), today.getMonth(), sd, 0, 0, 0);
        const end = new Date(today.getFullYear(), today.getMonth(), ed, 23, 59, 0);
        const pipeline = [
            {
                $set: {
                    id: {
                        $convert: {
                            input: '$id', to: 'string'
                        }
                    }
                }
            },
            {
                $match: {
                    id: req.query.id,
                    t: {
                        $gte: start.getTime(),
                        $lte: end.getTime(),
                    },
                    [target as string]: {
                        $nin: ['', null, undefined]
                    },
                }
            },
            {
                $set: {
                    't': {
                        $convert: {
                            input: '$t', to: 'date'
                        }
                    },
                    [target as any]: {
                        $convert: {
                            input: `$${target}`, to: 'double'
                        }
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: MDB_INTERVAL_STRING.day,
                            date: '$t'
                        }
                    },
                    list: {$push: `$${target}`},
                    value: {$avg: `$${target}`}
                }
            },
            {
                $addFields: {
                    t: {
                        $convert: {
                            input: '$_id', to: 'date'
                        }
                    }
                }
            },
            {$project: {value: 1, t: 1, _id: 0}},
            {$sort: {t: 1}},
            {
                $set: {
                    data: ['$value', '$t']
                }
            },
            {$project: {data: 1}},
        ];
        const data = await WeatherData.aggregate(pipeline);

        return res.status(200).json({data: data.map(d => d.data)});
    }

    public async GetIntervalData(req: Request, res: Response) {
        const {query: {target}} = req;

        if (!target) {
            return res.status(400).json({message: 'No target specified'});
        }

        const start = new Date(req.query.start as string);
        const end = new Date(req.query.end as string);

        const pipeline = [
            {
                $set: {
                    id: {
                        $convert: {
                            input: '$id', to: 'string'
                        }
                    }
                }
            },
            {
                $match: {
                    id: req.query.id, // {$in: [(req.query.id as any).toLowerCase(), null, undefined] as any[]},
                    t: {
                        $gte: start.getTime(),
                        $lte: end.getTime(),
                    },
                    [(target as string).toLowerCase()]: {
                        $nin: ['', null, undefined]
                    },
                }
            },
            {
                $set: {
                    t: {
                        $convert: {
                            input: '$t', to: 'date'
                        }
                    },
                    [target as any]: {
                        $convert: {
                            input: `$${target}`, to: 'double'
                        }
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: MDB_INTERVAL_STRING[req.query.interval as string],
                            date: '$t'
                        }
                    },
                    list: {$push: `$${target}`},
                    value: {$avg: `$${target}`}
                }
            },
            {
                $addFields: {
                    t: {
                        $convert: {
                            input: '$_id', to: 'date'
                        }
                    }
                }
            },
            {$project: {value: 1, t: 1, _id: 0}},
            {$sort: {t: 1}},
            {
                $set: {
                    data: ['$value', '$t']
                }
            },
            {$project: {data: 1}},
        ];
        const data = await WeatherData.aggregate(pipeline);

        return res.status(200).json({data: data.map(el => el.data)});
    }

    public async GetLatestData(req: Request, res: Response) {
        const pipeline = [
            {
                $set: {
                    id: {
                        $convert: {
                            input: '$id', to: 'string'
                        }
                    }
                }
            },
            {
                $match: {id: req.query.id},
            },
            {
                $sort: {t: -1},
            },
            {
                $limit: 1,
            },
            {
                $addFields: {
                    t: {
                        $convert: {
                            input: '$t', to: 'date'
                        }
                    }
                }
            },
            {$project: {__v: 0, _id: 0}},
        ]
        const data = await WeatherData.aggregate(pipeline);

        return res.status(200).json({data, id: req.query.id});
    }
}

export default new DataHandler();
