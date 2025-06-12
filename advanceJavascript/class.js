class Person {
  constructor(fName, lName){
    this.fName = fName;
    this.lName = lName;
  }

  sayMyName() {
    return this.fName + ' ' + this.lName;
  }
}

const matthew = new Person("Matthew David", "Fernandez")

console.log(matthew.sayMyName());

class Friend extends Person {
  constructor(fName, lName){
    super(fName, lName);
    this.isFriend = true;
  }

  GoodFriend() {
    return this.sayMyName() + ' ' + "is a good friend"
  }

  BadFriend() {
    return this.sayMyName() + ' ' + "is a bad friend"
  }
}

const dave = new Friend("Dave", "Orbiada")

console.log(dave.BadFriend()); 
console.log(dave.GoodFriend()); 