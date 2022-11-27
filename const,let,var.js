console.log("javascirpt tutorial 3: var, let and const")
//let is used inside blog for better code 
var a= "this is 1st var . will be global scope and chaged latter " 
let b= "this will no be changed "
{
    let b="this is new let "
    var a="this is secondd var "// this will be printed becuase it in global scope and it changed the first var a 
}
console.log(a)
console.log(b)
const author = "faheem "//this is inmutabel(can not be changed)