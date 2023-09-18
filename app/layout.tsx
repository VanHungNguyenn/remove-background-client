import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Remove background from images',
	description: 'Remove background from images',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={poppins.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
