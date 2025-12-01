import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

  const user = 'Arun Yadav'
  const age = 21

  return (
    <>
    {/* Navbar */}
    <Navbar />


    {/* body */}
    <div className='card'>
      <h1>Piyush Suthar & {user}</h1>
      <h2>Age : {age}</h2> 
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam hic animi minima ipsam quibusdam.</p>
    </div>

    {/* Cards */}
    <Card />
    <Card />
    <Card />
    {Card()}
    </>
  )
}

export default App