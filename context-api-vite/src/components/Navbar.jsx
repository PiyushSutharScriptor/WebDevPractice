import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = ({children,theme}) => {
  console.log(children)
  console.log(theme)
  return (
    <div className='nav1'>
      <h2>Piyush Suthar</h2>
      {children[0]}
      {children[1]}
      <Navbar2 theme={theme} />
    </div>
  )
}

//another way of writing above functions
/*
const Navbar = (props) => {
  console.log(props)
  console.log(props.children)
  return (
    <div className='nav1'>
      <h2>Piyush Suthar</h2>
      {props.children[0]}
      {props.children[1]}
      <Navbar2 theme={props.theme} />
    </div>
  )
}
*/

export default Navbar