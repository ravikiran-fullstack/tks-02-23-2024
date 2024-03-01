// Example 1

// const fs = require('fs');

// fs.readFile(__dirname + '/file.txt', (err, data) => {
//   console.log('reading the file');
// });

// process.nextTick(() => {
//   console.log('nexttick callback');
// });

// Promise.resolve().then(() => {
//   console.log('Promise resolved');
// });

//// Example 2
// const fs = require('fs');
// // 0 time delay - depends on how busy the cpu is
// setTimeout(() => {
//   console.log('timeout 1');
// }, 0);

// fs.readFile(__dirname + '/file.txt', (err, data) => {
//   console.log('reading the file');
// });

//// Example 3
// const fs = require('fs');

// fs.readFile(__dirname + '/file.txt', (err, data) => {
//   console.log('reading the file');
// });

// process.nextTick(() => {
//     console.log('nexttick callback');
// });

// Promise.resolve().then(() => {
//     console.log('Promise resolved');
// });

// setTimeout(() => {
//   console.log('timeout 1');
// }, 0);

// for (let i = 0; i < 10; i++) {
//   console.log('for loop');
// }
