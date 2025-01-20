const serverUrl = import.meta.env.VITE_SERVER_ADDRESS
import axios from 'axios'

export const getAllTasks = async () => {

    try{
        const response = await axios.get(`${serverUrl}/api/tasks`,{
            headers:{
                Authorization:"678c7a0a9c5fc1b1827fba8a"
            }
        })
        if(response.status == 200){
            console.log(response)
            return response.data
        }
    }
    catch(error){
        return false
    }

}

export const getOneTask = async () => {

}

export const addOneTask = async () => {

}

export const updateOneTask = async () => {

}

export const deleteOneTask = async () => {

}
