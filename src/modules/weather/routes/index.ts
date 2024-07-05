import { Router } from "express";
import { get_weather_info } from "../controller";



const router = Router()

router.post('/get-details', get_weather_info)




export const weather_router = router