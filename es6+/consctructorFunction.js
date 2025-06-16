// OLD way javascript this looks like prototype lesson @ advance js 
// i copy paste it the prototype tutorial @ advanceJavascript folder
function Person(first, last) {
  this.first = first;
  this.last = last;
}

const user1 = new Person("Matthew David", "Fernandez");
const user2 = new Person("Chariss", "Salvador");


Person.prototype.getFullName = function () {
  return this.first + ' ' + this.last;
}

console.log(user1.getFullName());
console.log(user2.getFullName());

// prototype inheritance

function Friend(first, last) {
  Person.call(this, first, last);
  this.isFriend = true;
}

Friend.prototype = Object.create(Person.prototype)

Friend.prototype.goodFriend = function () {
  console.log(`${this.first} is a very good ${this.isFriend} friend!`);
}

const dave = new Friend("Dave", "Orbiada");

dave.goodFriend();
Friend.prototype.constructor = Friend
console.log(dave.getFullName());

// new es6+ with s per class
class Persons {
  constructor(name, age, occupation) {
    this.name = name
    this.age = age
    this.occupation = occupation 
  }

  getFullName() {
    return `${this.name} is ${this.age} years old and works as a ${this.occupation}.`;
  }
} 

const person1 = new Persons("Matthew", 19, "Software Engineer");
const person2 = new Persons("Chariss", 20, "Accountant");

console.log(person1.getFullName());
console.log(person2.getFullName());
console.log();

// Inheritance in ES6+  
class Friends extends Persons {
  constructor(name, age, occupation, isFriend) {
    super(name, age, occupation);
    this.isFriend = isFriend;
  }

  goodFriend() {
    console.log(`${this.name} is a very good ${this.isFriend} friend!`);
  }
}

const friend1 = new Friends("Dave", 21, "Graphic Designer", true);
friend1.goodFriend();
console.log(friend1.getFullName());
