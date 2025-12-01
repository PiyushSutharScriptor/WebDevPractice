import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent' >

    <Card user='Aman Gupta' age='28'/>
    <Card user='Striver' age={31} image='https://plus.unsplash.com/premium_photo-1763672755919-cea8be477213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D' />
    <Card user='Love Babbar' age='30' />
    <Card />
    <Card />  

    </div>
  )
}

export default App
