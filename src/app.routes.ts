
import { user_router } from "@modules/auth/user/routes";
import { Router } from "express";



const router = Router()

router.use('/user', user_router)


export default router