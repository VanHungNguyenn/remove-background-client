import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Container from '@/components/Container'

const Login = () => {
	return (
		<Container>
			<div className='py-20'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col space-y-2 text-center'>
						<h1 className='text-2xl font-semibold tracking-tight'>
							Login to your account
						</h1>
						<p className='text-sm text-muted-foreground'>
							Enter your email below to login to your account
						</p>
					</div>
					<div className='flex flex-col space-y-4 p-6'>
						<form>
							<div className='grid gap-4'>
								<div className='grid gap-1'>
									<Label className='sr-only' htmlFor='email'>
										Email
									</Label>
									<Input
										id='email'
										placeholder='Email...'
										type='email'
										autoCapitalize='none'
										autoComplete='email'
										autoCorrect='off'
									/>
								</div>
								<div className='grid gap-1'>
									<Label
										className='sr-only'
										htmlFor='password'
									>
										Password
									</Label>
									<Input
										id='password'
										placeholder='Password...'
										type='password'
										autoCapitalize='none'
										autoComplete='current-password'
										autoCorrect='off'
									/>
								</div>
								<Button>Login with Email</Button>
							</div>
						</form>
						<div className='relative'>
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
						</Button>
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
