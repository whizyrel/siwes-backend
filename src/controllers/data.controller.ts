import { Request, Response } from 'express';

export class DataHandler {

    public async GetWeeklyData(req: Request, res: Response) {
        return res.status(200).json("Interval");
    }

    public async GetIntervalData(req: Request, res: Response) {
        return res.status(200).json("Interval");
    }

    public async GetLatestData(req: Request, res: Response) {
        return res.status(200).json("Latest");
    }
}

export default new DataHandler();
