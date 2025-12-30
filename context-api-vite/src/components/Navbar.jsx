import React from 'react'

const Navbar = (props) => {
  return (
    <>
        <h1>{props.theme}</h1>
        <button onClick={()=>{
            props.setTheme('dark');
        }}>Navbar Button</button>
    </>
  )
}

export default Navbar