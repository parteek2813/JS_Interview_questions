// Create a function add without using a function and arrow function

const a = 10;
const b = 20;

const add = new Function("a", "b", "console.log(a+b);");

add(10, 20);

/*
The above opertion was done using the function constructor in which 
new Function() accepts some argument, we can give as much arugment as we want but 
keeping in mind that last argument would be the function body and before that everyone would
act as an arguments Strictly
*/
