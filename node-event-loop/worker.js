const {parentPort}  = require('worker_threads');

parentPort.on('message', (chunk) => {
    for (const job of jobs) {
      //   console.log(job);
      let count = 0;
      for (let i = 0; i < job; i++) {
        count += i;
      }
    }

    parentPort.postMessage('done');
});