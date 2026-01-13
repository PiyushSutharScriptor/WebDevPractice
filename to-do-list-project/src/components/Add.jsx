import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import { toast } from 'sonner';

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
      className='border-2 px-4 py-2.5 rounded-3xl rounded-r-none w-xl' type="text" placeholder='Enter Task' 
      />

      {/* Add Button */}
      <button 
      onClick={()=>{
        let idx = Date.now();
        if(val.length>0){
          setTasks([...tasks,{id:idx,activity:val,completed:false}]);
          toast.success("Task Added")
          setVal("")
        }
        else toast.error("Add Note")
      }}
      className='border-2 border-white hover:bg-gray-500 bg-green-400 font-semibold text-black cursor-pointer px-2 py-2.5 rounded rounded-l-none text-left hover:text-white hover:border-white'>Add</button>
    </div>
  )
}

export default Add