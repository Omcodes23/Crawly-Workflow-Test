// ERROR: Undefined variable accessed
console.log(undefinedVariable);

// ERROR: Syntax error - missing closing bracket
const arr = [1, 2, 3;

// ERROR: Type error - calling method on null
null.toString();

// ERROR: Reference error - using variable before declaration
console.log(x);
var x = 5;

// ERROR: Range error - creating an array with negative length
const negativeArray = new Array(-1);

// ERROR: Unreachable code
function test() {
  return 42;
  console.log("Never reaches here");
}

// ERROR: Missing semicolons
const str = "hello"
const num = 100
const obj = { key: "value" }

// ERROR: Unused variables
const unused1 = "value";
const unused2 = 123;
let unused3 = [];

// ERROR: Infinite loop
while (true) {
  let i = 0;
}

// ERROR: Division by zero
const result = 10 / 0;

// ERROR: Comparing with === incorrectly
if ("5" === 5) {
  console.log("This won't execute");
}

// ERROR: Missing function parameters
function add(a, b) {
  return a + b;
}
add(5); // Missing second parameter

// ERROR: Array index out of bounds
const myArray = [1, 2, 3];
console.log(myArray[10]); // Returns undefined

// ERROR: Reassigning constants
const PI = 3.14;
PI = 3.14159; // Cannot reassign

// ERROR: Using var instead of let/const
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100); // Closure issue
}

// ERROR: Implicit type coercion issues
const badSum = "5" + 3; // Results in "53", not 8
const badComparison = 0 == false; // true, unexpected

// ERROR: Function called before declaration
console.log(undeclaredFunc());

// ERROR: Nested deeply without clear structure
const deeply = { a: { b: { c: { d: { e: { f: undefined } } } } } };