// Promises - promises is a promise which has three terminologies (fullfilled, pending, rejected) make sense right? Im javascript anyway - LOL!

const promise1 = new Promise((resolve, reject) => {
  const allThingsOk = true;

  if(allThingsOk) {
    resolve("Everything is fine and is okay");
  } else {
    reject("Something went wrong sadly...")
  }
})
const promise2 = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if(randomNum < 6) {
      resolve("Ok");
    } else {
      reject("not ok");
    }
  }, 2000)
})

promise2
  .then((result) => {
    console.log(result) 
    return promise1
  }).then((result) => {
    console.log(result);
  }).catch(error => console.log(error));

