import * as React from 'react'
import type { NextPage } from 'next'
import CustomHead from '../components/Layout/Head'
import SFSHero from '../components/UI/SFSHero'
import Services from '../components/UI/Services'

const Home: NextPage = () => {
	// const windowScroll = () => {
	// 	const navbar = document.getElementById('topnav')
	// 	console.log('in scroll')
	// 	if (navbar) {
	// 		console.log('here')
	// 		if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
	// 			navbar.classList.add('nav-sticky')
	// 		} else {
	// 			navbar.classList.remove('nav-sticky')
	// 		}
	// 	}
	// }

	return (
		<>
			<CustomHead title="Sparks Full-Stack" />
			<SFSHero />
			<Services />
		</>
	)
}

export default Home
