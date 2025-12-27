import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Products = () => {
    return (
        <div>
            <div className='flex justify-center gap-5 font-semibold text-xl py-4'>
                <Link  className='border-2 border-green-400 px-3 rounded py-2' to='/products/men'>Men</Link>
                <Link  className='border-2 border-green-400 px-3 rounded py-2' to='/products/women'>Women</Link>
                <Link  className='border-2 border-green-400 px-3 rounded py-2' to='/products/kids'>Kids</Link>
                <Link  className='border-2 border-green-400 px-3 rounded py-2' to='/products/exclusive'>Exclusive</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Products