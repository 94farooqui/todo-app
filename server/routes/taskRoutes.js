import express from 'express'
import { addOneTask, deletOneTask, getAllTasks, getOneTask, updateOneTask } from '../controllers/taskControllers.js'

const router = express.Router()

router.get("/", getAllTasks)
router.get("/:taskId", getOneTask)
router.post("/",addOneTask)
router.put("/:taskId", updateOneTask)
router.delete("/:taskId", deletOneTask)


export default router