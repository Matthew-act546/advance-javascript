const obj = {
  [Symbol.iterator]: function() {
    let step = 0;
    const iterator = {
      next: function() {
        step++
        if (step === 1) {
          return {value: "hello", done: false}
        } else if (step === 2) {
          return {value: "world", done: false}
        } 
        return {value: undefined, done: true}
      },
    }
    return iterator
  },
}

for (const word of obj) {
  console.log(word)
}

console.log();
const todoList = {
  tasks: ["Buy milk", "Walk the dog", "Read a book"],
  
  [Symbol.iterator]: function () {
    let index = 0;
    const tasks = this.tasks;

    return {
      next: function () {
        if (index < tasks.length) {
          return { value: tasks[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const task of todoList) {
  console.log("Task:", task);
}
