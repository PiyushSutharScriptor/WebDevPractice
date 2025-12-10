import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 h-full w-full flex flex-col justify-between p-8 '>
        <h2 className='bg-white w-12 h-12 flex justify-center items-center text-xl font-semibold  rounded-full'>{props.idx+1}</h2>

        <div>
          <p className='font-medium mb-12 text-lg leading-7 text-white' >{props.intro}</p>

          <div className='flex justify-between items-center'>
            <button className='bg-blue-600 p-3 tracking-wider cursor-pointer rounded-full text-white font-semibold text-md'>{props.tag}</button>
            <button className='bg-blue-600 p-3 w-10 h-10 rounded-full cursor-pointer text-white font-semibold text-[16px]'><FaArrowRight /></button>
          </div>

        </div>

      </div>
  )
}

export default RightCardContent
