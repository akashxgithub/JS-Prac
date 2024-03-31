// Arrow function

// arrow function is a brief way to write anonymous functions in JS.
// it was introduced in ES6 

// syntax - (parameters) => { body of the function }

// ex -
//     let sum = (x, y) => {
//     return x + y;
// };

// let sum = (x, y) => x + y;  //one liner 

// const greet = (name) => {
//     return "Hello, " + name;
// };

// uses 
// 1.anonymous
// 2.Makes code more readable and predictable
// 3.offer conciseness
// 4.implicit return for one liner 
// 5.Lexical scoping of 'this'


// Callback function 

// a function can be passed in another function as an argument such function is called as calllback func

// function add(a, b, callback) {
//     const result = a + b;
//     callback(result); 
// }


// function handleResult(result) {
//     console.log("The result is:", result);
// }


// add(5, 3, handleResult); 


// ErrorHandling 

// try ...catch 
// it allows us to catch errors so that the remaining script continues to execute instead throwing an error 

// try {
  
//     const resul = 10 /10 ; 
//     console.log(result); 
// } catch (error) {
//     console.error("An error occurred");
// }

// The error object 
// // for built in errors,When an error occurs, JavaScript automatically creates an error object, which contains properties such as message and stack that provide details about the error.

// ex - try {
//     hey ;
// } catch (error){
// console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }



// throwing custom error
// we can throw own error by using throw syntax
// We can also throw a particular error by using built in constructors
 
// ex - 
// try{
// let age = prompt("Enter age")
// age = Number.parseInt(age)
// if (age > 155){
//     throw new Error("This is invalid")
// }
// }
// catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }