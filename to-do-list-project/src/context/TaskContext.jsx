import { createContext, useState } from "react";

export const TaskContext = createContext()

  let task = [
    {id:1 , activity:"Bathing" , completed:false},
    {id:2 , activity:"Cleaning" , completed:false},
    {id:3 , activity:"Handwash" , completed:false},
    {id:4 , activity:"Sleeping" , completed:false},
  ]

export const TaskProvider = ({children}) => {
  const[tasks,setTasks] = useState(task);

  return (
    <TaskContext.Provider value={{tasks,setTasks}}>
        {children}
    </TaskContext.Provider>
  ) 
}
