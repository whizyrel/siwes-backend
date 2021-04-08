import { Pool, PoolClient, PoolConfig, QueryResult } from 'pg';

const {DB_USER, DB_NAME, DB_PASSWORD, DB_PORT, DB_HOST} = process.env;

const conOpts: PoolConfig = {
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: <number>(DB_PORT as unknown),
  host: DB_HOST,
  keepAlive: true,
};

const pool = new Pool(conOpts);

pool.on('error', (error: any) => console.error('[PG][error]', {error}));

export const transaction = (): Promise<PoolClient> => {
  return pool.connect();
};

/**
 * @param {Array<any>} args
 */
export const query = async (...args: Array<any>): Promise<void> => {
  // args: query, param, cb, verbosity
  const query = args[0];
  let params = args[1];
  let cb = args[2];
  let verbose = false;

  verbose = args.length === 4 ? (args[2], cb = args[3]) : false;
  params = args.length === 2 ? (null) : (args[1]);
  cb = args.length === 2 ? (args[1]) : (args[2]);

  const start = Date.now();
  const client = await pool.connect();

  client.query(query, params, (err: Error, res: QueryResult<any>) => {
    const timeTaken = Date.now() - start;

    if (verbose) {
      console.log(
          `[PSQL]: executed query`,
          {query, params, timeTaken
        });
    }

    cb(err, res, client);
    client.release();
  });
};