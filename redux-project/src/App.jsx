import React from 'react'
import { getData, getVideo } from './api/mediaApi'

const App = () => {

  return (
    <>
    <div className='bg-zinc-800 w-full h-screen text-white'>

      <h1>Piyush Suthar</h1>  

      <button onClick={async ()=>{
        const data = await getData('cat')
        console.log(data)
      }}>Get Photos</button>

      <button onClick={async ()=>{
        const data = await getVideo('cat')
        console.log(data)
      }}>Get Video</button>

    </div>
    </>
  )
}

export default App