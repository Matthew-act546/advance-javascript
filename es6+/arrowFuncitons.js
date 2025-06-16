// OLD WAY IN JAVASCRIPT
function sayName(name) {
  console.log(`Hi! your name is ${name}`);
}

var sayAge = function() {
  console.log("My age is secret in old javascript");
}

// NEW WAY IN ES6+

const sayAgeEs = (age) => { // we can rid of the parenthesis if we have 1 parameter
  console.log(`Your age is ${age} `);
}

const sayAgeEss = (age) => console.log(`Your age is ${age}`); // we can use without curlybrace but you need to make sure returning only one line of code or else you might wanna use curly braces


sayName("Matthew");
sayAgeEs(19);

sayAge();
