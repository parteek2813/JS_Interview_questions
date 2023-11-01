// Given an string as an input, we have to form a nested object using this string, and the last value
// of this object must be the value of the string object at the end as a key

// Input: a.b.c.d.e

/* Output: {
    a: {
        b: {
            c: {
                d: e
            }
        }
    }
}
*/

const str = "a.b.c.d.e";

str.split(".").reduceRight(function (acc, next) {
  return { [next]: acc };
}); // convert to array

// console.log(res); //{ a: [ { b: [Array] } ] }
