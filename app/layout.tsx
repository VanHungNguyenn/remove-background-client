'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import Providers from './providers'

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
				<Providers>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						<div className='min-h-screen'>{children}</div>
						<Footer />
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	)
}
