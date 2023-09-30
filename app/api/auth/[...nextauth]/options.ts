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
				if (!credentials?.username || !credentials?.password) {
					return null
				}

				const { username, password } = credentials

				console.log(`username`, username)
				console.log(`password`, password)

				const res = await axiosNoAuth.post('/auth/login', {
					username,
					password,
				})

				console.log(`res.data`, res.data)

				const user = res.data.data

				console.log(`user`, user)

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
	// callbacks: {
	// 	async jwt({ token, user }) {
	// 		console.log(`token`, token)
	// 		console.log(`user`, user)

	// 		if (user) {
	// 			return { ...token, ...user }
	// 		}

	// 		return token
	// 	},

	// 	async session({ session, token }) {
	// 		console.log(`session`, session)
	// 		console.log(`token`, token)

	// 		if (token) {
	// 			return { ...session, ...token }
	// 		}

	// 		return session
	// 	},
	// },
}
