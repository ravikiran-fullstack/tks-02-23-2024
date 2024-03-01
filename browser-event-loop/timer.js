console.log('Step 1');
setTimeout(() => {
  console.log('setTimeout callback Step 1');
}, 2000);
console.log('Step 2');

let counter = 0;
const interval = setInterval(() => {
  console.log('setInterval callback', counter++);
  if (counter === 5) {
    clearInterval(interval);
  }
}, 1000);
console.log('Step 3');