// // Example 1
// setTimeout(() => {
//   console.log('setTimeout callback Step 1');
// }, 0);

// setTimeout(() => {
//   console.log('setTimeout callback Step 2');
//   Promise.resolve().then(() => console.log('promise inside setTimeout'));
//   process.nextTick(() => console.log('nexttick inside setTimeout'));
// }, 0);

// setTimeout(() => {
//   console.log('setTimeout callback Step 3');
// }, 0);

// // Example 2
// console.log('Step 1');
// process.nextTick(() => {
//   console.log('nexttick callback Step 2');
// });

// process.nextTick(() => {
//   console.log('nexttick callback Step 3');
//   process.nextTick(() => {
//     console.log('nexttick callback Step 4 inside nextTick()');
//   });
// });

// process.nextTick(() => {
//   console.log('nexttick callback Step 5');
// });

// Promise.resolve().then(() => {
//   console.log('Promise resolved Step 6');
// });

// Promise.resolve().then(() => {
//   console.log('Promise resolved Step 7');
//   Promise.resolve().then(() => {
//     console.log('Promise callback Step 8 inside promise.then()');
//   });
//   process.nextTick(() => {
//     console.log('nexttick callback Step 9 inside promise.then()');
//   });
// });

// Promise.resolve().then(() => {
//   console.log('Promise resolved Step 9');
// });

//// Example 3

// setTimeout(() => {
//   console.log('setTimeout callback Step 4');
// }, 300);
// setTimeout(() => {
//   console.log('setTimeout callback Step 5');
// }, 500);
// setTimeout(() => {
//   console.log('setTimeout callback Step 6');
// }, 0);
