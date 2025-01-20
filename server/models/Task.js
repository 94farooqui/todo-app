import mongoose, { Schema } from "mongoose";


const taskSchema = new mongoose.Schema({
    userId : {type: Schema.Types.ObjectId, ref: "User"},
    title: String,
    description: String,
    status : String,
})

const Task = mongoose.model("Task", taskSchema)

export default Task