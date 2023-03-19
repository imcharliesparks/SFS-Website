import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { Icon } from 'react-icons-kit'
import { ic_check_circle_outline } from 'react-icons-kit/md/ic_check_circle_outline'

// TODO: Replace images
// TODO: Update all sections for SEO purposes
// TODO: Style the H4s here
const WhyUs = () => {
	return (
		<section id="whyUs" className="md:pb-24 py-16 overflow-x-hidden xs:text-center md:text-left">
			<div className="container">
				<div className="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
					<h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Why Work with Us?</h3>

					<p className="text-slate-400 max-w-xl mx-auto">
						With over two decades of combined experiece under our belt, we&lsquo;re experts at software development and seamless project delivery. Get Silicon Valley-grade software at a real world price.
					</p>
				</div>

				<div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
					<div className="relative animate-slideLeft" data-wow-delay=".3s">
						<Image
							priority={true}
							src={require('../../resources/classic02.png')}
							className="rounded-lg shadow-md dark:shadow-gray-800"
							alt="Screenshot of software in action"
						/>
						<div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 ltr:left-0 rtl:right-0 rotate-45 -z-1 rounded-3xl"></div>
					</div>

					<div className="lg:ml-8 animate-gradualLoad" data-wow-delay=".3s">
						<h4 className="mb-4 text-2xl leading-normal font-medium">
							Great Software that Solves <br /> Real World Problems
						</h4>
						<p className="text-slate-400">
							Empower your business with our world-class solutions. We provide cutting-edge software that boosts efficiency, productivity, and user satisfaction. Whether your challenge is complex or simple, we create custom software that fits your needs and surpasses your expectations.
						</p>
						<ul className="list-none text-slate-400 mt-4">
							<li className="mb-1">
								<Icon size={22} icon={ic_check_circle_outline} className="text-blue-600 text-xl mr-2" />
								Cutting-edge software designed to solve real-world problems.
							</li>
							<li className="mb-1">
								<Icon size={22} icon={ic_check_circle_outline} className="text-blue-600 text-xl mr-2" />
								Efficient, productive, and user-friendly software.
							</li>
							<li className="mb-1">
								<Icon size={22} icon={ic_check_circle_outline} className="text-blue-600 text-xl mr-2" />
								Tailored to meet unique requirements and exceed expectations.
							</li>
						</ul>

						<div className="mt-4">
							<Link href="#contact">
								<a
									className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Find Out More <i className="uil uil-angle-right-b align-middle"></i>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container md:mt-24 mt-16">
				<div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
					<div className="relative order-1 md:order-2 animate-slideRight" data-wow-delay=".5s">
						<Image
							priority={true}
							src={require('../../resources/classic03.png')}
							className="rounded-lg shadow-md dark:shadow-gray-800"
							alt="Screenshot of software in action"
						/>
						<div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-indigo-600/5 bottom-0 ltr:right-0 rtl:left-0 rotate-45 -z-1 rounded-3xl"></div>
					</div>

					<div className="lg:mr-8 order-2 md:order-1 wow animate-gradualLoad" data-wow-delay=".5s">
						<h4 className="mb-4 text-2xl leading-normal font-medium">Applications that Convert and Perform</h4>
						<p className="text-slate-400">
							Transform your business with cutting-edge custom applications. We design and develop solutions that meet the unique needs of your business and drive real results.
						</p>

						<ul className="list-none text-slate-400 mt-4">
							<li className="mb-1">
								<Icon size={22} icon={ic_check_circle_outline} className="text-blue-600 text-xl mr-2" />
								Custom applications tailored to meet the needs of your business.
							</li>
							<li className="mb-1">
								<Icon size={22} icon={ic_check_circle_outline} className="text-blue-600 text-xl mr-2" />
								Streamline processes, improve UX, and increase revenue.
							</li>
							<li className="mb-1">
								<Icon size={22} icon={ic_check_circle_outline} className="text-blue-600 text-xl mr-2" />
								Created by experts to set you apart from the competition.
							</li>
						</ul>

						<div className="mt-4">
							<Link href="page-aboutus.html">
								<a
									className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Find Out More <i className="uil uil-angle-right-b align-middle"></i>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhyUs
