import { createContext, useEffect, useState } from "react";

//context creator
export const TaskContext = createContext()

//context provider
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {

    //get the items from localStorage
    let getData = localStorage.getItem("tasks")
    return getData ? JSON.parse(getData) : [];
  });


  //update task when new item added
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
