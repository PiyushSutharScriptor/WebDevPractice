import React from 'react'
import { Link } from 'react-router-dom'
const SignUpPage = () => {
  return (
    <>
      <div className='flex flex-col bg-black items-center h-screen justify-center'>

        <form className='border-2 bg-zinc-900 p-5 rounded-3xl sm:w-1/3 text-white border-green-400 flex items-center flex-col'>

          <h1 className='text-6xl mt-10 pb-1 font-bold '>SignUp</h1>
          <h1 className='text-zinc-400 pb-8' >Sign up to continue</h1>

          <input className='bg-black  w-full text-xl p-4 mb-3 rounded' type="text" placeholder='Enter Username' />

          <input className='bg-black w-full text-xl p-4 mb-3 rounded' type="email" placeholder='Enter Email' />

          <input className='bg-black w-full p-4 text-xl mb-3 rounded' type="password" placeholder='Enter Password' />

          <button className='px-3 mt-8 w-1/2 py-2 border-2 border-amber-400 text-xl font-semibold rounded-xl bg-green-700 text-white hover:scale-95 transition cursor-pointer hover:bg-black hover:text-white'>Sign up</button>
        </form>
        <h1 className='text-white text-md mt-3'>Already have an account ?  <Link className='text-blue-500' to="/login">Login</Link></h1>
      </div>

    </>
  )
}

export default SignUpPage