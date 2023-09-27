'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function ClientPage() {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/api/auth/signin?callbackUrl=/client')
		},
	})

	return (
		<section className='flex flex-col gap-6'>
			<h1 className='text-2xl font-bold'>Client</h1>
			<p className='text-lg'>Welcome, {session?.user?.name ?? 'User'}</p>
			{/* email */}
			<p className='text-lg'>
				{session?.user?.email ?? 'default@gmail.com'}
			</p>
		</section>
	)
}
