// What is pure function?
/*
Pure function has mainly two requirements:

1. For same input, return same output
2. Cause no side effects - Jo function apne defined access scope ke bahar kuch bhi access kare 
ya kuch bhi change kare


Benefits of pure function:

1. Memoization is Easy
2. Testing is Easy
*/

// Pure Function 1
// function amIPureFunction() {}

// console.log(amIPureFunction());
// console.log(amIPureFunction());
// console.log(amIPureFunction());
// console.log(amIPureFunction());

// Pure function 2
// function addTwoNumber(n1, n2) {
//   return n1 + n2;
// }

// console.log(addTwoNumber());
// console.log(addTwoNumber());
// console.log(addTwoNumber());
// console.log(addTwoNumber());

// Not a Pure function 3
// function notAPureFunction() {
//   return Math.random(); // Math.random iss function scope ke bahar hein is wajah se this function does not
//   // satisfy both req. to be a pure fn.
// }

// console.log(notAPureFunction());
// console.log(notAPureFunction());
// console.log(notAPureFunction());
// console.log(notAPureFunction());

// Not a pure Function 4

// function notAPureFunction2() {
//   console.log("Hello everyone");
// }

// console.log(notAPureFunction2());
// console.log(notAPureFunction2());
// console.log(notAPureFunction2());
// console.log(notAPureFunction2());
