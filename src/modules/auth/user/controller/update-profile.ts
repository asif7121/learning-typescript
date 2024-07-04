import { User } from '@models/user.model'
import { Request, Response } from 'express'

export const update_profile = async (req: Request, res: Response) => {
	try {
		const { username, email } = req.body
		if (!(username || email)) return res.status(400).json({ error: 'Provide field to update' })
		let user = await User.findById(req.user?._id)
		if (!user) return res.status(403).json({ error: 'Unauthorize request' })
		user = await User.findByIdAndUpdate(
			req.user?._id,
			{
				email: email,
				username: username,
			},
			{ new: true }
		)
		return res
			.status(200)
			.json({
				message: 'User updated successfully',
				data: { email: user.email, username: user.username },
			})
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: error.message })
	}
}
