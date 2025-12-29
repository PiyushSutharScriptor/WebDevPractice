import React from 'react'

const Home = () => {
  return (
  <>
    <h2 className='font-bold text-9xl text-cyan-400 m-5'>Exclusive Offers</h2>
    <h3>Filters : </h3>
    <select className='bg-black' name="" id="">Filters
      <option value="men">Price (High to low)</option>
      <option value="men">Size (low to High)</option>
      <option value="men">Discount (High to low)</option>
      <option value="men">Price (High to low)</option>
      <option value="men">Delivery (High to low)</option>
    </select>
  </>
  )
}

export default Home