import React from 'react'

const App = () => {

  const btnClicked = ()=>{
    console.log("Button clicked")
  }
  const mouseEtr = ()=>{
    alert("Mouse entered")
  }
  const pressDown = ()=>{
    console.log("Key press down")
  }
  return (
    <div className='hero'>
      <h1>Hello Piyush</h1>
      <button className='btn' onClick={btnClicked}>Click Here</button>
      <button className='btn' onMouseEnter={mouseEtr}>Click Here</button>
      <button className='btn' onKeyDown={pressDown}>Click Here</button>
      <button className='btn' onClick={()=>{
        alert("Don't hover on this button")
      }} >Funtion Button</button>

    </div>
  )
}

export default App
