import { generate_random_number } from "@core/utils";
import { User } from "@models/user.model";
import { Request, Response } from "express";
import bcrypt from 'bcrypt'


export const login = async(req:Request, res:Response) => {
    try {
        const { email, password } = req.body
        if ([email,password].some((field: string) => field.trim() === "")) {
            return res.status(400).json({error:'Fields cannot be empty'})
        }
        let user = await User.findOne({ email })
        if (!user) return res.status(404).json({ error: 'user not found' })
        const password_check = bcrypt.compareSync(password, user.password)
        if (!password_check) {
			return res.status(401).json({ error: 'Invalid user credentials' })
		}
        const otp = generate_random_number(6)
        user.otp = otp
        await user.save()
        console.log(user)
        return res.status(200).json({message:'OTP sent successfully', your_otp: otp})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message})
    }
}