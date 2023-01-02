import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="font-nunito">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
