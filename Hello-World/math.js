// function add(a,b){
//     return a + b;
// }

// function sub(a,b){
//     return a - b;
// }
// module.exports = add;  //method 1 to export function

//method 2 for multiple export
// module.exports = {  
//     addFn: add,
//     subFn: sub,
// };

//method 3 - anonymous function 
exports.add1 = (a ,b) => a+b;

exports.sub2 = (a, b) => a-b;