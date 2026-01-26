import React from 'react'
import { SiHey } from "react-icons/si";
import { FaRegHandPointDown } from "react-icons/fa";


const Heading = () => {
  return (
    <div className='pt-8 '>
        <div className='flex items-center text-white text-3xl font-bold sm:text-5xl gap-4'>
          <h1 className=''>Hello<span className='text-green-400'>,</span> Payush</h1>
          <span className='text-green-400 transition hover:animate-[shake_0.3s_ease-in-out_infinite]'><SiHey /></span>
        </div>

        <div className='text-gray-600 font-medium text-2xl mt-10 flex items-center  gap-3'>
          <h1 className=''>Add Task </h1>
          <span className='text-green-600'><FaRegHandPointDown /></span>
        </div>

    </div>
  )
}

export default Heading