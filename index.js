// var hoisting 

// age = 75
// console.log(age) // undefined     -- bcoz we are calling before initialising an var variable
// hoisting is a phenomenon in javascript
// when a js file before execution Global execution context is created,There in 2 phases, 1st one is memory allocation phase
// 2nd one is code execution phase
// in memory allocation phase all variables are assigned to the undefined value
// after code excetion the original value assigned to the variable
// var variable function scope available globally

// var age = 65
// console.log(age) //65


// Lets check it with let

// console.log(age)     // getting ReferenceError: Cannot access 'age' before initialization
// temporal dead zone -- we cant access let variables before initialization -------------------------------------------------------------------------------
// in memory allocation phase it is also assigned to the undefined but stored in separate context that is unavaible
// let is introduced in es 6 it is block scope
// cannot redclare but can re assign the value
// let age = 65
// console.log(age)
