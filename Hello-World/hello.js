const math = require('./math');  //import method 1
const {addFn, subFn} = require("./math") //import method 2

//method 3 of export used here
console.log(math); //this will print anonymous function


// console.log("Math value is", math(2, 4)); //log method 1
// console.log("Math value is", math.addFn(2,4)); //log method 2
// console.log("Math value is", math.subFn(2,4)); 

// console.log("Math value is", addFn(1,3)); //log method 3 
// console.log("Math value is", subFn(1,3));



//hello world
// console.log("hey there? I am JS");
 