import express from 'express'
import { addOneTask, deletOneTask, getAllTasks, getOneTask, updateOneTask } from '../controllers/taskControllers.js'
import { verifyuser } from '../middleware/verifyuser.js'

const router = express.Router()

router.get("/", verifyuser, getAllTasks)
router.get("/:taskId", getOneTask)
router.post("/", verifyuser,addOneTask);
router.put("/:taskId", updateOneTask)
router.delete("/:taskId", deletOneTask)


export default router