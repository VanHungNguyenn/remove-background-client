import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { Button } from './ui/button'

const Features = () => {
	return (
		<Container>
			<div className='py-20 flex flex-col'>
				<div className='flex flex-col gap-20'>
					<div className='flex items-center justify-center gap-40'>
						<div className='flex items-center'>
							<Image
								src='/feature1.jpg'
								width={450}
								height={450}
								alt='feature'
								className='object-cover rounded-md aspect-square'
							/>
						</div>
						<div className='flex flex-col gap-6 max-w-[450px]'>
							<h4 className='text-3xl font-bold leading-tight'>
								The fastest background eraser
							</h4>
							<p className='text-foreground/60 text-base'>
								Transform your photos with our background
								remover app! Highlight your subject and create a
								transparent background, so you can place it in a
								variety of new designs and destinations. Try it
								now and immerse your subject in a completely
								different environment!
							</p>
							<Button className='w-fit'>
								Try now - no sign up required
							</Button>
						</div>
					</div>
					<div className='flex items-center justify-center  gap-40 flex-row-reverse'>
						<div className='flex items-center'>
							<Image
								src='/feature1.jpg'
								width={450}
								height={450}
								alt='feature'
								className='object-cover rounded-md aspect-square'
							/>
						</div>
						<div className='flex flex-col gap-6 max-w-[450px]'>
							<h4 className='text-3xl font-bold leading-tight'>
								More free editing options
							</h4>
							<p className='text-foreground/60 text-base'>
								Change your background color or replace it with
								an image of your own. Customizing your pictures
								with emojis or simply add text to your image -
								it has never been easier! Check out our library
								of backgrounds and templates, if you want to get
								inspired.
							</p>
							<Button className='w-fit'>
								Try now - no sign up required
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Features
