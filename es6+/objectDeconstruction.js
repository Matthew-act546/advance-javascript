// old javascript

var user1 = {
  name: "matthew",
  age: 19
};

var user1Name = user1.name;
var user1Age = user1.age;
console.log(user1Name + " " + user1Age);


// es6+ 
const users = {
  user: ["matthew", "chariss", "dave"],
  age: [19, 20, 19]
}

const {user, age} = users

console.log(user, age);
