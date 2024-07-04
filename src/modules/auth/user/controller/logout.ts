import { User } from "@models/user.model";
import { Request, Response } from "express";




export const logout = async(req:Request, res:Response) => {
    try {
        const {email} = req.body
        let user = await User.findOne({ email })
        if (!user) return res.status(404).json({ error: 'No user found' })
        user.access_token = null
        await user.save()
        return res.status(200).json({message:'user logout successfully'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message})
    }
}