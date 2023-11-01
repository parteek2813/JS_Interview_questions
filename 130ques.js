// Whatever argument passed in Object.create method are passed into the prototype chain

var God = {
  slogan: "JaiShreeRam",
};

var God2 = Object.create(God);

console.log(Object.keys(God2)); // Empty array []

delete God2.slogan;
console.log(God2.slogan); // JaiShreeRam

/*
Object .create does two things:

1. Creates a brand new Object
2. newObject.prototype = passedObject

slogan property God2 property ke property chain me attach hein na ki directly.
delete opertor kisi bhi object ki direct keys ko delete kar sakta hein na ki kisi bhi object ki 
property chain me kuch chize.

Summary: Jo bhi object as an argument bhejte hein object.create me wo directly as a prototype attach hota hein!
*/
