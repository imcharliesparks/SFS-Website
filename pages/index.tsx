import * as React from 'react'
import type { NextPage } from 'next'
import CustomHead from '../components/Layout/Head'
import SFSHero from '../components/UI/SFSHero'
import Services from '../components/UI/Services'
import WhoWeAre from '../components/UI/WhoWeAre'
import WhyUs from '../components/UI/WhyUs'

const Home: NextPage = () => {
	return (
		<>
			<CustomHead title="Sparks Full-Stack: World-class software solutions." />
			<SFSHero />
			<Services />
			<WhoWeAre />
			<WhyUs />
		</>
	)
}

export default Home
