//functions

let a = 32;
console.log(a)

const b = 32
console.log(b)

function gree(){
    console.log("heloow")
}

gree()

const add = (a,b)=>{
    return a+b
}

const sub = function(a,b){
    return a-b
}

console.log(add(2,2))
console.log(sub(12,4))

const mult = (a,b)=> a*b
console.log(mult(2,10));

//map
const nums = [1,2,3,4]
const res = nums.map(num=>num*2)
console.log(res)

const res2 = nums.map(num=>num-1)
console.log(res2)


//filter
const arr = [1,2,3,4]

const fres = arr.filter(num=>num%2==0)
console.log(fres)

const fres2 = arr.filter(num=>num%2!=0)
console.log(fres2);


//reduce
const newArr = [1,2,3,4]
const sum = newArr.reduce((total,num) => total+num,5)
const sum2 = newArr.reduce((total,num) => total+num,0)
console.log(sum)
console.log(sum2)

const arr3 = [11,22,33,44,55]
arr3.forEach((num) => console.log(num))


//destructuring 
const arr4 = [1,2,3,4]
const[aa,bb,cc,dd] = arr4

console.log(aa," ",bb," ",cc," ",dd)
console.log(aa," ",dd)

const obj1 = {name : "Piyush", age : 23}
const{a2,b2} = obj1
console.log(a2,b2)


//promises
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promised resolved")
    },1000)
})

p1.then((res)=>{
    console.log(res)
}).catch((ok)=>{
    console.log(ok)
})


//async : 
async function greett(){
    console.log("helowww world")
}

greett()