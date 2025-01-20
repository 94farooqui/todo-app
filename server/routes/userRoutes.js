import express from 'express'
import { addOneUser, deletOneUser, getAllUsers, getOneUser, updateOneUser } from '../controllers/userController.js'

const router = express.Router()

router.get("/", getAllUsers)
router.get("/:UserId", getOneUser)
router.post("/",addOneUser)
router.put("/:UserId", updateOneUser)
router.delete("/:UserId", deletOneUser)


export default router