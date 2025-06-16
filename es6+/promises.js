// old way of handling asynchronous code with callbacks javascript

console.log("start");

function getData(data, callback) {
  setTimeout(() => {
    console.log("reading data...");
    callback({data: data});
  }, 2000);
}

getData("matthew", function(data) {
  console.log(data);
});

console.log("finish");

// This is an example of how to handle asynchronous code using promises in ES6+.
console.log("start with promises");
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "matthew";
    console.log("reading data with promises...");
    // reject("Error: Something went wrong!"); // reject the kasi may  error etc
    resolve({data: data});
  }, 2000);
});

prom.then((data) => {
  console.log(data);
}).catch((err) => {
  console.error("Error:", err);
});

console.log("finish with promises");