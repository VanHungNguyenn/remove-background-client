'use client'
import React, { useState, useCallback } from 'react'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Result from '@/components/Result'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import { axiosNoAuth } from '@/lib/axios'

const RemoveBackground = () => {
	const [showPreview, setShowPreview] = useState(false)
	const [file, setFile] = useState<File | null>(null)
	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState<string | null>(null)

	const onDrop = useCallback(async (acceptedFiles: File[]) => {
		setFile(
			Object.assign(acceptedFiles[0], {
				preview: URL.createObjectURL(acceptedFiles[0]),
			})
		)
		setShowPreview(true)

		try {
			setLoading(true)

			const formData = new FormData()
			formData.append('file', acceptedFiles[0])

			const res = await axiosNoAuth.post('/result/create', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})

			setResult(res.data.imageUrl)
			setLoading(false)
		} catch (error: any) {
			error.response && toast.error(error.response.data.message)

			setLoading(false)
			setShowPreview(false)
		}
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: {
			'image/*': [],
		},
		onDrop,
	})

	return (
		<Container>
			<div className='py-20 px-2'>
				<div className='flex flex-col items-center '>
					<h1 className='text-5xl font-bold text-foreground mx-auto max-w-[800px] text-center leading-tight mb-16'>
						Upload an image to remove the background
					</h1>
					<div
						{...getRootProps()}
						className='flex flex-col h-[200px] max-w-[475px] w-full items-center justify-center rounded-md border border-dashed text-sm bg-gray-100 dark:bg-gray-800 text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
					>
						<input {...getInputProps()} />
						{isDragActive ? (
							<p>Drop the files here ...</p>
						) : (
							<>
								<Button size='lg' className='mb-2'>
									CHOOSE A PHOTO
								</Button>
								<span className='text-foreground/60 text-sm'>
									or Drag and Drop images
								</span>
							</>
						)}
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

						<Result
							orginalImage={file}
							processedImage={result}
							setShowPreview={setShowPreview}
							loading={loading}
						/>
					</>
				)}
			</div>
		</Container>
	)
}

export default RemoveBackground
