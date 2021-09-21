import { NextFunction, Request, Response } from 'express';
import express = require('express');
import cors = require('cors');
import morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('static', {extensions: ['html']}));
// !body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Custom-Header, ' + 'Accept, Authorization, Content-Type'
    );

    if (req.method === 'OPTIONS') {
        return res.status(200).json({});
    }

    next();
});

// TODO import routes here
import dataHandlerRoute from './routes/data.route';
import { connectToBroker } from './helpers/mqtt.helper';

// INFO start mqtt listener
connectToBroker();

app.use('/d', dataHandlerRoute);

app.get('/', (_: Request, res: Response) => {
    return res.status(200).json('Hello there, you are warmly welcomed!');
});

app.use((_: Request, __: Response, next: NextFunction) => {
    const error = new Error('Oops! something went wrong') as Error & {status: number};
    error.status = 404;
    next(error);
});

// [middleware] global catch error, final stop
app.use((error: any, _: any, res: Response, next: NextFunction) => {
    // [error 404] implement one nice error 404 page
    res.status(error.status || 400).json({
        error: error.message,
        code: 3,
    });

    next();
});

export default app;
