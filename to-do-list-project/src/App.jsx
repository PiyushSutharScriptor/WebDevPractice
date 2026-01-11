import React from 'react'
import Header from './components/Header'
import Add from './components/Add'
import List from './components/List'
import { Toaster } from 'sonner';

const App = () => {
  return (
    <div className='flex bg-black h-screen flex-col items-center py-18 text-white'>
      <Toaster richColors duration={800} position="top-right" />
      <Header />
      <Add />
      <List />
    </div>
  )
}

export default App