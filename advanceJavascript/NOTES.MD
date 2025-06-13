# My notes in Advance Javascript

## Lexical scope
Lexical scope is how variables treated in block of codes {} in or not in functions

## Closure
Closure (according to Mozilla/mdn docs)
A closure is the combination of a function bundled together (enclosed) with references to 
its surrounding state (the lexical environment). In other words, a closure gives a function
access to its outer scope. In JavaScript, closures are created every time a function is 
created, at function creation time.

more easier to understand definition of closure
In JavaScript, when we return a function from another function, we are effectively returning a
combination of the function definition along with the function's scope. This would let the
function definition have an associated persistent memory which could hold on to live data
between executions. That combination of the function and its scope chain is what is called a
closure in JavaScript.

keep in mind is that with closure an inner function has access in the outer function scope 
even the outer function has finished execution 


## CURRYING
Currying is a process in functional programming in which we transform a function with multiple
arguments into a sequence of nesting functions that take one argument at a time.
Because in currying, the goal is:
"Break one big multi-argument function into multiple single-argument calls."

## this keyword
The JavaScript this keyword which is used in a function, refers to the object it belongs to
It makes functions reusable by letting you decide the object value
this value is determined entirely by how a function is called

How to determine ‘this’? 
- Implicit binding
- Explicit binding
- New binding
- Default binding

### Implicit
1. When a function is called using dot notation (obj.fn()), this refers to the object before the dot → person1.
### Explicit
2. Use call() when you:
Want to re-use a function for another object
Are working in situations like event handlers, callbacks, or manual control
### new binding
3. When a function is called with new, a new empty object is created, and this refers to that new object.
### Default binding
4. It’s error-prone and discouraged. Instead, use explicit, implicit, or arrow functions.

### Order of precedence
1. new binding
2. Explicit binding
3. Implicit binding
4. Default binding |

## Prototype
Prototype is an object that other objects inherit properties and methods from.
It allows JavaScript to support inheritance even though it's not class-based like Java or Python.

Importance of Prototype
1. Memory efficiency
  Share methods among instances
2. Inheritance
	Lets one object inherit from another (\_\_proto__)
3. Object behavior control
	Many built-in methods (toString, valueOf) come from Object.prototype

The protype value is like an someString.toUpperCase() the .toUpperCase() is the prototype of that
BUT in prototype for example you create a prototype .getFullName() method to the Person constructor so the 
.getFullName method will only be available to the Person instances


## class
classes and constructors are related concepts used for creating objects for example person or house or buildings!

## ITERABLE AND ITERATOR
An object which implements the iterable protocol is called an iterable 
For an object to be an iterable it must implement a method at the key [Symbol iterator]
That method should not accept any argument and should return an object which conforms to
the iterator protocol
The iterator protocol decides whether an object is an iterator
The object must have a next() method that returns an object with two properties
value: which gives the current element
done: which is a boolean value indicating whether or not there are any more elements that
could be iterated upon

## Generators
A generator function is a function that can stop in midway and then continue where it's start 
simply "can pause the execution"