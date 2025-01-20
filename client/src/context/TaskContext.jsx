import React, { createContext, useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks'

export const TaskContext = createContext()

const TaskContextProvider = ({children}) => {
    const [tasks,setTasks] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")

    const fetchAllTasks = async () => {
        const data = await getAllTasks()
        if(data){
            setTasks(data)
            console.log(data)
            setLoading(false)
        }
        else {
            setLoading(false)
            setError("Error in fetching the tasks")
        }
    }

    useEffect(()=>{
        fetchAllTasks()
    },[])
  return (
    <TaskContext.Provider value={{tasks,loading,error}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider