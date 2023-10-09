import axios from 'axios'
const BASE_URL = process.env.BASE_URL
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export const axiosNoAuth = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const axiosAuth = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

axiosAuth.interceptors.request.use(
	async (config) => {
		const session = await getServerSession(authOptions)

		if (session) {
			config.headers['Authorization'] = `Bearer ${session?.user?.token}`
		}

		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	(response) => {
		return response
	},

	(error) => {
		if (error.response.status === 401 || error.response.status === 403) {
			console.log('Unauthorized')
			redirect('/login')
		}

		return Promise.reject(error)
	}
)
