import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const ProfileButtons = () => {
	return (
		<div className='flex items-center gap-2 lg:gap-3'>
			<Link href='/login'>
				<Button variant='default' aria-label='login'>
					Login
				</Button>
			</Link>
			<Link href='/signup'>
				<Button variant='outline' aria-label='signup'>
					Sign up
				</Button>
			</Link>
		</div>
	)
}

export default ProfileButtons
