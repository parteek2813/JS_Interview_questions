// Switch statement uses "===" instead of "==" for comparisons

const a = "81";

switch (a) {
  case 81:
    console.log("==");
    break;
  case "81":
    console.log("===");
    break;
  default:
    console.log(":)");
    break;
}

// OUTPUT: "==="
// REFERENCE: https://javascript.info/switch
