function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner
}

const fnIn = outer();
fnIn();
fnIn();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);

const add10 = makeAdder(10);

console.log(add5(2)); // 7

console.log(add10(2)); // 12

function outerFunction(outerVariable) {
  // This inner function is a closure
  return function innerFunction(innerVariable) {
    // It has access to outerVariable from its parent scope
    console.log(outerVariable + ' ' + innerVariable);
  }
}

const newFunction = outerFunction('hello');
newFunction('world'); // logs "hello world"