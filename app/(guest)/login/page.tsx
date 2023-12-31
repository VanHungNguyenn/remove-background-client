'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Container from '@/components/Container'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-hot-toast'

const Login = () => {
	const router = useRouter()
	const [loading, setLoading] = useState<boolean>(false)
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const searchParams = useSearchParams()

	let callbackUrl = searchParams.get('callbackUrl') || '/'

	if (callbackUrl === '/register') {
		callbackUrl = '/'
	}

	const onSubmit = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		try {
			e.preventDefault()
			setLoading(true)

			const res = await signIn('credentials', {
				username,
				password,
				redirect: false,
			})

			setLoading(false)

			if (res?.error) {
				toast.error('Username or password incorrect')

				return
			} else {
				toast.success('Logged in successfully')
				router.push(callbackUrl)
			}
		} catch (error: any) {
			setLoading(false)
		}
	}

	return (
		<Container>
			<div className='py-20'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col space-y-2 text-center'>
						<h1 className='text-2xl font-semibold tracking-tight'>
							Login to your account
						</h1>
						<p className='text-sm text-muted-foreground'>
							Enter username below to login to your account
						</p>
					</div>
					<div className='flex flex-col space-y-4 p-6'>
						<form>
							<div className='grid gap-4'>
								<div className='grid gap-1'>
									<Label
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2'
										htmlFor='username'
									>
										Username
									</Label>
									<Input
										id='username'
										placeholder='e.g john_doe'
										type='text'
										autoCapitalize='none'
										autoComplete='username'
										autoCorrect='off'
										value={username}
										onChange={(e) =>
											setUsername(e.target.value)
										}
									/>
								</div>
								<div className='grid gap-1'>
									<Label
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2'
										htmlFor='password'
									>
										Password
									</Label>
									<Input
										id='password'
										placeholder='********'
										type='password'
										autoCapitalize='none'
										autoComplete='current-password'
										autoCorrect='off'
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
								</div>
								<Button onClick={onSubmit}>
									Login with Email
								</Button>
							</div>
						</form>
						{/* <div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<span className='w-full border-t' />
							</div>
							<div className='relative flex justify-center text-xs uppercase'>
								<span className='bg-background px-2 text-muted-foreground'>
									Or continue with
								</span>
							</div>
						</div>
						<Button variant='outline' disabled={true}>
							Google
						</Button> */}
					</div>
					<p className='px-8 text-center text-sm text-muted-foreground'>
						By clicking continue, you agree to our{' '}
						<Link
							href='/'
							className='underline underline-offset-4 hover:text-primary'
						>
							Terms of Service
						</Link>{' '}
						and{' '}
						<Link
							href='/'
							className='underline underline-offset-4 hover:text-primary'
						>
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>
		</Container>
	)
}

export default Login
