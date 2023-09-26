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
				const res = await axiosNoAuth.post('/auth/login', {
					username: credentials?.username,
					password: credentials?.password,
				})

				console.log(`credentials`, credentials)

				const user = res.data.data

				if (user) {
					return user
				} else {
					return null
				}
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
}
