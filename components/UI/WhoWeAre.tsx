import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from 'react-icons-kit'
import { linkedin2 } from 'react-icons-kit/icomoon/linkedin2'
import { ic_email } from 'react-icons-kit/md/ic_email'
import { ic_person } from 'react-icons-kit/md/ic_person'

// TODO: Find a better way to display years of experience
// TODO: Animations
// TODO: Add email support
const WhoWeAre = () => {
	return (
		<section className="relative md:py-24 py-16">
			<div className="container">
				<div className="grid grid-cols-1 pb-8 text-center">
					<h6 className="text-indigo-600 text-base mb-2">Who We Are</h6>
					<h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
						21+ Years of Combined Experinece
					</h3>

					<p className="text-slate-400 max-w-xl mx-auto">
						We have extensive experience deliverying world-class applications that perform and convert. Our work has made and
						saved millions for the companies we&apos;ve worked with.
					</p>
				</div>

				<div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
					<div className="md:col-span-6">
						<div className="group text-center">
							<div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
								<Image src={require('../../resources/charlie.jpeg')} height={278} width={278} alt="Charlie Sparks" />
								<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

								<ul className="list-none absolute right-0 left-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
									<li className="inline mx-1">
										<Link href="https://www.linkedin.com/in/sparksfullstack/">
											<a className="btn btn-icon btn-sm rounded-full border border-blue-600 bg-blue-600 hover:bg-blue-400 text-white transition-all duration-300 ease-in-out">
												<Icon size={16} className="mb-[2px]" icon={linkedin2} />
											</a>
										</Link>
									</li>
									<li className="inline mx-1">
										<Link href="">
											<a className="btn btn-icon btn-sm rounded-full border border-blue-600 bg-blue-600 hover:bg-blue-400 text-white transition-all duration-300 ease-in-out">
												<Icon size={16} icon={ic_email} />
											</a>
										</Link>
									</li>
									<li className="inline mx-1">
										<Link href="">
											<a className="btn btn-icon btn-sm rounded-full border border-blue-600 bg-blue-600 hover:bg-blue-400 text-white transition-all duration-300 ease-in-out">
												<Icon size={16} icon={ic_person} />
											</a>
										</Link>
									</li>
								</ul>
							</div>

							<div className="content mt-3">
								<a href="" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">
									Charlie Sparks
								</a>
								<p className="text-slate-400">CEO & Co-Founder</p>
							</div>
						</div>
					</div>

					<div className="md:col-span-6">
						<div className="group text-center">
							<div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
								<Image src={require('../../resources/stephen.jpeg')} height={278} width={278} alt="Stephen Fischer" />
								<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
								<ul className="list-none absolute right-0 left-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
									<li className="inline mx-1">
										<Link href="https://www.linkedin.com/in/stephen-fischer-a94bb0b/">
											<a className="btn btn-icon btn-sm rounded-full border border-blue-600 bg-blue-600 hover:bg-blue-400 text-white transition-all duration-300 ease-in-out">
												<Icon size={16} className="mb-[2px]" icon={linkedin2} />
											</a>
										</Link>
									</li>
									<li className="inline mx-1">
										<Link href="">
											<a className="btn btn-icon btn-sm rounded-full border border-blue-600 bg-blue-600 hover:bg-blue-400 text-white transition-all duration-300 ease-in-out">
												<Icon size={16} icon={ic_email} />
											</a>
										</Link>
									</li>
									<li className="inline mx-1">
										<Link href="">
											<a className="btn btn-icon btn-sm rounded-full border border-blue-600 bg-blue-600 hover:bg-blue-400 text-white transition-all duration-300 ease-in-out">
												<Icon size={16} icon={ic_person} />
											</a>
										</Link>
									</li>
								</ul>
							</div>

							<div className="content mt-3">
								<a href="" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">
									Stephen Fischer
								</a>
								<p className="text-slate-400">Co-Founder and CTO</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhoWeAre