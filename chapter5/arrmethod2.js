//! More arr method 



let numbers = [12,1312,341,24,13213,1313]
delete numbers[0];//# this will not change array length .

console.log(numbers)

let num1 = [1,23,231]
let num2 = [11,223,2231]
let concated_arr=num1.concat(num2)
console.log(concated_arr)

//# sort method 



let sort_try_arr=[3,432,4134,514]
console.log(sort_try_arr.sort()) 
//# this will short arr alphbetically and this will work thingking every element as a  string 
//? This will not short small number -> big number 



//! sort method
let compare = (a, b)=>{
    return a-b //# thsi is working in this way in sort method we are declaring 
}

let num4 = [3,42,31,41,34,31,41,31,4,13414354,]
num4.sort(compare)
console.log("assending order arr",num4)
num4.reverse()
console.log("asending order reverse arr ",num4)

//! splice -->
//#
//# splice syntax num.splice(starting_position,how_many_item,item,item,item,......)
num4.splice(3,3,101,102,103);
console.log("spliced arr",num4) 
