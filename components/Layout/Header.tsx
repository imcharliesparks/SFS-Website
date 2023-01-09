import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Squash as Hamburger } from 'hamburger-react'
import Drawer from 'react-modern-drawer'
// @ts-ignore
import styles from '../../styles/components/Header.module.css'
import 'react-modern-drawer/dist/index.css'

// TODO:
// Implement routing to pages and contact modal
// Replace blues with logo colors
// Fix nested nav in drawer
// Potentially fix scroll and make hamburger have higher z index
// Add handling for pop-in/loading animation
// Add sharp for image processing
// Rethink this order of menu items
// Consider implementing a better scrolling methodology

const Header = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false)

	const handleToggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen)
	}

	return (
		<header>
			<nav id="topnav" className="mx-auto defaultscroll is-sticky nav-sticky animate-gradualLoad">
				<div className="container flex items-center justify-between">
					<div className="cursor-pointer pt-2 max-w-xs mx-auto md:mx-0">
						<Link href="/">
							<Image priority={true} src={require('../../resources/sfs-logo.svg')} alt="The Sparks Full-Stack Logo" />
						</Link>
					</div>
					<div className="flex-row visible lg:flex hidden">
						<Link href="#services">
							<a className={`${styles['nav-menu-item']} cursor-pointer hover:text-blue-600 transition-colors ease-in-out`}>
								Services
							</a>
						</Link>
						<Link href="#whoWeAre">
							<a className={`${styles['nav-menu-item']} cursor-pointer hover:text-blue-600 transition-colors ease-in-out`}>
								About
							</a>
						</Link>
						<Link href="#contact">
							<a className={`${styles['nav-menu-item']} cursor-pointer hover:text-blue-600 transition-colors ease-in-out`}>
								Contact
							</a>
						</Link>
					</div>
					<div className="flex-row lg:flex hidden">
						<Link href="#contact">
							<a
								className={`${styles['action-buttons']} cursor-pointer px-6 py-2.5 rounded-full baseline hover:bg-blue-600 hover:text-white transition-colors text-center mr-2`}
							>
								Request Info
							</a>
						</Link>
						<Link href="/client-application">
							<a
								className={`${styles['action-buttons']} cursor-pointer bg-blue-600 px-6 py-2.5 rounded-full text-white baseline hover:bg-blue-300 transition-colors text-center`}
							>
								Apply Now
							</a>
						</Link>
					</div>
					<div className="lg:hidden">
						<Hamburger toggled={isOpen} toggle={handleToggle} />
					</div>
				</div>
				<Drawer open={isOpen} onClose={handleToggle} direction="left">
					<div className={`${styles['mobile-nav-menu']} navbar-menu relative z-50 h-full`}>
						<div className="flex flex-col py-6 px-6 bg-white border-r h-full">
							<div className="flex items-center mb-8">
								<a className={`${styles['sfs-icon']} mr-auto text-3xl font-bold leading-none`} href="#">
									<Image src={require('../../resources/sfs-icon.svg')} alt="The Sparks Full-Stack Logo" />
								</a>
								{/* TODO: Convert to SVG file */}
								<button onClick={handleToggle} className="navbar-close">
									<svg
										className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
									</svg>
								</button>
							</div>
							<div>
								<Link href="#">
									<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded transition-all ease-in duration-200">
										About Us
									</a>
								</Link>
								<ul>
									<li className="mb-1"></li>
									<li className="mb-1">
										<Link href="#">
											<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded transition-all ease-in duration-200">
												Services
											</a>
										</Link>
									</li>
									<li className="mb-1">
										<Link href="#">
											<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded transition-all ease-in duration-200">
												Who We Are
											</a>
										</Link>
									</li>
									<li className="mb-1">
										<Link href="#">
											<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded transition-all ease-in duration-200">
												Contact
											</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className="mt-auto">
								<div className="pt-6">
									<Link href="#">
										<a className="cursor-pointer block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-200 rounded-xl transition-all ease-in duration-200">
											Request Info
										</a>
									</Link>
									<Link href="#">
										<a className="cursor-pointer block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-400 rounded-xl transition-all ease-in duration-200">
											Apply Now
										</a>
									</Link>
								</div>
								<p className="my-4 text-xs text-center text-gray-400">
									<span>Copyright ©Sparks Full-Stack 2023</span>
								</p>
							</div>
						</div>
					</div>
				</Drawer>
			</nav>
		</header>
	)
}

export default Header
