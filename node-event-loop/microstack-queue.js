// //example 1

// console.log('step 1');
// process.nextTick(() => {
//   console.log('step 2 - process.nextTick()');
// });
// console.log('step 3');

// //example 2

// console.log('Step 1');
// Promise.resolve().then(() => {
//   console.log('Promise resolved Step 2');
// });

// process.nextTick(() => {
//   console.log('nexttick callback Step 3');
// });
// console.log('Step 4');

// // example 3

console.log('Step 1');
process.nextTick(() => {
  console.log('nexttick callback Step 2');
});

process.nextTick(() => {
  console.log('nexttick callback Step 3');
  process.nextTick(() => {
    console.log('nexttick callback Step 4 inside nextTick()');
  });
});

process.nextTick(() => {
  console.log('nexttick callback Step 5');
});

Promise.resolve().then(() => {
  console.log('Promise resolved Step 6');
});

Promise.resolve().then(() => {
  console.log('Promise resolved Step 7');
  Promise.resolve().then(() => {
    console.log('Promise callback Step 8 inside promise.then()');
  });
  process.nextTick(() => {
    console.log('nexttick callback Step 9 inside promise.then()');
  });
});

Promise.resolve().then(() => {
  console.log('Promise resolved Step 9');
});

// handle errors and cleanup resources
// after call back has unhandled error, it will be thrown to the event loop
