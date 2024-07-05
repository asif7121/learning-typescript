import { user_router } from "@modules/auth/user/routes";
import { news_router } from "@modules/news/routes";
import { weather_router } from "@modules/weather/routes";
import { Router } from "express";



const router = Router()

router.use('/user', user_router)
router.use('/weather', weather_router)
router.use('/news', news_router)


export default router