import React from 'react'
import Heading from './components/Heading'
import AddTask from './components/AddTask'
import MyTask from './components/MyTask'
import Line from './components/Line'
import LoginPage from './components/LoginPage'
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './components/SignUpPage'

const App = () => {
  return (
    <>
      <Routes>

        <Route
          path='/' element={
            <div className='bg-black h-full px-10 py-6'>
              <Heading />
              <AddTask />
              <Line />
              <MyTask />
            </div>
          }
        />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />

      </Routes>
    </>

  )
}

export default App