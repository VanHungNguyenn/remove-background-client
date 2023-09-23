import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Result = () => {
	const [tab, setTab] = useState<'original' | 'remove'>('remove')

	return (
		<>
			<div className='p-4 border rounded-sm max-w-[1000px] mx-auto my-8'>
				<Tabs defaultValue='remove' className='relative'>
					<TabsList className='mb-4'>
						<TabsTrigger className='w-[200px]' value='original'>
							Original
						</TabsTrigger>
						<TabsTrigger className='w-[200px]' value='remove'>
							Remove Background
						</TabsTrigger>
					</TabsList>
					<TabsContent value='original'>
						<ImagePrview imageUrl='/avatar.jpg' />
					</TabsContent>
					<TabsContent value='remove'>
						<ImagePrview imageUrl='/img-remove.png' />
					</TabsContent>
					<X className='absolute top-0 right-0 h-6 w-6 text-foreground/60 cursor-pointer' />
				</Tabs>
			</div>
		</>
	)
}

interface ImagePrviewProps {
	imageUrl: string
}

const ImagePrview: React.FC<ImagePrviewProps> = ({ imageUrl }) => {
	return (
		<div className='flex items-center gap-8 justify-around'>
			<Image
				src={imageUrl}
				width={500}
				height={500}
				alt='banner'
				className='object-cover rounded-md aspect-square cursor-pointer'
			/>
			<div>
				<div className='flex flex-col items-center gap-4'>
					<Button size='lg'>Download</Button>
					<span className='text-foreground/60 text-sm italic'>
						Full image size: 500 x 500
					</span>
				</div>
			</div>
		</div>
	)
}

export default Result
