import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

const Add = () => {

  const{tasks,setTasks} = useContext(TaskContext)
  const[val,setVal] = useState("");

  return (
    <div className='text-xl mb-6'>
      <input
      value={val}
      onChange={(e)=>{
        setVal(e.target.value);
      }}
      className='border-2 pr-25 pl-3 py-2.5 rounded-3xl rounded-r-none' type="text" placeholder='Enter Task' 
      />

      <button 
      onClick={()=>{
        let idx = Date.now();
        setTasks([...tasks,{id:idx,activity:val,completed:false}]);
        console.log(tasks)
      }}
      className='border-2 border-white hover:bg-gray-500 bg-green-400 font-semibold text-black cursor-pointer px-2 py-2.5 rounded rounded-l-none text-left hover:text-white hover:border-white'>Add</button>
    </div>
  )
}

export default Add