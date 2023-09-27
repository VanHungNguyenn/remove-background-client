import { authOptions } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

const Dashboard = async () => {
	const session = await getServerSession(authOptions)

	return (
		<section className='flex flex-col gap-6'>
			<h1 className='text-2xl font-bold'>Dashboard</h1>
			<p className='text-lg'>Welcome, {session?.user?.name ?? 'User'}</p>
			{/* email */}
			<p className='text-lg'>
				{session?.user?.email ?? 'Email@gmail.com'}
			</p>
		</section>
	)
}

export default Dashboard
