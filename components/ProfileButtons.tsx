'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useRouter } from 'next/navigation'

const ProfileButtons = () => {
	const { data: session } = useSession()

	const router = useRouter()

	if (session && session.user) {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className='cursor-pointer'>
						<AvatarImage src='/avatar.jpg' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end' forceMount>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem className='cursor-pointer'>
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem
						className='cursor-pointer'
						onClick={() => router.push('/dashboard')}
					>
						Dashboard
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						className='cursor-pointer'
						onClick={() => signOut()}
					>
						Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	}

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
