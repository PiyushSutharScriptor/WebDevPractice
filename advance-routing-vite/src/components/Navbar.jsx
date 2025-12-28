import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex bg-green-400 h-14 text-black w-full items-center justify-between'>
        <h2 className='font-bold text-2xl pl-3'><Link to='/'>Piyush Suthar</Link></h2>
        <ul className='flex font-semibold text-xl gap-6 pr-4'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/collection'>Collection</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/support'>Support</Link></li>
        </ul>
    </div>
  )
}

export default Navbar