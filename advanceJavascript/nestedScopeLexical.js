let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30; 
    console.log(a, b, c);
  }
  inner()
}
outer()

let x = 100;
function foo() {
  console.log(x);
}

function bar() {
  let x = 200;
  foo() // This will print 100 why? because the clg X sees the x where it was defined
}

bar()