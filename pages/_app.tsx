import * as React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	// @ts-ignore
	const renderWithLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

	return <ErrorBoundary>{renderWithLayout(<Component {...pageProps} />)}</ErrorBoundary>
}

export default MyApp
