import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import authRouter from './routes/authRoutes.js'
import taskRouter from './routes/taskRoutes.js'
import userRouter from './routes/userRoutes.js'

dotenv.config()
const port = process.env.PORT || 3000;
const frontend = process.env.FRONTEND_URL
const corsOptions = {
    origin: frontend, // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Allow credentials if needed
  };

const app = express()
app.use(cors(corsOptions));

app.use(express.json())

connectDB()
app.use("/api/auth", authRouter);
app.use("/api/tasks", taskRouter)
app.use("/api/users", userRouter)

app.get("/", (req, res) => {
    //console.log("Request received")
    res.status(200).json({msg:"Hello World"})
})

app.listen(port, () => {
    //console.log("server running on port 3000")
} )