import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const serverAddress = import.meta.env.VITE_SERVER_ADDRESS

//const token = localStorage.getItem("token")

const useTasks = () => {
    const [tasks,setTasks] = useState()
    const {token} = useContext(AuthContext)

    const fetchUserTasks = async (filter) => {
      //console.log("Fetching task from hook")

      try{
        //console.log("Context Token", token)
      const response = await axios.get(
        `${serverAddress}/api/tasks?filter=${filter}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        //console.log(response)
        return response.data;
      }
      else return false
      }
      catch(error){
        console.log("Use Task Error", error)
        return false
      }

    }

    const addTask = async (taskData) => {
      console.log(taskData)
      try{
        const response = await axios.post(`${serverAddress}/api/tasks`, taskData, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        })

        if(response.status == 200){
          return response.data
        }
      }
      catch(error){

      }
    }

    const updateTaskStatus = async (updatedTask) => {
      // console.log("From custom hook", updatedTask)
      // console.log("Task Id", updatedTask._id)
      try {
        // console.log("sending update request")
        const response = await axios.put(
          `${serverAddress}/api/tasks/${updatedTask._id}`,
          updatedTask,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status == 200) {
          return {result: true, updatedTask: response.data}
        }
      } catch (error) {
        console.log(error)
      }
    }
  return { fetchUserTasks, addTask, updateTaskStatus };
}

export default useTasks