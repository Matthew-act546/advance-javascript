// es6
const favFood = ["itlog", "pancit canton", "san marino", "century tuna"];

// for each lesson
// My favorite foods
favFood.forEach((products, index)=> {
  console.log(`${index + 1} ${products}`);
})

// map
const mapList = favFood.map(foods => foods + " na may coke") 

console.log(mapList);

// filterlist
const filterlist = favFood.filter(items => items === "itlog")

console.log(filterlist); 