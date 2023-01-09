import React from 'react'

const Contact = () => {
	return (
		<section className="bg-gray-50 py-12">
			<div className="container">
				<div className="flex flex-col container">
					<div className="relative text-center mb-12">
						<h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Ready to hear more?</h3>
						<p className="text-slate-400 -translate-y-[12px]">Apply as a client or request info. We&apos;ll be in touch!</p>

						<div className="flex flex-row w-full items-center justify-center">
							<button
								type="submit"
								className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md w-[256px]"
								value="Apply"
							>
								Apply to Work with Us
							</button>
						</div>
					</div>

					<div className="p-6 ltr:lg:ml-16 rtl:lg:mr-16 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 container">
						<h3 className="mb-2 text-2xl leading-normal font-semibold text-center">Request More Info</h3>
						<form action="auth-signup-success.html" className="ltr:text-left rtl:text-right mt-6">
							<div className="grid grid-cols-1">
								<div className="mb-4">
									<label className="font-semibold" htmlFor="InfoName">
										Your Name:
									</label>
									<input id="InfoName" type="text" className="form-input mt-3" placeholder="John Smith" required />
								</div>

								<div className="mb-4">
									<label className="font-semibold" htmlFor="InfoEmail">
										Email Address:
									</label>
									<input id="InfoEmail" type="email" className="form-input mt-3" placeholder="name@example.com" required />
								</div>

								<div className="mb-4">
									<label className="font-semibold" htmlFor="InfoPassword">
										Business Name (optional):
									</label>
									<input id="InfoPassword" type="password" className="form-input mt-3" placeholder="Sparks Full-Stack" />
								</div>

								<div className="mb-4">
									<label className="font-semibold" htmlFor="InfoPhone">
										Phone Number (optional):
									</label>
									<input id="InfoPhone" type="tel" className="form-input mt-3" placeholder="(111) 111-1111" />
								</div>

								<div className="mb-4">
									<label className="font-semibold" htmlFor="InfoMessage">
										Message (optional):
									</label>
									<textarea
										// style={{ height: '8rem' }}
										id="InfoMessage"
										className="form-input mt-3 h-[8rem]"
										placeholder="Can't wait for you to build my super awesome app!"
										rows={4}
										cols={50}
									/>
								</div>

								<div className="mb-4 flex flex-row justify-center mt-2">
									<input
										type="submit"
										className="cursor-pointer btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md w-[256px]"
										value="Request More Info"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
