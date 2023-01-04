import * as React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CustomHead from '../components/Layout/Head'
import SFSHero from '../components/UI/SFSHero'

const Home: NextPage = () => {
	const windowScroll = () => {
		const navbar = document.getElementById('topnav')
		console.log('in scroll')
		if (navbar) {
			console.log('here')
			if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
				navbar.classList.add('nav-sticky')
			} else {
				navbar.classList.remove('nav-sticky')
			}
		}
	}

	return (
		<>
			<CustomHead title="Sparks Full-Stack" />
			<SFSHero />

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</>
	)
}

export default Home
