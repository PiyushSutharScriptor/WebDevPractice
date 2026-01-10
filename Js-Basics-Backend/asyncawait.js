const fun = async()=>{
    console.log("Start")
    let blob = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await blob.json()
    console.log(data)
    console.log("End")
}

fun()