import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SFSHero = () => {
	return (
		<>
			<section className="relative table w-full py-36 lg:py-44">
				<div className="px-12">
					<div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px] text-center md:text-left">
						<div className="md:col-span-7">
							<div className="ltr:md:mr-6 rtl:md:ml-6">
								<h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">
									<span className="text-yellow-500">Spark</span> your business growth with world class software solutions.
								</h4>
								{/* <p className="text-slate-400 text-lg max-w-xl">We develop industry leading software that converts and performs.</p> */}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi corporis dignissimos est quas, animi ullam
								possimus delectus facere laudantium!
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

						<div className="md:col-span-5">
							<Image src={require('../../resources/hero-art.svg')} alt="Hero image with a rocket and a computer screen" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default SFSHero
