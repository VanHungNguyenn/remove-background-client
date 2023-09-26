import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

const ProfileButtons = () => {
	return (
		<div className='flex items-center gap-2 lg:gap-3'>
			<Button
				variant='default'
				aria-label='login'
				onClick={() => signIn()}
			>
				Login
			</Button>
			<Link href='/signup'>
				<Button variant='outline' aria-label='signup'>
					Sign up
				</Button>
			</Link>
		</div>
	)
}

export default ProfileButtons
