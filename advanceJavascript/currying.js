function curry(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return fn(a, b, c);
      }
    }
  }
}

function sum(a,b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5))