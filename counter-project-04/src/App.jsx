import React, { useState } from 'react'

const App = () => {

  const [value,setValue] = useState(0)
  return (
    <>
    <div className='flex flex-col h-screen w-full gap-3 bg-black text-white items-center justify-center'>
      <h1 className='font-bold text-5xl pb-10 underline'>Counter Mini Webpage: </h1>

      <h1 className='text-2xl font-semibold pb-5'>Count <span className='text-orange-300'>:</span> {value}</h1>

      <div className='flex gap-5 pb-2'>
        <button onClick={()=>{
          setValue(value+1)
        }} className='px-2 py-1 border-3 hover:border-gray-500 border-green-500 hover:bg-gray-500 hover:text-white  font-medium cursor-pointer rounded-md'>Increase</button>

        <button onClick={()=>{
          setValue(value>0 ? value-1 : 0)
        }} className='px-2 py-1 border-3 hover:border-gray-500 border-red-500 hover:bg-gray-500 hover:text-white  font-medium cursor-pointer rounded-md'>Decrease</button>
      </div>
        
        {/*   ===============    */}
        <div className='flex gap-5 pb-2'>
        <button onClick={()=>{
          setValue(value+5)
        }} className='px-2 py-1 border-3 hover:border-gray-500 border-green-500 hover:bg-gray-500 hover:text-white  font-medium cursor-pointer rounded-md'>Jump By 5</button>

        <button onClick={()=>{
          setValue(value+10)
        }} className='px-2 py-1 border-3 hover:border-gray-500 border-red-500 hover:bg-gray-500 hover:text-white  font-medium cursor-pointer rounded-md'>Jump By 10</button>
      </div>

      {/*   ===============    */}
        <div className='flex gap-5 pb-2'>
        <button onClick={()=>{
          setValue(value+50)
        }} className='px-2 py-1 border-3 hover:border-gray-500 border-green-500 hover:bg-gray-500 hover:text-white  font-medium cursor-pointer rounded-md'>Jump By 50</button>

        <button onClick={()=>{
          setValue(value+100)
        }} className='px-2 py-1 border-3 hover:border-gray-500 border-red-500 hover:bg-gray-500 hover:text-white  font-medium cursor-pointer rounded-md'>Jump By 100</button>
      </div>

        <button onClick={()=>{
          setValue(0)
        }} className='px-4 py-1 border-3 hover:border-gray-500 border-blue-500 hover:bg-red-500 hover:text-white  font-medium cursor-pointer rounded-md'>Reset</button>

    </div>
    </>
  )
}

export default App
