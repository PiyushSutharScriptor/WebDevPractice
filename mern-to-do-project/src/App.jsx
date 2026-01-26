import React from 'react'
import Heading from './components/Heading'
import AddTask from './components/AddTask'
import MyTask from './components/MyTask'
import Line from './components/Line'

const App = () => {
  return (
    <div className='bg-black h-screen px-10'>
      <Heading />
      <AddTask />
      <Line />
      <MyTask />
    </div>
  )
}

export default App