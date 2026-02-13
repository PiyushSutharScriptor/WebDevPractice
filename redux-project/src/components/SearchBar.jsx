import React, { useState } from 'react'
import { FaSearchengin } from "react-icons/fa";

const SearchBar = () => {

  const [text, setText] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("From Submitted")
    setText("")
  }

  return (
    <div className='bg-zinc-700 py-3'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-3 w-full items-center justify-around'>

        <div>
          {/* heading */}
          <h1 className='font-extrabold pl-4 text-3xl text-white'>Media Search</h1>
        </div>

        <div className="flex items-center border-2 border-white rounded-full overflow-hidden">
          {/* search bar */}
          <input
            required
            value={text}
            onChange={(e)=>{
              // console.log(e.target.value)
              setText(e.target.value)
            }}
            className="w-64 px-4 h-12 bg-transparent text-white placeholder-gray-300 outline-none"
            type="text"
            placeholder="search anything..."
          />

          {/* button */}
          <button className="h-12 px-4 bg-white text-black text-2xl flex items-center cursor-pointer justify-center hover:bg-gray-200 transition">
            <FaSearchengin />
          </button>
        </div>

      </form>
    </div>
  )
}

export default SearchBar