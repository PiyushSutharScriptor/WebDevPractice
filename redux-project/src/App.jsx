import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
const App = () => {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
