function Person(first, last) {
  this.first = first;
  this.last = last;
}

const user1 = new Person("Matthew David", "Fernandez");
const user2 = new Person("Chariss", "Salvador");

// INSTEAD OF THIS TYPE OF FUNCTION. WE CAN USE prototype! to available to all!
// user1.getFullName = function () {
//   return this.first + ' ' + this.last;
// } 

// we can use this instead!
Person.prototype.getFullName = function () {
  return this.first + ' ' + this.last;
}

console.log(user1.getFullName());
console.log(user2.getFullName());

// prototype inheritance
