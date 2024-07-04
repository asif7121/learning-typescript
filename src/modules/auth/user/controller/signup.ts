import { generate_random_number } from '@core/utils'
import { User } from '@models/user.model'
import { Request, Response } from 'express'

export const signup = async (req: Request, res: Response) => {
	try {
		const { email, username, password } = req.body
		if ([email , username , password].some((field: string) => field.trim() === '')) {
			return res.status(400).json({ errro: 'Fields cannot be empty' })
		}
		const otp = generate_random_number(6)
		const existing_user = await User.findOne({ email })
		if (existing_user) {
			return res.status(400).json({ error: 'User already exist' })
		}
		const user = await User.create({
			email,
			username,
			password,
			otp,
            is_verified: false,
            access_token:null
		})
		return res.status(201).json({ message: 'OTP sent successfully', otp: user.otp })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: error.message })
	}
}


