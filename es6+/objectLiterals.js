// old way javascript

function playMusic1(title, author) {
  return {
    title: title,
    author: author
  };
}

var music1 = playMusic1("I know", "Tom Jones");
console.log(music1);

// new way in es6+ javscript
function playMusic2(title, author) {
  return {
    title,
    author
  };
}

const music2 = playMusic2("Can't take my eyes off you", "Engelbert Humperdinck");
console.log(music2);
