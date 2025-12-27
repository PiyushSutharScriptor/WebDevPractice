import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex items-center justify-center'>
        <h2 className='absolute top-1/3 font-bold text-6xl'>Page Not Found</h2>
        <h2 className='absolute top-1/2 font-bold text-9xl'>404</h2>
        <button className='border-2 border-white px-3 py-4 rounded text-2xl mt-9 font-semibold bg-green-400 text-black cursor-pointer active:scale-90'><Link to='/'>Back To Home</Link></button>
    </div>
  )
}

export default NotFoundPage