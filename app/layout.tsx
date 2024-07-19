import { Metadata } from 'next'
import './globals.css'
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants'
import { inter } from '@/components/shared/fonts'

export const metadata: Metadata = {
	title: {
		template: `%s | ${APP_NAME}`,
		default: APP_NAME,
	},
	description: APP_DESCRIPTION,
	metadataBase: new URL(SERVER_URL),
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}
