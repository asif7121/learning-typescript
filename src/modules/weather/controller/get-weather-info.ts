import { weather } from '@helpers/weather.helper'
import { Request, Response } from 'express'

export const get_weather_info = async (req: Request, res: Response) => {
	try {
		const { lat, lon, unit} = req.body
		if (!(lat && lon && unit))
            return res.status(400).json({ error: 'Please provide required data' })
        
		// Convert lat and lon to numbers if they are not already
		const latitude = parseFloat(lat)
		const longitude = parseFloat(lon)
		const unitString = String(unit)

		// Check if latitude and longitude are valid numbers
		if (isNaN(latitude) || isNaN(longitude)) {
			return res.status(400).json({ error: 'Latitude and Longitude must be valid numbers' })
        }
       
		const result = await weather(latitude, longitude, unitString)
		return res.status(200).json({ ...result })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: error.message })
	}
}
