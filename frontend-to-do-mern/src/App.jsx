import React, { useEffect, useState } from 'react'
import Heading from './components/Heading'
import AddTask from './components/AddTask'
import MyTask from './components/MyTask'
import Line from './components/Line'
import LoginPage from './components/LoginPage'
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './components/SignUpPage'
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {

  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    const token = localStorage.getItem("token")

    const res = await fetch("http://localhost:3000/form/get", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = await res.json()
    if (res.ok) {
      setTasks(data.form)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <Toaster position="top-right" />
      <Routes>

        <Route
          path='/' element={
            <ProtectedRoute>
            <div className='bg-black h-full px-10 py-6'>
              <Heading />
              <AddTask fetchTasks={fetchTasks}/>
              <Line />
              <MyTask tasks={tasks} fetchTasks={fetchTasks}/>
            </div>
            </ProtectedRoute>
          }
        />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />

      </Routes>
    </>

  )
}

export default App