import express from 'express';
import * as http from 'http';
import chalk from 'chalk';
import app from './app';

const { PORT } = process.env;

const _app = express();
_app.use(app);
http.createServer(app).listen(PORT || 6622, () => {
  console.log(chalk.yellow(`[Server] {http} started on PORT ${PORT || 6622}`));
});

process.on('uncaughtException', (error) => {
  console.error(`[Process] uncaughtException`, error);
});

export default _app;