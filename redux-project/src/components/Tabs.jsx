import React from 'react'

const Tabs = () => {

  const btn = ['Photos','Videos']

  return (
    <div className='flex gap-8 items-center w-full justify-center mt-4'>

      {btn.map((ele,idx)=>{
        return <button className='border-2 border-zinc-900 bg-zinc-500 px-2 py-1 rounded text-white font-semibold text-xl hover:bg-blue-700 cursor-pointer hover:scale-98 transition-all' key={idx} >{ele}</button>
      })}

    </div>
  )
}

export default Tabs