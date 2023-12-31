'use client'
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Sun, Moon } from 'lucide-react'
import ProfileButtons from './ProfileButtons'
import { routes } from '@/constants/routes'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

const Header = () => {
	const { theme, setTheme } = useTheme()
	const pathname = usePathname()
	// fixed top-0 left-0 right-0
	return (
		<header className='mx-auto py-4 border-b'>
			<Container>
				<div className='relative flex items-center justify-between h-16 w-full px-2'>
					<Link href='/'>
						<Image
							src='/logo.png'
							alt='logo'
							width={64}
							height={64}
							className='cursor-pointer'
						/>
					</Link>

					<nav className='mx-6 flex items-center gap-4 lg:gap-6'>
						{routes.map((route, index) => {
							return (
								<Button
									key={index}
									variant='ghost'
									asChild
									className={`text-base font-medium transition-colors duration-200 hover:text-foreground/70
										hover:text-blue-500 dark:hover:text-blue-400
									${pathname === route.href ? 'text-blue-500 dark:text-blue-400' : ''}`}
								>
									<Link href={route.href}>{route.label}</Link>
								</Button>
							)
						})}
					</nav>
					{/* Buttons feature */}
					<div className='flex items-center'>
						{/* Dark mode */}
						<Button
							variant='ghost'
							size='icon'
							aria-label='Toggle theme'
							className='mr-6'
							onClick={() =>
								setTheme(theme === 'dark' ? 'light' : 'dark')
							}
						>
							<Sun className='h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-180 dark:scale-0' />
							<Moon className='absolute h-6 w-6 rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100' />
							<span className='sr-only'>Toggle Theme</span>
						</Button>
						{/* Authen Button */}
						<ProfileButtons />
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
