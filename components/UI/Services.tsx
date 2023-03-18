import React from 'react'
import { Icon } from 'react-icons-kit'
import { ic_computer } from 'react-icons-kit/md/ic_computer'
import { ic_phone_iphone } from 'react-icons-kit/md/ic_phone_iphone'
import { ic_code } from 'react-icons-kit/md/ic_code'
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward'
import { bitcoin } from 'react-icons-kit/fa/bitcoin'
import { ic_fact_check } from 'react-icons-kit/md/ic_fact_check'
import { ic_person } from 'react-icons-kit/md/ic_person'

// TODO: Hover animation on "Read More"
// TODO: Fade in animation like here: https://shreethemes.in/techwind/layouts/index-saas.html
// TODO: Link to services or flip card
// TODO: Do we want to add more services here with more specific details? https://shreethemes.in/techwind/layouts/index-seo.html
// TODO: Reinstate learn more once the above is
const Services = () => {
	return (
		<section className="relative pb-24 pt-12 bg-gray-50 dark:bg-slate-800">
			<div className="container lg mx-auto">
				<div className="grid grid-cols-1 pb-8 text-center">
					<h3 id="services" className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
						Services we Offer
					</h3>
					<p className="text-slate-400 max-w-xl mx-auto">If you can dream it, we can build it.</p>
				</div>
				<div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
					<div className="group p-6 md:px-4 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
						<div className="w-16 h-16 bg-indigo-600/5 text-blue-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
							<Icon size={32} icon={ic_computer} />
						</div>

						<div className="content mt-7">
							<p className="title h5 text-lg font-medium hover:text-blue-600">
								Web Applications
							</p>
							<p className="text-slate-400 mt-3">
								World-class full-stack applications that run on the web, using a variety of technologies.
							</p>

							{/* <div className="mt-5">
								<a href="" className="btn btn-link text-blue-600 hover:text-blue-600 ">
									Learn More <Icon size={16} icon={ic_arrow_forward} />
								</a>
							</div> */}
						</div>
					</div>

					<div className="group p-6 md:px-4 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
						<div className="w-16 h-16 bg-indigo-600/5 text-blue-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
							<Icon size={32} icon={ic_phone_iphone} />
						</div>

						<div className="content mt-7">
							<p className="title h5 text-lg font-medium hover:text-blue-600">
								Mobile & Native Applications
							</p>
							<p className="text-slate-400 mt-3">
								High-performing native applications that run on iOS, Android, Windows, and macOS.
							</p>

							{/* <div className="mt-5">
								<a href="" className="btn btn-link text-blue-600 hover:text-blue-600">
									Learn More <Icon size={16} icon={ic_arrow_forward} />
								</a>
							</div> */}
						</div>
					</div>

					<div className="group p-6 md:px-4 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
						<div className="w-16 h-16 bg-indigo-600/5 text-blue-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
							<Icon size={32} icon={ic_person} />
						</div>

						<div className="content mt-7">
							<p className="title h5 text-lg font-medium hover:text-blue-600">
								AI Integrations
							</p>
							<p className="text-slate-400 mt-3">
								Supercharge your app idea with the power of AI using our ChatGPT integrations.
							</p>

							{/* <div className="mt-5">
								<a href="" className="btn btn-link text-blue-600 hover:text-blue-600">
									Learn More <Icon size={16} icon={ic_arrow_forward} />
								</a>
							</div> */}
						</div>
					</div>
					<div className="group p-6 md:px-4 mt-8 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
						<div className="w-16 h-16 bg-indigo-600/5 text-blue-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
							<Icon size={32} icon={ic_code} />
						</div>

						<div className="content mt-7">
							<p className="title h5 text-lg font-medium hover:text-blue-600">
								Server Applications
							</p>
							<p className="text-slate-400 mt-3">
								From backend app, to microservices, to serverless functions, we&apos;ve got you covered.
							</p>

							{/* <div className="mt-5">
								<a href="" className="btn btn-link text-blue-600 hover:text-blue-600">
									Learn More <Icon size={16} icon={ic_arrow_forward} />
								</a>
							</div> */}
						</div>
					</div>
					<div className="group p-6 md:px-4 mt-8 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
						<div className="w-16 h-16 bg-indigo-600/5 text-blue-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
							<Icon size={32} icon={bitcoin} />
						</div>

						<div className="content mt-7">
							<p className="title h5 text-lg font-medium hover:text-blue-600">
								Web3 Development
							</p>
							<p className="text-slate-400 mt-3">
								Custom smart contracts ranging from coins to NFT projects and everything in between.
							</p>

							{/* <div className="mt-5">
								<a href="" className="btn btn-link text-blue-600 hover:text-blue-600">
									Learn More <Icon size={16} icon={ic_arrow_forward} />
								</a>
							</div> */}
						</div>
					</div>
					<div className="group p-6 md:px-4 mt-8 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
						<div className="w-16 h-16 bg-indigo-600/5 text-blue-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
							<Icon size={32} icon={ic_fact_check} />
						</div>

						<div className="content mt-7">
							<p className="title h5 text-lg font-medium hover:text-blue-600">
								SEO, Design, & Performance
							</p>
							<p className="text-slate-400 mt-3">
								Design, SEO, site performance, updates to existing codebases, and a whole lot more.
							</p>

							{/* <div className="mt-5">
								<a href="" className="btn btn-link text-blue-600 hover:text-blue-600">
									Learn More <Icon size={16} icon={ic_arrow_forward} />
								</a>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
