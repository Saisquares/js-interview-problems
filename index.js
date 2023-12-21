// 1 var hoisting 

// age = 75
// console.log(age) // undefined     -- bcoz we are calling before initializing an var variable
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
// TDZ - It is a specific period in the execution of js code where variables declared with let and const exist but cannot be accessed any value
// in memory allocation phase it is also assigned to the undefined but stored in separate context that is unavaible
// let is introduced in es 6 it is block scope
// cannot redeclare but can re assign the value
// let age = 65
// console.log(age)

// functions hoisting
// when memory allocation phase whole function body is assigned it is availabale entire js page 

// foo = 30
// console.log("FOO", foo)

// var foo = 100
// console.log("FOO", foo)
// foo - undefined
// foo - 30
// foo - 100


// for(var i = 0; i < 10; i++){
//     setTimeout(() => console.log(i), 0)
// }

//101010101010101010
// var is global scope when it comes with settimeout it will act like different after incrementing it will go to local scope

// for(let i = 0; i < 10; i++){
//     setTimeout(() => console.log(i), 0)
// }
//0-9
// every execution let will create new variable 

// var obj = {
//     fullname:"saikumar",

//     prop: {
//         fullname: "inside prop",
//         getFullName: function() {
//             return this.fullname;
//         }
//     },

//     getFullnamev2: () => this.fullname,

//     getFullNamev3: (function (){
//         return "darisetti"
//     })(),

// }
// console.log(obj.fullname)
// console.log(obj.prop.getFullName())
// console.log(obj.getFullnamev2())
// console.log(obj.getFullNamev3)

// saikumar
// inside prop
// undefined
// darisetti

// this keyword points window object in arrow function