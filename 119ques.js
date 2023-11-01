function show() {
  console.log("0", arguments[0]);
  console.log("Length", arguments.length);

  for (let x of arguments) {
    console.log("x", x);
  }

  console.log(Array.isArray(arguments));
}

show(21, "JS");

/**
 Here is one way to refine that explanation:

The arguments keyword in a function acts like an array in certain ways, but it is not actually an array. For example:

- It has a length property and we can access items by index like arguments[0]
- We can iterate over it with a for...of loop
- Array.isArray(arguments) returns false, so it is not technically an array

However, certain array methods like forEach() don't work on arguments. 
The reason arguments exhibits some array-like characteristics is because it is an array-like object. Under the hood,
 it has indexed elements like an array, but lacks built-in array methods.
 
To convert arguments to a real array that can be used with all array methods, we can use:

const argsArray = Array.prototype.slice.call(arguments);

Now argsArray is a true Array, so we can call forEach() and other methods on it.

In summary, arguments is array-like but not an actual array. To use array methods, we need to convert it first.
 */
