// Calculate the count of each character

const str = "hare krishna hare krishna krishna krishna hare hare";

const obj = {};

for (let x of str) {
  if (obj[x]) {
    obj[x]++;
  } else {
    obj[x] = 1;
  }
}

console.log(obj);
