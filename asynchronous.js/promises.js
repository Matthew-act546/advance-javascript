// Promises - promises is a promise which has three terminologies (fullfilled, pending, rejected) make sense right? Im javascript anyway - LOL!

const promise1 = new Promise((resolve, reject) => {
  const allThingsOk = true;

  if(allThingsOk) {
    resolve("Everything is fine and is okay");
  } else {
    reject("Something went wrong sadly...")
  }
})

console.log(promise1);

const promise2 = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if(randomNum > 7) {
      resolve("Ok");
    } else {
      reject("not ok");
    }
  }, 2000)
})

console.log(promise2);