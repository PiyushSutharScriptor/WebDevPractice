import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {

  const btn = ['Photos','Videos']
  const dispatch = useDispatch()
  const activeTab = useSelector((state)=>state.search.activeTab)  

  return (
    <div className='flex gap-8 items-center w-full justify-center mt-4'>

      {btn.map((ele,idx)=>{
        return <button 
        className={` ${(activeTab===ele ? 'bg-blue-500' : 'bg-zinc-500')} border-2 border-zinc-900  px-4 py-2 rounded text-white font-semibold text-base cursor-pointer hover:scale-98 transition-all uppercase`}
        key={idx} 
        onClick={()=>{
          // console.log(activeTab)
          dispatch(setActiveTabs(ele))
        }}
        >{ele}</button>
      })}

    </div>
  )
}

export default Tabs