// How to make passing arguments mandatory?

function check() {
  throw new Error("Param Required");
}

function show(name = check()) {
  // Name is required
  console.log(name);
}

// show(); // throw new Error("Param Required");
show("Parteek");

/*
show() function call krwate samay agr hum argument me kuchh nahi dete.... to directly check() function call ho jayega
and then ek error dekhne ko milega

But whi agar kuch argument me dete hein to check() function call nahi hoga aur hamara program smooth chalega
 */
