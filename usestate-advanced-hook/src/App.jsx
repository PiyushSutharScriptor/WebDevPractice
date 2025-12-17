import React, { useState } from 'react'

const App = () => {

  const[value,setValue] = useState(20);
  const[num, setNum] = useState(1111);
  const[obj, setObj] = useState({name:'Piyush' , age:21})
  const[arr,setArr] = useState([10,20,30,40,50])
  const[men,setMen] = useState({user:"Suresh" , age:30 , city:"Hyderabad"})
  const[batch,setBatch] = useState(10)
  return (
    <div>



      <h1>Hello, Weather is {value}</h1>
      <button style={{'marginRight':'12px'}} onClick={()=>{
        console.log(value)  
        setValue(value+1)
        console.log(value);
      }}>Increase Weather</button>

      <button onClick={()=>{
        setValue(value-1)
      }}>Decrease Weather</button>
      


      <h1 style={{height:'2px', background:'red'}}></h1>



      <h1>Passing same num to setNum : {num}</h1>
      <button onClick={()=>{
        setNum(num)
      }}>Click to change num</button>
      {/* the react will not render becuase the value is same */}



      <h1 style={{height:'2px', background:'red'}}></h1>



      <h1>useState with objects : </h1>
      <h1>name : {obj.name} , age : {obj.age}</h1>
      <button onClick={()=>{
        // method 1 :
        // setObj({name:'Umesh' , age:'29'})
        // console.log(obj);
        // console.log(obj.name)
        // console.log(obj.age)

        // method 2 : 
        const newObj = {...obj}
        console.log(newObj);
        newObj.name = "Tarun"
        console.log(newObj)
        setObj(newObj)
      }}>Click to change object</button>



      <h1 style={{height:'2px', background:'red'}}></h1>



      <h1>useState with objects (short_method)</h1>
      <h1>The object : {men.user} , {men.age} , {men.city}</h1>
      <button onClick={()=>{
        console.log(men);
        setMen(prev=>({...prev,user:"Piyush",city:"Chennai"}))
        console.log(men);
      }} >Click to change object</button>



      <h1 style={{height:'2px', background:'red'}}></h1>



      <h1>useState with arrays</h1>
      <h1>Array : {arr.map((obj)=>{
        return obj+" "
      })}</h1>
      <button onClick={()=>{
        const newArray = [...arr]
        console.log(newArray);
        newArray[0] = 61111
        newArray.push(7833)
        console.log(newArray);
        
        setArr(newArray)
      
      }}>Click to change array</button>



      <h1 style={{height:'2px', background:'red'}}></h1>


      <h1>Batch update</h1>
      <h1>Value : {batch}</h1>
      <button onClick={()=>{
        //it will update only once
        setBatch(batch+1)
        setBatch(batch+1)
        setBatch(batch+1)

        //handling batch update :
        //here it will update by three(or as many as setBatch)
        setBatch(num=>(num+1))
        setBatch(num=>(num+1))
        setBatch(num=>(num+1))

        //total updates : 1(from top) + 3(batch handling) = 4
      }}>Click to change batch</button>

    </div>  
  )
}

export default App
