import mongoose, { Schema } from "mongoose";


const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status : String,
})

const Task = mongoose.model("Task", taskSchema)

export default Task