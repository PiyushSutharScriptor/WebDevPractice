//object creation
let obj = {name:"Piyush"}
console.log(obj);

let obj2 = {
    name:"Umesh",
    class : 12,
    college : "Chaitanya University"
}
console.log(obj2)

//===================================================//

//accessing 
let obj3 = {
    name:"Piyush",
    class : 12,
    college : "Chaitanya University"
}
//type 01
console.log(obj3.name);
console.log(obj3.class);
//type 02
console.log(obj3["college"]);


//changing values in obj
obj3.name = "Raj"
obj3["college"] = "Lords"
console.log(obj3);


//freezing obj (to avoid changes in obj)
Object.freeze(obj3)
obj3.name = "Piyush"
console.log(obj3); //the name value do not change


