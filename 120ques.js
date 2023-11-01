const obj = {};

Object.defineProperty(obj, "lang", { value: "JS", enumerable: true });

console.log(obj);
console.log(obj.lang);

/*
The Objects declared using the defineProperty is bydefault is non-Enumerable.
That'means that key would not appear in any looping operations like
[Object.keys(), for in Loop]

For making the property as Enumerable, We need to define a additional property named Enumerable: And set it to True.
The enumerable flag allows you to control whether defined properties show up in these enumeration operations. 
Setting it to false hides them by default, while true exposes them.
*/
