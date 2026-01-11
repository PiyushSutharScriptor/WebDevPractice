import React, { useContext } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TaskContext } from '../context/TaskContext.jsx';
import { toast, Toaster } from 'sonner';

const List = () => {

  const { tasks, setTasks } = useContext(TaskContext)

  return (

    <>
      {tasks.map((el) => { 
        return <div  key={el.id} className='flex px-3 mb-2 py-4 text-xl bg-gray-300 text-black justify-between w-1/3 rounded-xl break-all'>

          {/* Task Name */}
          <h1 className={el.completed ? "line-through" : ""}>{el.activity}</h1>

          <div className='gap-3 text-3xl flex'>

            {/* Done Btn */}
            <button
              onClick={() => {
                const doneArr = tasks.map((item) => {
                  return item.id === el.id ? {...item,completed:!item.completed} : item;
                })
                toast.success(
                  el.completed ? "Task Pending" : "Task Completed"
                )
                setTasks(doneArr)
              }}
              className={el.completed ? "text-red-500 cursor-pointer" : "cursor-pointer rounded hover:text-red-500 hover:bg-invisible"}><FaCircleCheck /></button>

            {/* Delete Btn */}
            <button
              onClick={() => {
                let newArr = tasks.filter(item => item.id !== el.id);
                console.log(newArr);
                setTasks(newArr)
                toast.error("Task Deleted")
              }}
              className='cursor-pointer rounded hover:text-red-500 hover:bg-invisible'><RiDeleteBin5Fill /></button>
          </div>

        </div>
      })}
    </>
  )
}

export default List