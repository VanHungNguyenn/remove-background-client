import { axiosNoAuth } from '@/lib/axios'
import axios from 'axios'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { Session } from 'next-auth'

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

				try {
					const { username, password } = credentials

					console.log(`username`, username)
					console.log(`password`, password)

					const res = await axiosNoAuth.post('/auth/login', {
						username,
						password,
					})

					const user = res.data.data

					if (user) {
						return user
					} else {
						return null
					}
				} catch (error) {
					return null
				}
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				return { ...token, ...user }
			}

			return token
		},

		async session({ session, token }) {
			if (token) {
				const { id, username, email, role, token: jwtToken } = token

				return {
					...session,
					user: {
						id,
						username,
						email,
						role,
						token: jwtToken,
						image:
							typeof session.user.image === 'string'
								? session.user.image
								: undefined,
					},
				}
			}

			return session
		},
	},
}
