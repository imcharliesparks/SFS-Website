import * as React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'
import Layout from '../components/Layout'
import { SessionProvider } from 'next-auth/react'
// TODO: Implement font after upgrade to Next 13 https://nextjs.org/docs/basic-features/font-optimization
// import { Nunito } from '@next/font/google'
// const nunito = Nunito()

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<ErrorBoundary>
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</ErrorBoundary>
	)
}

export default MyApp
