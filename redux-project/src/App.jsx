import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
        <Toaster position="top-right" reverseOrder={false} />
    </div>
    </>
    
  )
}


export default App
