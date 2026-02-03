import React, { useState } from 'react'
import toast from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom'

const SignUpPage = () => {

  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignup = async (e) => {

    e.preventDefault()

    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username:username,
        email: email,
        password: password
      })
    })

    const data = await response.json()

    if (response.ok) {
      toast.success("Signup success")
      navigate("/")
    } else {
      toast.error(data.message)
    }
  }

  return (
    <>
      <div className='flex flex-col bg-black items-center h-screen justify-center'>

        <form onSubmit={handleSignup} className='border-2 bg-zinc-900 p-5 rounded-3xl sm:w-1/3 text-white border-green-400 flex items-center flex-col'>

          <h1 className='text-6xl mt-10 pb-1 font-bold '>SignUp</h1>
          <h1 className='text-zinc-400 pb-8' >Sign up to continue</h1>

          <input onChange={(e)=>setUsername(e.target.value)} 
          className='bg-black  w-full text-xl p-4 mb-3 rounded' type="text" placeholder='Enter Username' />

          <input onChange={(e)=>setEmail(e.target.value)}
          className='bg-black w-full text-xl p-4 mb-3 rounded' type="email" placeholder='Enter Email' />

          <input onChange={(e)=>setPassword(e.target.value)}
          className='bg-black w-full p-4 text-xl mb-3 rounded' type="password" placeholder='Enter Password' />

          <button
            className='px-3 mt-8 w-1/2 py-2 border-2 border-amber-400 text-xl font-semibold rounded-xl bg-green-700 text-white hover:scale-95 transition cursor-pointer hover:bg-black hover:text-white'>Sign up</button>

        </form>
        <h1 className='text-white text-md mt-3'>Already have an account ?  <Link className='text-blue-500' to="/login">Login</Link></h1>
      </div>

    </>
  )
}

export default SignUpPage