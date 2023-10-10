import axios from 'axios'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

export const axiosNoAuth = axios.create({
	baseURL: NEXT_PUBLIC_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const axiosAuth = axios.create({
	baseURL: NEXT_PUBLIC_API_URL,
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
