import React from 'react'
import { Button } from './ui/button'

const ProfileButtons = () => {
	return (
		<div className='flex items-center gap-2 lg:gap-3'>
			{/* login */}
			<Button
				variant='default'
				aria-label='login'
				className='text-base font-medium'
			>
				Login
			</Button>
			{/* signup */}
			<Button
				variant='outline'
				aria-label='signup'
				className='text-base font-medium'
			>
				Sign up
			</Button>
		</div>
	)
}

export default ProfileButtons
