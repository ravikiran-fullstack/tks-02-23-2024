
const start = performance.now();
const jobs = Array.from({ length: 100 }, () => 10000000);

// for (const job of jobs) {
// //   console.log(job);
//   let count = 0;
//     for (let i = 0; i < job; i++) {
//         count += i;
//     }
// }

function run(jobs, concurrentWorkers){

    const chunks = chunkify(jobs, 8);

    chunks.forEach((chunk, index) => {
        const worker = new Worker('./worker.js');
        worker.postMessage(chunk);

        worker.on('message', () => {
            console.log(`Worker ${index} finished`);
            worker.terminate();
        });
    });
}

function chunkify(array, n){
    let chunks =  [];
    for(let i = n; i>  0; i--){
        chunks.push(array.splice(0, Math.ceil(array.length/i)));
    }
    return chunks;
}


const end = performance.now();

console.log(`Execution time: ${end - start} ms`);