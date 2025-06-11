function sum(a, b, c) {
  return a + b + c;
}

function multiply(a, b, c) {
  return a * b * c;
}

function divide(a, b, c) {
  return a / b / c;
}

function curry(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return fn(a, b, c);
      }
    }
  }
}

const curriedSum = curry(sum);
const curriedMultiply = curry(multiply);
const curriesDivide = curry(divide);

console.log(curriedSum(2)(3)(5))
console.log(curriedMultiply(2)(3)(5))
console.log(curriesDivide(20)(2)(2))


// Example no.2 
// philippine digital tax vs other countries

//curry it
function calculatePrice(tax) {
  return function(price) {
    return price + price * tax;
  };
}

const phTax = calculatePrice(0.12); // philippine tax XD
const sgTax = calculatePrice(0.09); // singapore tax
const myTax = calculatePrice(0.08); // malaysia tax
const idTax = calculatePrice(0.11); // indonesia tax

console.log(phTax(100)); 
console.log(sgTax(100));  
console.log(myTax(100)); 
console.log(idTax(100));  

// SANA ALL GANYAN TAX SAIBANG BANSA XD