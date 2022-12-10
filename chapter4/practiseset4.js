//!Q-1
console.log("fah\"".length)



//!Q-2

let string = "faheem";
console.log(string[0])// this will print first charecter            

console.log(string[string.length-1])//this will print last charecter

//!Q-3

let lowercasestring = "FaHEem"
console.log(lowercasestring.toLowerCase())



//! Q-4

let trimstr = "please give me 1000"

// Use the replace() method to remove the numbers
var newStr = trimstr.replace(/[a-z]/g,"");
// let laststr = trimstr-newStr

console.log(newStr.trim());  // Output: "Hello  World"

//! Q-5
let finalstr ="what do you do for living"


console.log(finalstr.replace(finalstr[4],"X "))
