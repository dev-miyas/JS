// //practice of const and let variables////
//variables in js are dynamic that means we do not have to worry about the datatype it knows by itself
const a = 10;
console.log(a); // 10
// a = 20;
// console.log(a); // throws an err we can not reassign a const variable
let name = "Abebe";
console.log(name); // Abebe
name = "Kebede";
console.log(name); // Kebede b/c we can reassign a let variable

/////////////////////////////////////////////////

// practice of conditional statements
if (6 > 5) {
  console.log("6 is greater than 5");
} else if (6 < 5) {
  console.log("6 is less than 5");
} else {
  console.log("6 is equal to 5");
}

//practice of loops
while (7 > 5) {
  console.log("7 is greater than 5");
  break;
}

do {
  console.log("hello world1");
} while (false);

for (let index = 0; index < 6; index++) {
  console.log("hello world2");
}

//practice of function and arrow functions
function makeBread(flour, water) {
  return `Bread made with ${flour} cups od flour and ${water} cups of water`;
}

console.log(makeBread(2, 1));

//changing this normal regular func to arrw func
const makeBreadWithArrow = (flour, water) => {
  return `Bread made with ${flour} cups od flour and ${water} cups of water`;
};
console.log(makeBreadWithArrow(3, 2));

//some special behaviors on arrow func
const greet = (name) => {
  return `Hello ${name}`; //we can leave out the parentheses if there is only 1 parameter
};
const namee = greet("ppl");
console.log(namee);

//we can also leave curly braces if there is only one expressiom in return.....if we leave out those braces we must also leave out 'return'
