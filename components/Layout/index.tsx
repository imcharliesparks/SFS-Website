import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => (
	<div>
		<Header />
		<main className="container mx-auto">{children}</main>
		<Footer />
	</div>
)

export default Layout
