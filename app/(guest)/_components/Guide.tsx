import React from 'react'
import Container from '../../../components/Container'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { listGuideSteps } from '@/constants/content'

const Guide = () => {
	return (
		<Container>
			<div className='py-20 flex flex-col'>
				<h1 className='text-5xl font-bold leading-tight mb-16 text-center max-w-[600px] mx-auto'>
					How to remove a background in seconds?
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{listGuideSteps.map((step, index) => (
						<Card
							key={index}
							className='bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900'
						>
							<CardHeader>
								<Badge
									variant='destructive'
									className='w-max mb-1 bg-gradient-to-br from-red-400 to-red-500'
								>
									Step {index + 1}
								</Badge>
								<CardTitle>{step.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className='text-base'>
									{step.description[0]}
									<br />
									{step.description[1]}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</Container>
	)
}

export default Guide
