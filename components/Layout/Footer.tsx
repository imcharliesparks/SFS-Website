import Image from 'next/image'
import React from 'react'
import Icon from 'react-icons-kit'
import { ic_email } from 'react-icons-kit/md/ic_email'
import { linkedin2 } from 'react-icons-kit/icomoon/linkedin2'
import { instagram } from 'react-icons-kit/icomoon/instagram'
// import { facebook2 } from 'react-icons-kit/icomoon/facebook2'

// TODO: Rethink background color for the footer here
// TODO: Update links here once IG, FB, and email are set up
const Footer = () => {
	return (
		<footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
			<div className="container">
				<div className="grid grid-cols-12">
					<div className="col-span-12">
						<div className="pt-8 pb-2 px-0">
							<div className="grid grid-cols-1">
								<div className="text-center">
									<Image
										src={require('../../resources/sfs-icon.svg')}
										height={'100px'}
										width={'100px'}
										className="block mx-auto"
										alt="The Sparks Full-Stack Logo"
									/>
								</div>

								<ul className="list-none text-center mt-9">
									<li className="inline mr-2">
										<a
											href="https://www.linkedin.com/company/89719355/admin/"
											target="_blank"
											rel="noopener noreferrer"
											className="btn btn-icon btn-sm border border-blue-600 rounded-md hover:border-blue-600 dark:hover:border-blue-600 hover:bg-blue-600 dark:hover:bg-blue-600"
										>
											<Icon icon={linkedin2} className="align-middle" title="LinkedIn" />
										</a>
									</li>
									<li className="inline mr-2">
										<a
											href="https://www.instagram.com/sparksfullstack/"
											target="_blank"
											rel="noopener noreferrer"
											className="btn btn-icon btn-sm border border-blue-600 rounded-md hover:border-blue-600 dark:hover:border-blue-600 hover:bg-blue-600 dark:hover:bg-blue-600"
										>
											<Icon icon={instagram} className="align-middle" title="Instagram" />
										</a>
									</li>
									{/* TODO: Reinstate whenever the hell we figure out FB business */}
									{/* <li className="inline mr-2">
										<a
											href="https://www.linkedin.com/company/89719355/admin/"
											target="_blank"
											rel="noopener noreferrer"
											className="btn btn-icon btn-sm border border-blue-600 rounded-md hover:border-blue-600 dark:hover:border-blue-600 hover:bg-blue-600 dark:hover:bg-blue-600"
										>
											<Icon icon={facebook2} className="align-middle" title="Facebook" />
										</a>
									</li> */}
									<li className="inline mr-2">
										<a
											href="mailto:charlie@sparksfullstack.io"
											className="btn btn-icon btn-sm border border-blue-600 rounded-md hover:border-blue-600 dark:hover:border-blue-600 hover:bg-blue-600 dark:hover:bg-blue-600"
										>
											<Icon icon={ic_email} className="align-middle" title="Email" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-[30px] px-0 border-t border-slate-800">
				<div className="container text-center">
					<div className="grid md:grid-cols-1">
						<p className="mb-0 uppercase font-light text-slate-400">©2023 Sparks Full-Stack, LLC</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
