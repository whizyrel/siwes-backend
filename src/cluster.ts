import * as os from 'os';
import cluster from 'cluster';

if (cluster.isMaster) {
  console.log(`\n[Cluster]`, `no. of cpus available: ${os.cpus().length}...`);

  for (let i = 0; i < os.cpus().length; i++) {
    console.log(`[Cluster] forking process ${i + 1}...`);
    cluster.fork();
  }

  cluster.on('exit', (_worker, code, signal) => {
    console.log(
      '\n[Cluster] worker %d died (%s) starting new worker...',
      _worker.process.pid,
      { signal, code }
    );

    if (code !== 0 && !_worker.exitedAfterDisconnect) {
      const worker = cluster.fork();

      console.log(
        `[Cluster] started a new worker => id: ${worker.id} | pid: ${worker.process.pid} => \n[Cluster] replaced worker => id:  ${_worker.process.pid} | pid: ${_worker.process.pid}`
      );

      worker.on('error', (p) => {
        console.info(
          `[Worker] (id: ${worker.id} | pid: ${worker.process.pid}) error occurred`,
          p
        );
      });

      worker.on('listening', (p) => {
        console.info(
          `[Worker] (id: ${worker.id} | pid: ${worker.process.pid}) listening`,
          p
        );
      });

      worker.on('disconnect', () => {
        console.info(
          `[Worker] (id: ${worker.id} | pid: ${worker.process.pid}) disconnected`
        );
      });

      worker.on('exit', (code) => {
        console.log(
          `[Worker] (id: ${worker.id} | pid: ${worker.process.pid}) exited with code(${code})`
        );
      });
    }
  });
} else if (cluster.isWorker) {
  console.info(`[Cluster] in process %d`, cluster.worker.process.pid);
  require('./server');
}
