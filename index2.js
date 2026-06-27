//Array methodes(pop,push,shift,unshift,map,filter,reduce)
//js import/export
//objects and json

//////////////////////PRACTICE OF ARRAY METHODES//////////
const fruits = ["apple", "banana", "orange", "mango"];
//pop method removes the last element of an array and returns it
const lastFruit = fruits.pop();
console.log(lastFruit); // mango
console.log(fruits); // ["apple", "banana", "orange"]

//push method adds a new element to the end of an array and returns the new length of the array
const newFruit = fruits.push("grape");
console.log(newFruit); // 4 elements
console.log(fruits); // ["apple", "banana", "orange", "grape"]

//shift method removes the first element of an array and returns it
const firstFruit = fruits.shift();
console.log(firstFruit); // apple
console.log(fruits); // ["banana", "orange", "grape"]

//unshift method adds a new element to the beginning of an array and returns the new length of the array
const newFirstFruit = fruits.unshift("mango");
console.log(newFirstFruit); // 4 elements
console.log(fruits); // ["mango", "banana", "orange", "grape"]

//map method creates a new array with the results of calling a provided function on every element in the calling array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//filter method creates a new array with all elements that pass the test implemented by the provided function
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

//reduce method executes a reducer function on each element of the array, resulting in a single output value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// summery//
//push()-returns the new length of the array after adding a new element to the end of an array
//unshift()-returns the new length of the array after adding a new element to the beginning of an array
//pop()-returns the last element of an array after removing it from the array
//shift()-returns the first element of an array after removing it from the array
//map()-returns a new array with the results of calling a provided function on every element in the calling array
//filter()-returns a new array with all elements that pass the test implemented by the provided function
//reduce()-returns a single output value after executing a reducer function on each element of the array

////////////////////////////////////////////////////////////

//JS import/export
//importing a module
import { add, subtract } from "../math.js";
const result1 = add(5, 3);
const result2 = subtract(10, 4);
console.log(result1); // 8
console.log(result2); // 6
///////////////////////////////

//objects and json

const person = {
  name: "ermino",
  age: 90,
  city: "Bahir Dar",
};

//to convert an object to a JSON string, we can use the JSON.stringify() method
const jsonString = JSON.stringify(person);
console.log(jsonString); //returns a JSON string {"name":"ermino","age":90,"city":"Bahir Dar"}

//to convert a JSON string to an object, we can use the JSON.parse() method
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject); //returns an object { name: "ermino", age: 90, city: "Bahir Dar   " }

/////////////////
const jsonData = `{
  "name": "ermino",
  "age": 90,
  "city": "Bahir Dar"
}`;
const parsedJsonData = JSON.parse(jsonData);
console.log(parsedJsonData); //returns an object { name: "ermino", age: 90, city: "Bahir Dar" }
