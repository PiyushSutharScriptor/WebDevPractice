import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
    return (
        <div>
            <h1>Products</h1>
            <div className='flex justify-center gap-5 font-semibold text-xl py-4'>
                <Link  className='border-2 border-green-400 px-3 rounded py-2' to='/products/men'>Men</Link>
                <Link  className='border-2 border-green-400 px-3 rounded py-2' to='/products/men'>Women</Link>
            </div>
        </div>
    )
}

export default Products