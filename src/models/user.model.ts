import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser  {
	email: string
	username: string
	password: string
	is_verified: boolean
    otp?: string
    access_token:string
	
}

const schema = new Schema<IUser>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		is_verified: {
			type: Boolean,
			default: false,
		},
		otp: {
			type: String,
		},
        access_token: {
            type: String,
            default:null
        }
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

schema.pre('save', function () {
	if (this.isModified('password')) {
		this.password = bcrypt.hashSync(this.password, 10)
	}
})

export const User = model('User', schema)
