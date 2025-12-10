// basics java stuffs : 

const a = document.getElementById('hest');

function abc(){
    console.log('hello world')
}

const fun = ()=>{
    console.log("hellow piyush")
}

const funn = function(){
    console.log("Hellow umesh")
}
a.addEventListener('click' , ()=>{
    console.log("Hellow world")
    funn;
    fun();
    abc();
})