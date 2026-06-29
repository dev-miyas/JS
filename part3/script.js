//synchronus and asynchronous js
//callback funcs
//async and await

////////////////////////////////////////////////////
//use settimeout to simulate an asynchronous operation
console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);
console.log("End");

//callback function example
function eating() {
  console.log("Now I am eating.");
}

function washingHands(callback) {
  console.log("I am washing my hands.");
  callback();
}

washingHands(eating);

//fetch data from an API using fetch() method
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    })
    .finally(() => {
      console.log("Fetch operation completed.");
    });
}
fetchData();

//fetch data using async/await
async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchDataAsync();
