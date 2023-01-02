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

// TODO: Expand as SEO knowledge grows
const CustomHead = ({ title, metaContent }: Props) => (
	<Head>
		{/* TODO: Update all meta values */}
		<title>{title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<meta name="description" content="Tailwind CSS Saas & Software Landing Page Template" />
		<meta
			name="keywords"
			content="agency, application, business, clean, creative, cryptocurrency, it solutions, modern, multipurpose, nft marketplace, portfolio, saas, software, tailwind css"
		/>
		<meta name="author" content="Shreethemes" />
		<meta name="website" content="https://shreethemes.in" />
		<meta name="email" content="support@shreethemes.in" />
		<meta name="version" content="1.6.0" />
		{metaContent && <meta name={metaContent.name} content={metaContent.content} />}
	</Head>
)

export default CustomHead
