// Is Everything in JS is an Object?

const age = 21;
const str = "JS";
const isValid = true;

console.log(age.toString());
console.log(str.toLowerCase());
console.log(isValid.toString());

/*

Javascript me sab kuch ek object nahi hote .... agr hota to hum null & undefined
ko bhi toString() me convert kar skte the but wo possible nahi.

Then How everything in js seems like an Object?
Because hum string, number, boolean par method call kar pate hein is wajah se hume 
lagta hein .

But ye possible hein ek special Concept ki madad se i.e Boxing. Boxing ek aise concept hein 
which says ki jab bhi hum kisi bhi primitive value par method ko call karte hein to boxing, uss primitive
value ko Object{} me convert kar deta hein internally.

what this operation might look would be?

new String(age);
new Number(str);
new Boolean(isValid);


This is done in the particular momemt only, and once the function is executed, the 
created Object are destroyed then.

REFERENCE: https://www.codingninjas.com/studio/library/javascript-boxing-and-unboxing
*/
