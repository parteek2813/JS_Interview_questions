// Confusion between Object key name?

const key = "constructor";

const obj = {};

if (obj[key]) {
  console.log("Hello Admin"); // Hello Admin
} else {
  console.log("Hello Guest");
}

if (key in obj) {
  console.log("Hello Admin"); // Hello Admin
} else {
  console.log("Hello Guest");
}

if (obj.hasOwnProperty(key)) {
  console.log("Hello Admin");
} else {
  console.log("Hello Guest"); // Hello Guest
}

// OUTPUT:

/*
Hello Admin
Hello Admin
Hello Guest

Js me obj[key] & key in obj agar hum use karte hein to agr ye key wali property nahi milti hein to 
wo prototype chain me bhi khojne nikal Jata hein and Prototype chain me Ek key hoti hein with name "prototype"

Hence, We should use Obj.hasOwnProperty() in this case to avoid any confusion and for safety searching
 */
