// OLD JAVASCRIPT
var names = ["matthew", "chariss", "dave"];

var number = 10; 

number = 6; 
var number = 5; 
// the problem in var on declaring variable is that we can declare a variable with the same name that we declare before
// which is very confusing

// console.log(number);


// es6+
// let and const

const someString = "meow";
// someString = "roar" // if u uncomment this, we get an error because of const means constant we cannot reassign or declare this variable 


console.log(someString);

let num1 = 6;
num1 = 9;

console.log(num1); // works perfectly fine but if you redeclare let with the same variable name ex. let num1 = 9 this will have an error
