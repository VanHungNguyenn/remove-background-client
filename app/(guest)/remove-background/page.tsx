'use client'
import React, { useState } from 'react'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Result from '@/components/Result'

const RemoveBackground = () => {
	const [showPreview, setShowPreview] = useState(false)

	return (
		<Container>
			<div className='py-20 px-2'>
				<div className='flex flex-col items-center '>
					<h1 className='text-5xl font-bold text-foreground mx-auto max-w-[800px] text-center leading-tight mb-16'>
						Upload an image to remove the background
					</h1>
					<div className='flex flex-col h-[200px] max-w-[475px] w-full items-center justify-center rounded-md border border-dashed text-sm bg-gray-100 dark:bg-gray-800 text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'>
						{/* Button center */}
						<Button
							size='lg'
							className='mb-2'
							onClick={() => setShowPreview((prev) => !prev)}
						>
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
								className='object-cover rounded-md aspect-square cursor-pointer'
							/>
							<Image
								src='/try.jpg'
								width={60}
								height={60}
								alt='banner'
								className='object-cover rounded-md aspect-square cursor-pointer'
							/>
							<Image
								src='/try.jpg'
								width={60}
								height={60}
								alt='banner'
								className='object-cover rounded-md aspect-square cursor-pointer'
							/>
							<Image
								src='/try.jpg'
								width={60}
								height={60}
								alt='banner'
								className='object-cover rounded-md aspect-square cursor-pointer'
							/>
						</div>
					</div>
				</div>
				{showPreview && (
					<>
						<hr className='border-foreground/10 dark:border-foreground/30 my-4' />
						<Result />
					</>
				)}
			</div>
		</Container>
	)
}

export default RemoveBackground
