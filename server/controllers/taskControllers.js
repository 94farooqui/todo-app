import Task from "../models/Task.js"

export const getAllTasks = async (req,res) => {
    const userId = req.headers.authorization
    console.log(userId)
    const tasks = await Task.find({userId: userId})
    return res.status(200).json(tasks)
}

export const getOneTask = (req,res) => {

}

export const addOneTask = async (req,res) => {
    const task = req.body
    const taskAdded = new Task(task)
    await taskAdded.save()

    res.status(200).json(taskAdded)
}

export const updateOneTask = (req,res) => {

}

export const deletOneTask = (req,res) => {

}
