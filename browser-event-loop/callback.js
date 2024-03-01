function fetchData(callback){
    setTimeout(() => {
        callback('Done!');
    }, 2000);
}

function processData(data){
    console.log('Processing data', data);
}

console.log('Step 1');
fetchData(processData);
console.log('Step 2');