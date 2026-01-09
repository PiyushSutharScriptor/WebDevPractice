import React from 'react'
import Header from './components/Header'
import Add from './components/Add'
import List from './components/List'

const App = () => {
  return (
    <div className='flex bg-black h-screen flex-col items-center py-18 text-white'>
      <Header />
      <Add />
      <List />
    </div>
  )
}

export default App