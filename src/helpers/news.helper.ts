import axios from 'axios'

const api_hub_key = process.env.NEWS_API_HUB_KEY
export const news = async () => {
	try {
		let config = {
			method: 'get',
			maxBodyLength: Infinity,
			url: 'https://Business-News-Daily.proxy-production.allthingsdev.co/api/news',
			headers: {
				'x-apihub-key': api_hub_key,
				'x-apihub-host': 'Business-News-Daily.allthingsdev.co',
			},
		}
		const response = await axios(config)
		return response.data
	} catch (error) {
		console.log(error)
		return error?.response?.data
	}
}
