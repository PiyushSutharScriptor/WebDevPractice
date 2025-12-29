import React from 'react'
import { useNavigate } from 'react-router'

const Navbar2 = () => {
    let navigate = useNavigate()

    const btnClick = () => {
        navigate('/')
    }
    return (
        <div className='w-full bg-green-900'>

            <button className='px-4 py-3 m-2 font-semibold text-xl rounded cursor-pointer border-2 border-red-400' onClick={btnClick}>Go Home Shortcut</button>

            <button
                className='px-4 py-3 m-2 font-semibold text-xl rounded cursor-pointer border-2 border-red-400'
                onClick={() => {
                    navigate('/')
                }}>Go Home Shortcut Builtin</button>


            <button
                className='px-4 py-3 m-2 font-semibold text-xl rounded cursor-pointer border-2 border-red-400'
                onClick={() => {
                    navigate(-1)
                }}>Go Back</button>

            <button
                className='px-4 py-3 m-2 font-semibold text-xl rounded cursor-pointer border-2 border-red-400'
                onClick={() => {
                    navigate(+1)
                }}>Go Next</button>
        </div>
    )
}

export default Navbar2