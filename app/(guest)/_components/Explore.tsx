import React from 'react'
import Container from '../../../components/Container'
import Image from 'next/image'
import { listTools } from '@/constants/content'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'

const Explore = () => {
	return (
		<Container>
			<div className='py-20 flex flex-col'>
				<h1 className='text-5xl font-bold leading-tight mb-2 text-center mx-auto'>
					Explore our free tools
				</h1>
				<p className='text-lg font-medium text-foreground/60 md:text-xl mb-12 mx-auto'>
					Make your pictures pop with features that are completely
					free.
				</p>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
					{listTools.map((tool, index) => (
						<Link href='/' className='flex flex-col' key={index}>
							<Image
								src={tool.image}
								width={300}
								height={100}
								alt={tool.title}
								className='rounded-sm w-full height-auto'
							/>
							<h3 className='text-xl font-bold leading-tight mb-2 mt-4'>
								{tool.title}
							</h3>
							<p className='text-sm text-foreground/60'>
								{tool.description}
							</p>
						</Link>
					))}
				</div>
				<Button className='mt-12 mx-auto' size={'lg'}>
					<Link href='/'>Explore all tools</Link>
				</Button>
			</div>
		</Container>
	)
}

export default Explore
