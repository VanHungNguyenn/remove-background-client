import React, { use, useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { saveAs } from 'file-saver'

interface ResultProps {
	orginalImage: File | null
	setShowPreview: React.Dispatch<React.SetStateAction<boolean>>
	processedImage: string | null
	loading: boolean
}

// processedImage = https://res.cloudinary.com/dq7l8216n/image/upload/v1634176096/processed_image.png

const Result = ({
	orginalImage,
	setShowPreview,
	processedImage,
	loading,
}: ResultProps) => {
	const [tab, setTab] = useState<'original' | 'remove'>('remove')

	const onTurnOffPreview = () => {
		setShowPreview(false)
	}

	return (
		<>
			<div className='p-4 border rounded-sm max-w-[1000px] mx-auto my-8'>
				<Tabs defaultValue={tab} className='relative'>
					<TabsList className='mb-4'>
						<TabsTrigger className='w-[200px]' value='original'>
							Original
						</TabsTrigger>
						<TabsTrigger className='w-[200px]' value='remove'>
							Remove Background
						</TabsTrigger>
					</TabsList>
					<div>
						<TabsContent value='original'>
							<ImagePrview
								imageUrl={URL.createObjectURL(orginalImage!)}
							/>
						</TabsContent>
						<TabsContent value='remove'>
							{loading ? (
								<div className='flex items-center justify-center h-[500px]'>
									<div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-foreground'></div>
								</div>
							) : (
								<ImagePrview imageUrl={processedImage!} />
							)}
						</TabsContent>
					</div>
					<X
						onClick={onTurnOffPreview}
						className='absolute top-0 right-0 h-6 w-6 text-foreground/60 cursor-pointer'
					/>
				</Tabs>
			</div>
		</>
	)
}

interface ImagePrviewProps {
	imageUrl: string
}

const ImagePrview: React.FC<ImagePrviewProps> = ({ imageUrl }) => {
	const downloadImage = () => {
		saveAs(imageUrl, 'image.png')
	}

	return (
		<div className='flex items-center gap-8 justify-around'>
			<Image
				src={imageUrl}
				fill
				alt='banner'
				className='object-cover rounded-md aspect-square cursor-pointer border border-spacing-1 border-indigo-100 w-[500px] h-auto'
			/>

			<div>
				<div className='flex flex-col items-center gap-4'>
					<Button size='lg' onClick={downloadImage}>
						Download
					</Button>

					<span className='text-foreground/60 text-sm italic'>
						Full image size: 500 x 500
					</span>
				</div>
			</div>
		</div>
	)
}

export default Result
