import React from 'react'

const App = () => {

  //clear storage : 
  // localStorage.clear();
  // sessionStorage.clear();

  //setItem
  localStorage.setItem("name","Piyush")
  localStorage.setItem("age",45)
  localStorage.setItem("city","Hyderabad")
  
  //getItem
  const userName = localStorage.getItem("name");
  console.log(userName); //Piyush
  console.log(localStorage.getItem("city")); //Hyderabad
  
  //rewrite 
  localStorage.setItem("name","Umesh")
  console.log(localStorage.getItem("name")) //Umesh

  //remove
  localStorage.removeItem("city")
  console.log(localStorage.getItem("city")) //null

  //object storing (default)
  const obj = {
    name : "Toyota",
    model : "Innova",
    type : 'Manual'
  }
  console.log(obj)
  localStorage.setItem("vehicleInfo",obj)

  //object storing as String(using stringfy)
  localStorage.setItem("vehicleString" , JSON.stringify(obj)) 


  //printing the JSON.stringify obj
  const str = localStorage.getItem("vehicleString")
  console.log(str)
  console.log(typeof(str))


  //converting the JSON.stringify obj into object again(JSON.parse)
  const convertedObj = JSON.parse(str)
  console.log(convertedObj)
  console.log(typeof(convertedObj))

  return (
    <div>
      App
    </div>
  )
}

export default App
