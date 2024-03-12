
//slice method
// creating an array
let a = [4,2,6,48,798];
//slicing the array with the arguments 1 and 4
let b = a.slice(1,4);//extracts the elements from index 1 to 3

console.log(b); //output [2,6,48]

//splice method
// create an array 
let orgArray = [5,6,7,888,2];
// using splice 
let removeElement = orgArray.splice(1,2,79,43);//elements of index 1 and 2 are removeed and 79 and 43 are added in place of them

console.log(removeElement); //output:[6,7]
console.log(orgArray); //output;[5,79,43,888,2]


// forEach method

// create an array 
const originalArray = [1, 2, 3, 4, 5];

originalArray.forEach((element) => {
console.log(element);
}); //logs each element separately without creating a separate  new array

// Output:
// 1
// 2
// 3
// 4
// 5

 
// map method 

// create an array 
const originalArray = [78, 21, 43, 4, 15];

const newArray = originalArray.map((value) => {
   return value / 2;
});
// creates a new array by performing a given function i.e dividing each element by 2 in this case
console.log(newArray); // Output: [39,10.5,21.5,2,7.5]


// remove duplicates from an array 

// creating an array 
const mainArray = [55,23,65,55,4,4,4,78]

// function takes array as parameter 
function duplicate(array){
    const uniqueSet = new Set(array); //set is created inside a function using provided array, because set stores only unique values
    const uniqueArray = Array.from(uniqueSet); //array.method is used to convert set to array
    return uniqueArray;
}

const newArray = duplicate(mainArray);

console.log(newArray.sort()); //output : [23, 4, 55, 65, 78]


// random number generator

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Number Generator</title>
</head>
<body>

<button id="button">Generate Random Number</button>
<p id="result"></p>

<script>
  // Function to generate a random number between min and max (inclusive)
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Event listener for button click
  document.getElementById('button').addEventListener('click', function() {
    // Generating a random number between 1 and 100
    const randomNumber = generateRandomNumber(1, 100);

    // Displaying the result
    document.getElementById('result').textContent = `Random Number: ${randomNumber}`;
  });
</script>

</body>
</html>

{/* ways create objects */}
Object Literal
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};


