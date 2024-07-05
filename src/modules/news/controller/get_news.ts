import { news } from "@helpers/news.helper"
import { Request, Response } from "express"



export const get_news = async(req:Request, res:Response) => {
    try {
        const result = await news()
        return res.status(200).json({result})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message})
    }
}