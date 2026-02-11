import React from 'react'
import { getData } from './api/mediaApi'

const App = () => {

  return (
    <>
    <div className='bg-zinc-800 w-full h-screen text-white'>
      <h1>Piyush Suthar</h1>  
      <button onClick={()=>{
        getData('cat')
      }}>Get Photos</button>
    </div>
    </>
  )
}

export default App