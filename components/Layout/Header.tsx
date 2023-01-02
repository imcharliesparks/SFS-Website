import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
	// TODO: Add hamburger menu
	return (
		<header>
			<nav className="relative container mx-auto p-6">
				<div className="flex items-center justify-between">
					<div className="cursor-pointer pt-2 max-w-xs mx-auto md:mx-0">
						<Link href="/">
							<Image src={require('../../resources/sfs-logo.svg')} alt="The Sparks Full-Stack Logo" />
						</Link>
					</div>
					<div className="flex flex-row">
						<Link href="/auth/sign-in">
							<span
								style={{ width: 106 }}
								className="cursor-pointer hidden md:block px-6 py-2.5 rounded-full baseline hover:bg-sfs-blue hover:text-white transition-colors text-center mr-2"
							>
								Sign In
							</span>
						</Link>
						<Link href="/auth/sign-up">
							<span
								style={{ width: 106 }}
								className="cursor-pointer hidden md:block px-6 py-2.5 rounded-full baseline hover:bg-sfs-blue hover:text-white transition-colors text-center"
							>
								Sign Up
							</span>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
