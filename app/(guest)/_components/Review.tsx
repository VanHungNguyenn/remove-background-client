import React from 'react'
import Container from '../../../components/Container'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { listReviews } from '@/constants/content'

const Review = () => {
	return (
		<Container>
			<div className='py-20 flex flex-col'>
				<h1 className='text-5xl font-bold leading-tight mb-2 text-center mx-auto'>
					What our customers say
				</h1>
				<p className='text-lg font-medium text-foreground/60 md:text-xl mb-12 mx-auto'>
					We are proud to have helped over 100,000 customers with
					their images.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{listReviews.map((review) => (
						<div
							key={review.id}
							className='flex flex-col bg-gray-200 rounded-lg p-8 dark:bg-gray-800'
						>
							<div className='flex items-center mb-4'>
								{Array(review.rating)
									.fill(null)
									.map((_, i) => (
										<Star
											key={i}
											size={24}
											className='text-yellow-400 mr-2'
										/>
									))}
							</div>
							<p className='text-foreground/60 mb-6'>
								{review.content}
							</p>
							<div className='flex items-center mt-auto'>
								<Image
									src={review.avatar}
									alt='avatar'
									width={48}
									height={48}
									className='w-12 h-12 rounded-full mr-4 object-cover'
								/>
								<div>
									<h3 className='text-xl font-bold leading-tight mb-2'>
										{review.name}
									</h3>
									<p className='text-sm text-foreground/60'>
										{review.position}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}

export default Review
