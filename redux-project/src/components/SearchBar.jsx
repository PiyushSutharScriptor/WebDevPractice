import React, { useState } from 'react'
import { FaSearchengin } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { toast } from "react-hot-toast"

const SearchBar = () => {

  const [text, setText] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("From Submitted")
    dispatch(setQuery(text))
    toast.success("Searching")
    setText("")
  }

  const dispatch = useDispatch()

  const location = useLocation();

  return (
    <div className='bg-zinc-700 py-4 px-2'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='sm:flex gap-3 w-full items-center justify-around'>

        <div>
          {/* heading */}
          <Link to='/' className='font-extrabold sm:mb-0 mb-10 pl-4 text-3xl text-white'>Media Search</Link>
        </div>

        <div className="flex transition-all items-center sm:mb-0 sm:mt:0 mt-4 mb-4 border-2 border-white rounded-xl overflow-hidden">
          {/* search bar */}
          {location.pathname !== "/collection" && (
            <>
              <input
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-96 px-4 h-12 bg-transparent text-white placeholder-gray-300 outline-none"
                type="text"
                placeholder="search anything..."
              />
              <button className="h-12 px-4 bg-white text-black text-2xl flex items-center cursor-pointer justify-center hover:bg-blue-500 transition hover:text-white">
                <FaSearchengin />
              </button>
            </>

          )}

          {/* button */}

        </div>

        {/* search and collection button */}
        <div className='text-white flex justify-center gap-4 items-center gap-3 font-semibold'>
          <NavLink
            to='/' className={({ isActive }) =>
              `border px-3 py-1 rounded text-base ${isActive
                ? "bg-blue-500 text-white"
                : "bg-gray-400 hover:bg-gray-500"
              }`
            }
          >
            Search
          </NavLink>

          <NavLink
            to='/collection' className={({ isActive }) =>
              `border px-3 py-1 rounded text-base ${isActive
                ? "bg-blue-500 text-white"
                : "bg-gray-400 hover:bg-gray-500"
              }`
            }
          >
            Collection
          </NavLink>
        </div>

      </form>

    </div>
  )
}

export default SearchBar