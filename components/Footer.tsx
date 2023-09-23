'use client'
import Link from 'next/link'
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { routesWithSubRoutes, routes } from '@/constants/routes'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { usePathname } from 'next/navigation'

const socials = [
	{
		href: '/',
		icon: <Facebook className='h-6 w-6 text-primary-foreground' />,
	},
	{
		href: '/',
		icon: <Instagram className='h-6 w-6 text-primary-foreground' />,
	},
	{
		href: '/',
		icon: <Twitter className='h-6 w-6 text-primary-foreground' />,
	},
]

const Footer = () => {
	const pathname = usePathname()

	return (
		<footer className='flex justify-center items-center pt-6 px-4 border-t'>
			<Container>
				<div className='flex justify-center items-center py-6'>
					<div className='relative flex justify-between w-full'>
						{/* Logo */}
						<Link href='/'>
							<Image
								src='/logo.png'
								alt='logo'
								width={100}
								height={100}
								className='cursor-pointer'
							/>
						</Link>
						{/* Navbar */}
						<nav className='mx-6 flex flex-col gap-4 lg:gap-6'>
							{routes.map((route, index) => {
								return (
									<Link
										href={route.href}
										key={index}
										className={`text-base font-medium transition-colors duration-200 hover:text-foreground/70 hover:text-blue-500 dark:hover:text-blue-400 ${
											pathname === route.href
												? 'text-blue-500 dark:text-blue-400'
												: ''
										}`}
									>
										{route.label}
									</Link>
								)
							})}
						</nav>
						<nav className='mx-6 flex flex-col gap-4 lg:gap-6'>
							{routesWithSubRoutes.map((route, index) => {
								return (
									<Link
										href={route.href}
										key={index}
										className={`text-base font-medium transition-colors duration-200 hover:text-foreground/70 hover:text-blue-500 dark:hover:text-blue-400 ${
											pathname === route.href
												? 'text-blue-500 dark:text-blue-400'
												: ''
										}`}
									>
										{route.label}
									</Link>
								)
							})}
						</nav>
						{/* socials */}
						<div className='flex flex-col gap-2 lg:gap-3'>
							{socials.map((social, index) => {
								return (
									<Link href={social.href} key={index}>
										<div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center'>
											{social.icon}
										</div>
									</Link>
								)
							})}
						</div>
					</div>
				</div>
				<div className='flex justify-center items-center pt-5 pb-2 px-4'>
					<p className='text-sm text-center'>
						© 2023 All rights reserved
					</p>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
