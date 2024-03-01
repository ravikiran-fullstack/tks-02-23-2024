function func1() {
  console.log('func1 is called');
}

function func2() {
  console.log('func2 is called');
  func1();
}

function main() {
    console.log('main is called');
    func2();
}

main();
