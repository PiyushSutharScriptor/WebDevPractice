console.log("Hellow")

let ar = ["Piyush",true,1,2,{name:"Umesh"},false,function(){console.log("Function")}]
console.log(ar)
console.log(ar[0])
console.log(ar[45])
console.log()

//array methods

// forEach
let arr = [1,2,3,4,5]
arr.forEach((val)=>{
    console.log(val)
})
arr.forEach((val)=>{
    console.log(val,"Hello")
})

console.log()

//map (return val)
let arr2 = arr.map((val)=>{
    return "Hello"
})
let arr3 = arr.map((val)=>{
    return val*10
})

console.log(arr2)
console.log(arr3)

console.log()

//filter (returns boolean)
let even = arr.filter((val)=>{
    return val%2==0
})
let odd = arr.filter((val)=>{
    return val%2!=0;
}) 
console.log(even)
console.log(odd)


//find (finds the first appear of number)
let find2 = arr.find((val)=>{
    return val==2;
})
let find10 = arr.find((val)=>{
    return val==10;
})
console.log(find2) //2
console.log(find10) //undefined 

//indexOf (return index of element)
console.log(arr.indexOf(5))
console.log(arr.indexOf(4))
console.log(arr.indexOf(3))


