// let a =prompt("hey wtat your age ") //! it will show error in node js but work will in browser. 
a="-1"
a = Number.parseInt(a);//#converting string to int number 
console.log(typeof a);

if(a<0){
   console.log("this is not  a valid age");
}
else if(a<9){
    console.log("you are a kid")

}
else{
    console.log("this is not a valid age ");

}
//? js termary  operator 
//* docs ->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator



//# Evaluate a codition and excute a block of code base on condition 
// let age = 19;
let marks = 9 ;
let c = (marks>10)? 'yes' : 'no';
console.log(c)

//todo   switch case practise
