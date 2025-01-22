import express from 'express'
import { login, signup, getUser } from "../controllers/authController.js";
import { verifyuser } from '../middleware/verifyuser.js';

const router = express.Router()

router.get("/verifyUser", verifyuser, getUser);
router.post("/signup", signup);
router.post("/login", login);

export default router