// OLD WAY IN JS
function multiply(x, y) {
  var a = x || 1;
  var b = y || 1;
  console.log(a * b);
}

// NEW WAY IN ES6+
const divide = (x = 1, y = 1) => {
  console.log(x * y);
}

multiply(5,5);
divide(10/2);
multiply();
divide();
