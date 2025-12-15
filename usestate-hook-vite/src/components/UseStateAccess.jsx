import React, { useState } from 'react'

const UseStateAccess = () => {

    const[value,setValue] = useState(20);
    const[user,setUser] = useState('Piyush')
    const[st,setSt] = useState(true);
    const[array,setArray] = useState([10,20,30,40,50])

  return (
    <div>

        <h1>Value : {value}</h1>
        <button onClick={()=>{
            setValue(value+1)
        }}>Click to change value</button>

        <h1>Name : {user}</h1>
        <button onClick={()=>{
            setUser('Umesh')
        }}>Click to change name</button>

        <h1>State : {st.toString()}</h1>
        <button onClick={()=>{
            setSt(!st)
        }}>Click to change state</button>

        <h1>Array : {array.map((obj)=>{
            return obj+" "
        })}</h1>
        <button onClick={()=>{
            setArray([1,2,3,4,5])
        }}>Click to change array</button>

        


    </div>
  )
}

export default UseStateAccess
