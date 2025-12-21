import React, { useState } from 'react'

const App = () => {

  const[title,setTitle] = useState('');
  const[details,setDetails] = useState('');

  return (
    <div className='h-full bg-black text-white p-10'>

      <form action=""
        onSubmit={(e) => {
          console.log("Form title : " , {title}) 
          console.log("Form details : " , {details})
          e.preventDefault()
          setTitle('')
          setDetails('')
        }}
        className='flex sm:flex-row flex-col items-start '>
        
        <div className='flex flex-col items-start sm:w-1/2 w-full'>
        <h1 className='font-bold text-3xl mb-4'>Add Notes</h1>

          {/* title */}
          <input type="text"
            value={title}
            onChange={(e)=>{
              // console.log(e.target.value)
              setTitle(e.target.value)
            }}
            className='border-2 px-3 py-3 mb-4 rounded w-full'
            placeholder='Enter Note Heading' />

          {/* details */}
          <textarea type="text"
            value={details}
            onChange={(e)=>{
              // console.log(e.target.value)
              setDetails(e.target.value)
            }}
            className='border-2 px-3 py-2 h-40 rounded mb-4 w-full'
            placeholder='Enter Note Details' />

          {/* Submit button */}
          <button className='px-2 py-2 rounded hover:bg-green-500 hover:text-black hover:border-white mb-6 font-medium cursor-pointer border-2 w-fit items-center'>Add Note</button>

        </div>

          {/* Recent Notes */}
        <div className='flex flex-col items-center sm:w-1/3 sm:mx-auto w-full gap-3'>
          <h1 className='font-bold text-3xl'>Recent Notes</h1>

          <div className='w-full flex flex-col gap-3'>
            <div className='bg-white w-full h-40 rounded'>Card</div>
            <div className='bg-white w-full h-40 rounded'>Card</div>
            <div className='bg-white w-full h-40 rounded'>Card</div>
            <div className='bg-white w-full h-40 rounded'>Card</div>
          </div>

        </div>

      </form>

    </div>
  )
}

export default App
