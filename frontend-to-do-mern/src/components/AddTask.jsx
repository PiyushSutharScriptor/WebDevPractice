import React, { useState } from 'react'
import { MdOutlinePostAdd } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";
import toast from "react-hot-toast";

const AddTask = ({ fetchTasks }) => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const handleAdd = async (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    const res = await fetch("https://web-dev-practice-azure.vercel.app/form/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, details })
    })

    const data = await res.json()

    if (res.ok) {
      toast.success("Task Added")
      setTitle("")
      setDetails("")  
      fetchTasks()
    } else {
      toast.error(data.message)
    }
  }

  return (
    <div className='pt-6 sm:w-[65%] text-white'>
      <form onSubmit={handleAdd}>

        {/* title */}
        <input 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className='bg-zinc-900 w-full p-3 border-2 border-green-300 rounded-md' 
          type="text" 
          placeholder='Enter Title' 
        />

        {/* details */}
        <textarea 
          value={details}
          onChange={(e)=>setDetails(e.target.value)}
          rows={4} 
          className='bg-zinc-900 resize-none border-2 border-green-300 rounded-md w-full mt-4 p-3 ' 
          placeholder='Enter Details' 
        ></textarea>

        {/* button */}
        <div className='flex gap-3 '>

          <button className='bg-green-800 transition font-medium px-3 gap-2 py-2 flex mt-2 rounded-md cursor-pointer border-white border-2  hover:scale-90 items-center'>Add Task 
            <h1 className='pb-0.5 text-xl'><MdOutlinePostAdd /></h1>
          </button>

          <button 
            type="button"
            onClick={() => { setTitle(""); setDetails(""); }}
            className='bg-yellow-500 transition font-medium px-3 gap-2 py-2 flex mt-2 rounded-md cursor-pointer text-black border-white border-2  hover:scale-90 items-center'>Clear Fields
            <h1 className='pb-0.5 text-xl'><AiOutlineClear /></h1>
          </button>

        </div>
      </form>
    </div>
  )
}

export default AddTask
