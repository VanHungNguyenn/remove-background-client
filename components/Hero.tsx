import React from 'react'
import Container from './Container'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<Container>
			<div className='flex items-center justify-between gap-4 py-20'>
				<div className='flex-1 flex flex-col w-full h-full py-16 mx-auto sm:py-20 md:py-24 lg:py-32'>
					<h1 className=' text-5xl font-bold leading-tight mb-2'>
						Free image background remover.
					</h1>
					<h3 className='text-lg font-medium text-foreground/60 md:text-xl mb-6'>
						Erase image backgrounds for free and replace it with
						different backgrounds of your choosing.
					</h3>
					<div className='flex flex-col h-[200px] max-w-[475px] w-full items-center justify-center rounded-md border border-dashed text-sm'>
						{/* Button center */}
						<Button size='lg' className='mb-2'>
							CHOOSE A PHOTO
						</Button>
						<span className='text-foreground/60 text-sm'>
							or Drag and Drop images
						</span>
					</div>
					<div className='text-foreground/60 text-sm mt-1'>
						By uploading an image or URL you agree to our{' '}
						<Link
							href='/terms-of-service'
							className='text-blue-500'
						>
							Terms of Service
						</Link>
						.
					</div>
					<div className='flex items-center my-4'>
						<div className='text-foreground text-sm mr-2'>
							No image? <br />
							Try one of these:
						</div>
						<div className='flex items-center gap-2'>
							<Image
								src='/try.jpg'
								width={60}
								height={60}
								alt='banner'
								className='object-cover rounded-md aspect-square'
							/>
							<Image
								src='/try.jpg'
								width={60}
								height={60}
								alt='banner'
								className='object-cover rounded-md aspect-square'
							/>
							<Image
								src='/try.jpg'
								width={60}
								height={60}
								alt='banner'
								className='object-cover rounded-md aspect-square'
							/>
							<Image
								src='/try.jpg'
								width={60}
								height={60}
								alt='banner'
								className='object-cover rounded-md aspect-square'
							/>
						</div>
					</div>
				</div>
				{/* image */}
				<div className='flex-1 flex items-center justify-center'>
					<Image
						src='/banner.jpg'
						width={500}
						height={592}
						alt='banner'
						className='object-cover rounded-md aspect-auto h-auto'
					/>
				</div>
			</div>
		</Container>
	)
}

export default Hero
