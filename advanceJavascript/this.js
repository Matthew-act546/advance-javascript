
// Implicit this binding
const person1 = {
  name: 'Matthew',
  sayMyName: function sayMyName() {
    console.log(`Hi ${this.name}!`);
  }
}

// console.log(person.name); 
person1.sayMyName()

// explicit this binding
function sayMyNames() {
  console.log(`Greetings! ${this.name}`);
}

sayMyNames.call(person1)

// this new binding
function Person(name) {
  this.name = name;
}

const personOne = new Person("Chariss");
const personTwo = new Person("David")

console.log(`${personOne.name} ${personTwo.name}`);


// default this binding
globalThis.name = "meow"
sayMyNames()