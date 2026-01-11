import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    let getData = localStorage.getItem("tasks")
    return getData ? JSON.parse(getData) : [];
  });


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
