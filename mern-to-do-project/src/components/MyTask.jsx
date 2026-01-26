import React from 'react'
import { HiClipboardDocumentList } from "react-icons/hi2";


const MyTask = () => {
  return (
    <>
    <div className='text-white flex items-center gap-2 text-2xl'>
      <h1 className='text-gray-600 font-medium'>My Tasks </h1>
      <span className='text-green-400'><HiClipboardDocumentList /></span>
    </div>

    <div className='flex mt-5 flex-wrap gap-4'>

      {/* card */}
      <div className='sm:w-72 w-full border-2 hover:scale-105 transition border-green-600 p-2 rounded bg-zinc-900'>
        <h1 className='text-white mb-2 font-semibold text-2xl'>Title</h1>
        <p className='text-zinc-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis hic qui veritatis, repellat maiores sed esse voluptatibus aliquid impedit corporis!</p>
      </div>
      

    </div>
    </>
  )
}

export default MyTask