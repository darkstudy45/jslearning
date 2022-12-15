//! arr map method 
console.log("array map method starting")


let arr =[45,4513,134]
arr.map((value=>{
    console.log(value)
}))
//# we use map to make new arr 

//#  and we use for each existing array 


//! array filter mathod 


console.log("array filter method starting")
let arr2=[1,2142,123,1242231,111]



let a2= arr2.filter((a)=>{
    return a>10;
})
console.log("this is done filter method ",a2)



//! reduce method 
console.log("array reduce method starting")



let arr3 = [2,2312,132,112,11,1]
let reducedarr = arr3.reduce((h1,h2)=>{
    return h1+h2;

})
console.log(reducedarr)
