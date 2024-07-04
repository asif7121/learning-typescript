import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { User } from "@models/user.model";



export const update_password = async (req: Request, res: Response) => {
    try {
        const { old_password, new_password } = req.body
        const { _id , password} = req.user
        const check_old_password = await bcrypt.compare(old_password, password)
        if (!check_old_password) return res.status(400).json({ error: 'Password incorrect' })
        const user = await User.findByIdAndUpdate(_id, {
            password:new_password
        }, { new: true })
        return res.status(200).json({message:'Password Updated', data:{user:user._id}})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message})
    }
}