import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NotFound = () => {
	return (
		<section className="relative table w-full h-screen bg-gray-50">
			<div className="absolute inset-0 bg-white dark:bg-slate-900 md:pb-24 pb-16">
				<div className="container">
					<div className="flex flex-col items-center justify-center h-screen text-center">
						<h1 className="text-7xl font-bold text-blue-600 mb-6">404</h1>
						<h6 className="text-3xl font-semibold mb-4 text-slate-800">Page Not Found</h6>
						<p className="text-slate-400 max-w-xl mx-auto mb-8">
							The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
						</p>
						<Link href="/">
							<a className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md w-[200px] pt-[0.75rem]">
								Return Home
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default NotFound
