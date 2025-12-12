import React from 'react'

const Functions = () => {

  const btnClicked = ()=>{
    console.log("Button clicked")
  }
  const mouseEtr = ()=>{
    alert("Mouse entered")
  }
  const pressDown = ()=>{
    console.log("Key press down")
  }
  const inputC = ()=>{
    console.log("You typed something")
  }
  const passPara = (val)=>{
    console.log(val)
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

      <input onChange={()=>{
        console.log("Input changed")
      }} className='inpt' type="text" placeholder='Enter Name Here'/>

      <input type="text" className='inpt' onChange={inputC} placeholder='Type Here'/>

      {/* target is used for particular attribute */}
      <input type="text" className='inpt' onChange={(elem)=>{
        console.log("Function is called" , elem)
      }} placeholder='Type to print elem'/>

      <input type="text" className='inpt' onChange={(elem)=>{
        console.log(elem.target)
      }} placeholder='Type to print elem.target'/>

      <input type="text" className='inpt' onChange={(elem)=>{
        console.log(elem.target.value);
      }} placeholder='Type to print elem.target.value'/>

      <input type="text" placeholder='Transfer the props to function' className='inpt' onChange={(elem)=>{
        passPara(elem.target.value)
      }} />

      <div className="box" onMouseMove={(elem)=>{
        console.log("Mouse Movement on box" , elem)
        // console.log(elem);
        // console.log(elem.clientX);
        // console.log(elem.clientY)
        // console.log(elem.pageX);
        
      }}></div>

    </div>
  )
}

export default Functions
