import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white p-10'>
      
      <form action="" className='flex flex-col items-start '>
        <div className='flex flex-col items-start w-1/2'>

          <input type="text"
            className='border-2 px-3 py-3 mb-4 rounded w-full'
            placeholder='Enter Task Heading' />

          <textarea type="text"
            className='border-2 px-3 py-2 h-40 rounded mb-4 w-full'
            placeholder='Enter Task Heading' />

          <button className='px-2 py-2 rounded hover:bg-green-500 hover:text-black hover:border-white font-medium cursor-pointer border-2 w-fit items-center'>Add Note</button>

        </div>

      </form>

    </div>
  )
}

export default App
