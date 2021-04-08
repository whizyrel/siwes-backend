import { NextFunction, Request, Response } from 'express';
import express = require('express');
import cors = require('cors');
import morgan = require('morgan');
import landingTemplate from './utils/landing.util';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('static', {extensions: ['html']}));
// !body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// [middleware] address cors related issues
app.use((req: Request, res: Response, next: NextFunction) => {
    // TODO restrict origins to mms frontend DNS
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Custom-Header, ' + 'Accept, Authorization, Content-Type'
    );

    //  application/x-www-form-urlencoded,
    if (req.method === 'OPTIONS') {
        return res.status(200).json({});
    }

    next();
});

// TODO import routes here

import { query } from './helpers/pg.helper';

query(`SELECT NOW()`, (err: any, results: any) => console.log(`[Qeury]`, {err, results}));

app.get('/', (_: Request, res: Response) => {
    return res.status(200).send(landingTemplate);
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