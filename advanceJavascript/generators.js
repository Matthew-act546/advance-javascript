function* genaratorFunction() {
  yield 'hello'
  yield 'world'
}

const objGenerator = genaratorFunction()

for (const objGen of objGenerator) {
  console.log(objGen);
}