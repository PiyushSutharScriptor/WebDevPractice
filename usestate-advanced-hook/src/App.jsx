import React, { useState } from 'react'

const App = () => {

  const[value,setValue] = useState(20);
  return (
    <div>
      <h1>Hello, Weather is {value}</h1>
      <button onClick={()=>{
        setValue(value+1)
      }}>Increase Weather</button>
      <button onClick={()=>{
        setValue(value-1)
      }}>Decrease Weather</button>
    </div>
  )
}

export default App
