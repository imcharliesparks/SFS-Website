import * as React from 'react'
import Head from 'next/head'

export type MetaContent = {
	name: string
	content: string
}

type Props = {
	title: string
	metaContent?: MetaContent
}

// TODO: Add meta tags for Social media
const CustomHead = ({ title, metaContent }: Props) => (
	<Head>
		{/* TODO: Update all meta values */}
		<title>{title}</title>
		<meta
			name="description"
			content="Sparks Full-Stack specializes in high-quality full-stack web applications, AI software, and native app development for macOS, Windows, iPhone, and Android. Get FAANG grade software at a competitive price."
		/>
		<link rel="canonical" href="https://sparksfullstack.io/" />

		{/* Open Graph */}
		<meta property="og:url" content="https://sparksfullstack.io/" />
		<meta property="og:type" content="website" />
		<meta
			property="og:title"
			content="Sparks Full-Stack - Full-Stack Software Solutions"
		/>
		<meta
			property="og:description"
			content="Sparks Full-Stack specializes in high-quality full-stack web applications, AI software, and native app development for macOS, Windows, iPhone, and Android. Get FAANG grade software at a competitive price."
		/>
		<meta
			property="og:image"
			content="https://www.sparksfullstack.io/_next/static/media/sfs-logo.4fa0dd69.svg"
		/>
		<meta property="og:site_name" content="Sparks Full-Stack" />

		{/* Twitter */}
		{/* <meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@SparksFullStack" />
		<meta name="twitter:creator" content="@SparksFullStack" />
		<meta
			name="twitter:title"
			content="Sparks Full-Stack - High-Quality Software Development"
		/>
		<meta
			name="twitter:description"
			content="Sparks Full-Stack specializes in high-quality full-stack web applications, AI software, and native app development for macOS, Windows, iPhone, and Android. Get FAANG grade software at a competitive price."
		/>
		<meta
			name="twitter:image"
			content="https://sparksfullstack.io/images/twitter-image.jpg"
		/> */}
	</Head>
)

export default CustomHead
