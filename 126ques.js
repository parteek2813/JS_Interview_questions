// How to break foreach Loop

const arr = [1, 2, 3, 4, 5];

// arr.forEach(function (value) {
//   if (value == 2) {
//     return;
//   }
//   console.log("value = ", value);
// });

// Method 1 - By throwing an exception
// arr.forEach(function (value) {
//   if (value == 2) {
//     throw new Error("break");
//   }
//   console.log("value = ", value);
// });

// By setting the arr.length as 0
// arr.forEach(function (value) {
//   if (value == 2) {
//     arr.length = 0;
//   }
//   console.log("value = ", value);
// });

// By setting the splice method to break the array
arr.forEach(function (value, index) {
  if (value == 2) {
    arr.splice(index + 1, arr.length);
  }
  console.log("value = ", value);
});
