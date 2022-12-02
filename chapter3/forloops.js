//! for loop 
j=4
sumk=6
sumk += j 
//# this is equal sum +j 
console.log("j --> :",j)
console.log("sumk -->",sumk)
let sum2 =0 ;
let sum = 0 ;
let n =3
for (let i =0; i<n; i++) {
    
    sum += (i+1);
    sum2 = sum2 +i 
    console.log("n of sum ",sum)
    console.log("sum2 ---> ",i,sum2)
    
}




let obj ={
    harry: 90,
    shubh: 334,
    faheem: 1654,
    farhan: 15,
    tahmid: 12
}
for(let a in obj ){
    console.log("the marks of "+a+" is "+obj[a]) //# this will loop 
}
let b2 ="harry"
for(let b of b2 ){
    console.log(b)
}