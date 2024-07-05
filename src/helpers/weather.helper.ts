import axios from 'axios'

const api_hub_key = process.env.WEATHER_API_HUB_KEY

export const weather = async (lat: number, lon: number, unit: string) => {
	try {
		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: `https://Weather-API.proxy-production.allthingsdev.co/weather/getForecast?latitude=${lat}&longitude=${lon}&unit=${unit}`,
			headers: {
				accept: '*/*',
				'accept-language': 'en-US,en;q=0.9',
				origin: 'https://edition.cnn.com',
				priority: 'u=1, i',
				referer: 'https://edition.cnn.com/',
				'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
				'sec-ch-ua-mobile': '?0',
				'sec-ch-ua-platform': '"Windows"',
				'sec-fetch-dest': 'empty',
				'sec-fetch-mode': 'cors',
				'sec-fetch-site': 'cross-site',
				'user-agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
				'x-apihub-key': api_hub_key,
				'x-apihub-host': 'Weather-API.allthingsdev.co',
			},
		}
		const response = await axios(config)
		return response.data
	} catch (error) {
		console.log(error)
		return error?.response?.data
	}
}
