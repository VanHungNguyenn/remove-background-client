import React from 'react'
import Container from './Container'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { listQuestions } from '@/constants/content'

const Question = () => {
	return (
		<Container>
			<div className='py-20 flex flex-col'>
				<h1 className='text-5xl font-bold leading-tight mb-16 max-w-[600px] text-center mx-auto'>
					Frequently Asked Questions
				</h1>
				<div className='w-[1000px] max-w-full mx-auto'>
					{
						<Accordion type='single' collapsible className='w-full'>
							{listQuestions.map((item, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
								>
									<AccordionTrigger>
										{item.question}
									</AccordionTrigger>
									<AccordionContent>
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					}
				</div>
			</div>
		</Container>
	)
}

export default Question
