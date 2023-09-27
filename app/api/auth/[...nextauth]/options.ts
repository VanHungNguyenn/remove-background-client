import { axiosNoAuth } from '@/lib/axios'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'Username...',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				// const res = await axiosNoAuth.post('/auth/login', {
				// 	username: credentials?.username,
				// 	password: credentials?.password,
				// })

				// console.log(`credentials`, credentials)

				// const user = res.data.data
				const user = {
					id: '1',
					name: 'test',
					email: 'hahaha@gmail.com',
					password: '123456',
				}

				// console.log(`credentials`, credentials)

				if (
					credentials?.username === user.name &&
					credentials?.password === user.password
				) {
					return user
				} else {
					return null
				}
			},
		}),
	],
	// pages: {
	// 	signIn: '/login',
	// },
}
