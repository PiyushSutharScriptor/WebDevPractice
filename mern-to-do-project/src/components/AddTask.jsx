import React from 'react'
import { MdOutlinePostAdd } from "react-icons/md";

const AddTask = () => {
  return (
    <div className='pt-6 sm:w-[65%] text-white'>
      <form >

        {/* title */}
        <input className='bg-zinc-900 w-full p-3 border-2 border-green-300 rounded-md' type="text" placeholder='Enter Title' />

        {/* details */}
        <textarea rows={4} className='bg-zinc-900 resize-none border-2 border-green-300 rounded-md w-full mt-4 p-3 ' placeholder='Enter Details' ></textarea>
 
        {/* button */}
        <button className='bg-green-800 transition font-medium px-3 gap-2 py-2 flex mt-2 rounded-md cursor-pointer border-white border-2  hover:scale-90 items-center'>Add Task 
          <h1 className='pb-0.5 text-xl'><MdOutlinePostAdd /></h1>
        </button>
      </form>
    </div>
  )
}

export default AddTask