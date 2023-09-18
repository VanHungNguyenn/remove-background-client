import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

const routes = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'How to use',
		href: '/how-to-use',
	},
	{
		label: 'Tools & API',
		href: '/tools-api',
	},
	{
		label: 'Pricing',
		href: '/pricing',
	},
]

const Header = () => {
	return (
		<header className='flex justify-center items-center py-3 px-4 border-b'>
			<Container>
				<div className='relative flex items-center justify-between h-16 w-full'>
					{/* Logo */}
					<Link href='/'>
						<Image
							src='/logo.png'
							alt='logo'
							width={64}
							height={64}
							className='cursor-pointer'
						/>
					</Link>
					{/* Navbar */}
					<nav className='mx-6 flex items-center gap-4 lg:gap-6'>
						{routes.map((route, index) => {
							return (
								<Button key={index} variant='ghost' asChild>
									<Link
										href={route.href}
										className='text-base font-medium transition-colors duration-200 hover:text-foreground/70'
									>
										{route.label}
									</Link>
								</Button>
							)
						})}
					</nav>
					{/* Buttons feature */}
					<div className='flex items-center'>
						{/* Dark mode */}
						{/* Authen Button */}
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
