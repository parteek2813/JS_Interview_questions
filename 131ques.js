// Arrow function special Case for this.

const getData = () => {
  console.log(this);
};

function newData() {
  const newNewData = () => {
    console.log(this);
  };
  newNewData();
}

function anotherData() {
  console.log(this);
}

const obj = {
  user: 1,
};

getData.call(obj); // {}
anotherData.call(obj); // { user: 1 }
newData.call(obj); // { user: 1 }

/*
The reason you are seeing {} is because this inside the function is either undefined (strict mode) 
or global (arrow function). Calling it with .call(obj) does not affect the value of this in those cases.

Arrow functions do not bind their own this, they inherit it from the surrounding context. IsCase 
me surrounding this global object hein to {} empty object aaya

Reference: https://javascript.info/object-methods#arrow-functions-have-no-this

Normal function work as usual.
*/
