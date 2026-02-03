import React, { useEffect, useState } from 'react'
import { SiHey } from "react-icons/si";
import { FaRegHandPointDown } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Heading = () => {

  const [username, setUsername] = useState("User")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")

      const res = await fetch("http://localhost:3000/api/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await res.json()
      if (res.ok) {
        setUsername(data.user.username)
      }
    }

    fetchUser()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className='pt-8 '>
      <div className='flex items-center justify-between text-white text-3xl font-bold sm:text-5xl'>

        <div className='flex gap-4'>
          <h1 className=''>Hello<span className='text-green-400'>,</span> {username}</h1>
          <span className='text-green-400 transition animate-[shake_0.5s_ease-in-out_infinite]'><SiHey /></span>
        </div>

        {/* logout */}
        <button onClick={handleLogout} className='flex text-sm font-medium cursor-pointer hover:scale-110 transition border-white border-2 px-2 gap-2 py-1 rounded-md items-center bg-red-600'>
          <h1>Give Up</h1>
          <h1><FaSignOutAlt /></h1>
        </button>

      </div>

      {/* Add task heading */}
      <div className='text-gray-600 font-medium text-2xl mt-10 flex items-center gap-3'>
        <h1 className=''>Add Task </h1>
        <span className='text-green-600'><FaRegHandPointDown /></span>
      </div>

    </div>
  )
}

export default Heading
