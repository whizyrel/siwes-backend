import express from 'express';
import * as http from 'http';
import chalk from 'chalk';
import app from './app';
import mongoose from 'mongoose';

const _app = express();
_app.use(app);

const { PORT, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
// INFO mongodb does not resolve hostname to IP, I guess, using IP instead
// INFO using the IP of the most internal IP that is not for the public interface
// INFO process.env.ASHIPA_CS_HOST_IP (set on the droplet or my local machine) === host ip for non public interface of the droplet or my local machine
const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose
  .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(chalk.yellow(`[Server] {DB} {Mongodb} Success`));
  })
  .catch((error: any) => {
    console.log(chalk.red(`[Server][Error] {DB} {Mongodb}`), error);
  });

http.createServer(app).listen(PORT || 6622, () => {
  console.log(chalk.red(`[Server] {http} started on PORT ${PORT || 6622}`));
});

process.on('uncaughtException', (error) => {
  console.error(`[Process] uncaughtException`, error);
});

export default _app;
