import React from 'react'
import { Icon } from 'react-icons-kit'
import { ic_computer } from 'react-icons-kit/md/ic_computer'
import { ic_phone_iphone } from 'react-icons-kit/md/ic_phone_iphone'
import { ic_code } from 'react-icons-kit/md/ic_code'

const Services = () => {
	return (
		<section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="features">
			<div className="container lg mx-auto">
				<div className="grid grid-cols-1 pb-8 text-center">
					<h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Services we Offer</h3>
					<p className="text-slate-400 max-w-xl mx-auto">If you can dream it, we can build it.</p>
				</div>
				<div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
					<div className="group p-6 md:px-4 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
						<div className="w-16 h-16 bg-indigo-600/5 text-blue-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
							<Icon size={32} icon={ic_computer} />
						</div>

						<div className="content mt-7">
							<a href="page-services.html" className="title h5 text-lg font-medium hover:text-blue-600">
								Web Applications
							</a>
							<p className="text-slate-400 mt-3">
								World-class full-stack applications that run on the web, using a variety of technologies.
							</p>

							<div className="mt-5">
								<a
									href=""
									className="btn btn-link text-blue-600 hover:text-blue-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Read More
								</a>
							</div>
						</div>
					</div>

					<div className="group p-6 md:px-4 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
						<div className="w-16 h-16 bg-indigo-600/5 text-blue-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
							<Icon size={32} icon={ic_phone_iphone} />
						</div>

						<div className="content mt-7">
							<a href="page-services.html" className="title h5 text-lg font-medium hover:text-blue-600">
								Native Applications
							</a>
							<p className="text-slate-400 mt-3">
								High-performing native applications that run on iOS, Android, Windows, and macOS.
							</p>

							<div className="mt-5">
								<a
									href=""
									className="btn btn-link text-blue-600 hover:text-blue-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Read More <i className="uil uil-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="group p-6 md:px-4 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
						<div className="w-16 h-16 bg-indigo-600/5 text-blue-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
							<Icon size={32} icon={ic_code} />
						</div>

						<div className="content mt-7">
							<a href="page-services.html" className="title h5 text-lg font-medium hover:text-blue-600">
								Design, Performance, and More
							</a>
							<p className="text-slate-400 mt-3">
								Design, SEO, site performance, updates to existing codebases, and a whole lot more.
							</p>

							<div className="mt-5">
								<a
									href=""
									className="btn btn-link text-blue-600 hover:text-blue-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Read More <i className="uil uil-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services