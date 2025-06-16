// OLD WAY IN JS

var user1 = {
  name: "Matthew",
  age: 19,
  sayName: function(){
    console.log("My name is " + this.name);
    that = this;
    var fullInfo = function() {
      console.log("My name is " + that.name + " and age is " + that.age);
    };
    fullInfo()
  }
};

user1.sayName()
// NEW WAY IN ES6+

const user2 = {
  name: "chariss",
  age: 20,
  sayName2: function() {
    console.log(`My name is ${this.name}`);
    const fullInfo2 = () => console.log(`My name is ${this.name} and age is ${this.age}`)
    fullInfo2();
  },
}

user2.sayName2()