import { Router } from "express";
import { login, logout, signup, update_password, update_profile, verify_user_otp } from "../controller";
import { verify_token } from "@middlewares/verify-jwt";




const router = Router()

router.post('/signup', signup)
router.post('/verify-otp', verify_user_otp)
router.post('/login', login)
router.post('/logout', logout)

router.use(verify_token)
router.patch('/update-profile', update_profile)
router.patch('/update-password', update_password)


export const user_router = router