import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// TODO
// Experiment with image placement (background image instead?)
// Replace priority on images with Sharp package https://stackoverflow.com/questions/66637391/next-images-components-are-too-slow-to-appear

const SFSHero = () => {
	return (
		<>
			<section className="relative table w-full md:py-36 lg:py-44 pt-[5rem] xs:pb-10">
				<div className="mx-auto container">
					<div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px] text-center md:text-left">
						<div className="md:col-span-7 mb-10 md:mb-0 md:animate-slideLeft xs:animate-slideUp">
							<div className="md:mr-6">
								<h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">
									<span className="text-yellow-500">Spark</span> your business growth with world-class software solutions.
								</h4>
								<p className="text-slate-400 text-lg max-w-xl">
									We develop industry leading software that converts and performs.
								</p>
								<div className="mt-6">
									<Link href="/contact">
										<a className="btn bg-blue-600 hover:bg-blue-400 border-indigo-600 hover:border-indigo-700 text-white rounded-md mx-2 mt-2 w-[160px]">
											Get Started
										</a>
									</Link>
									<Link href="documentation.html">
										<a className="btn bg-transparent hover:bg-blue-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md mx-2 mt-2 w-[160px]">
											<i className="uil uil-book-alt"></i> More Info
										</a>
									</Link>
								</div>
							</div>
						</div>

						<div className="md:col-span-5 md:animate-slideRight xs:animate-slideUp">
							<Image
								priority={true}
								src={require('../../resources/hero-art.svg')}
								alt="Hero image with a rocket and a computer screen"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="border-t border-b border-gray-100 dark:border-gray-700">
				<div className="container">
					<h4 className="text-center text-slate-400 text-1l font-semibold translate-y-[16px]">
						Our engineers have delivered software for:
					</h4>
					<div className="grid grid-cols-3 justify-center translate-x-[-15px] animate-gradualLoad">
						<div id="apple-logo" className="mx-auto py-4">
							<Image
								priority={true}
								src={require('../../resources/apple.svg')}
								width="54px"
								height="62px"
								className="h-6"
								alt=""
							/>
						</div>

						<div id="kroger-logo" className="mx-auto py-4">
							<Image
								priority={true}
								src={require('../../resources/kroger.svg')}
								width="74px"
								height="90px"
								className="h-6"
								alt=""
							/>
						</div>

						<div id="splash-logo" className="mx-auto py-4">
							<Image
								priority={true}
								src={require('../../resources/splash.png')}
								width="110px"
								height="30px"
								className="h-6"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default SFSHero
