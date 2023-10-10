'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Container from '@/components/Container'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { axiosNoAuth } from '@/lib/axios'

const Signup = () => {
	const router = useRouter()

	const [formData, setFormData] = useState({
		username: '',
		password: '',
		repeatPassword: '',
		email: '',
	})

	const onSubmit = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		try {
			e.preventDefault()

			const res = await axiosNoAuth.post('/auth/register', {
				username: formData.username,
				password: formData.password,
				email: formData.email,
				confirmPassword: formData.repeatPassword,
			})

			toast.success(res.data.message)
			router.push('/login')
		} catch (error: any) {
			error.response && toast.error(error.response.data.message)
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<Container>
			<div className='py-20'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col space-y-2 text-center'>
						<h1 className='text-2xl font-semibold tracking-tight'>
							Create an account
						</h1>
						<p className='text-sm text-muted-foreground'>
							Enter username below to create your account
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
										placeholder='e.g. john_doe'
										type='text'
										autoCapitalize='none'
										autoCorrect='off'
										value={formData.username}
										onChange={handleChange}
										name='username'
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
										autoCorrect='off'
										value={formData.password}
										onChange={handleChange}
										name='password'
									/>
								</div>
								{/* Repeat password */}
								<div className='grid gap-1'>
									<Label
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2'
										htmlFor='password'
									>
										Repeat password
									</Label>
									<Input
										id='repeat_password'
										placeholder='********'
										type='password'
										autoCapitalize='none'
										autoCorrect='off'
										value={formData.repeatPassword}
										onChange={handleChange}
										name='repeatPassword'
									/>
								</div>
								{/* email */}
								<div className='grid gap-1'>
									<Label
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2'
										htmlFor='email'
									>
										Email
									</Label>
									<Input
										id='email'
										placeholder='e.g johndoe@gmail.com'
										type='text'
										autoCapitalize='none'
										autoComplete='name'
										autoCorrect='off'
										value={formData.email}
										onChange={handleChange}
										name='email'
									/>
								</div>
								<Button onClick={onSubmit} type='submit'>
									Sign Up
								</Button>
								<p className='text-sm text-muted-foreground'>
									Already have an account?{' '}
									<Link
										href='/login'
										className='underline underline-offset-4 hover:text-foreground'
									>
										Login
									</Link>
									.
								</p>
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

export default Signup
