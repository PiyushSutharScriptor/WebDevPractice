import React from 'react'
import {useNavigate} from 'react-router'
const About = () => {

  let navigate = useNavigate()

  const btnClick = ()=>{
    navigate('/')
  }
  return (
    <>
      <h1>About</h1>
      <button className='px-4 py-3 m-2 font-semibold text-xl rounded cursor-pointer border-2 border-red-400' onClick={btnClick}>Go Home Shortcut</button>
    </>
  )
}

export default About