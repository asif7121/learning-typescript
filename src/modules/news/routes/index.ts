import { Router } from "express";
import { get_news } from "../controller";




const router = Router()

router.get('/get-news', get_news)


export const news_router = router