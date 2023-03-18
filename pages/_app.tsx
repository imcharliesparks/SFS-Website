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
	// @ts-ignore
	const renderWithLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

	return (
		<ErrorBoundary>
			<SessionProvider session={session}>
				{ renderWithLayout((<Component {...pageProps} />)) }
			</SessionProvider>
		</ErrorBoundary>
	)
}

export default MyApp
