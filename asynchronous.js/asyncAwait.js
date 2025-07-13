

const allReady = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const allReady = true

      if(allReady) {
        resolve("All ready. Kalan ready, itlog ready. let's go")
      } else {
        reject("Not ready what you still waiting! huh")
      }
    }, 1000)
  })
}

const breakEgg = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const breakEgg = true

      if(breakEgg) {
        resolve("You break the egg congrats!")
      } else {
        reject("Not ready what you still waiting! huh")
      }
    }, 1000)
  })
}

const dishEggPutSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dishEggPutSalt = true

      if(dishEggPutSalt) {
        resolve("dish the egg and put a saltcongrats!")
      } else {
        reject("Not ready what you still waiting! huh")
      }
    }, 1000)
  })
}

const serveEgg = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const serveEgg = true

      if(serveEgg) {
        resolve("serve the egg")
      } else {
        reject("Not ready what you still waiting! huh")
      }
    }, 1000)
  })
}

const makingSunnyUpSideEgg = async () => {
  try {
    const taskOne = await allReady()
    console.log(taskOne);

    const taskTwo = await breakEgg()
    console.log(taskTwo);

    const taskThree = await dishEggPutSalt()
    console.log(taskThree);

    const taskFour = await serveEgg()
    console.log(taskFour);

    console.log(`Congratulations! you made a sunny side up egg. Now Eat it`);
  } catch(error) {
    console.log(error);
  }
}

makingSunnyUpSideEgg()