let num =[12,131,21,312,2]
for(i=0;i<num.length;i++){
    console.log(num[i])
}


//? for each --> in this for each we will perform operation on every element
num.forEach((element)=>{
    console.log(element*element)
    
})
num.forEach(i=(i)=>{
    console.log(i)
})
// for ... of 
for (let item of num){
    console.log("----",item) //this will print value of array
}

for (let item2 in num ){
    console.log(item2,"we can use it like --> array[in vale ] -->",num[item2])
}