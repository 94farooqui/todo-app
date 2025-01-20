import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import taskRouter from './routes/taskRoutes.js'
import userRouter from './routes/userRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use(cors());
app.use(express.json())

app.use("/api/tasks", taskRouter)
app.use("/api/users", userRouter)

app.get("/", (req, res) => {
    console.log("Request received")
    res.status(200).json({msg:"Hello World"})
})

app.listen(3000, () => {
    console.log("server running on port 3000")
} )