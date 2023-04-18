import * as React from 'react'
import Link from 'next/link'
import { APIMethods, ContactFormInput } from '../../shared/types'
import LoadingSpinner from '../general/LoadingSpinner'

const Contact = () => {
	const [showLoadingSpinner, setShowLoadingSpinner] = React.useState<boolean>(false)
	const nameRef = React.useRef<HTMLInputElement>(null)
	const emailRef = React.useRef<HTMLInputElement>(null)
	const businessRef = React.useRef<HTMLInputElement>(null)
	const phoneRef = React.useRef<HTMLInputElement>(null)
	const messageRef = React.useRef<HTMLTextAreaElement>(null)
	const [error, setError] = React.useState<string | null>(null)
	const [success, setSuccess] = React.useState<string | null>(null)

	React.useEffect(() => {
		if (error) {
			setTimeout(() => {
				setError(null)
			}, 5000)
		}
	}, [error])

	React.useEffect(() => {
		if (success) {
			setTimeout(() => {
				setSuccess(null)
			}, 5000)
		}
	}, [success])
	
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!nameRef.current?.value || !emailRef.current?.value) {
			setError('Please fill out all required fields')
		}

		try {
			setShowLoadingSpinner(true)
			const contactFormInput: ContactFormInput = {
				name: nameRef.current!.value!,
				email: emailRef.current!.value!
			}
			if (businessRef.current?.value) {
				contactFormInput.companyName = businessRef.current.value
			}

			if (phoneRef.current?.value) {
				contactFormInput.phone = phoneRef.current.value
			}

			if (messageRef.current?.value) {
				contactFormInput.message = messageRef.current.value
			}

			const response = await fetch(`/api/contact`, {
				method: APIMethods.POST,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ contactFormInput })
			})
			await response.json()
			if (response.status === 201) {
				setSuccess(`Success! We'll be in touch soon!`)
				nameRef.current!.value = ''
				emailRef.current!.value = ''
				businessRef.current!.value = ''
				phoneRef.current!.value = ''
				messageRef.current!.value = ''
			} else {
				setError('There was an error submitting your info! Shoot us an email at charlie@sparksfullstack.io')
			}
		} catch (e) {
			console.error(e)
			setError(`There was an error submitting your info! Shoot us an email at charlie@sparksfullstack.io`)
		} finally {
			setShowLoadingSpinner(false)
		}
	}

	// TODO: Reinstate commented out code once client application form flow is done
	return (
		<section id="contact" className="bg-gray-50 py-12">
			<div className="container">
				<div className="flex flex-col container">
					{/* <div className="relative text-center mb-12"> */}
					<div className="relative text-center mb-6">
						<h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Ready to hear more?</h3>
						{/* <p className="text-slate-400 -translate-y-[12px]">Apply as a client or request info. We&apos;ll be in touch!</p> */}
						<p className="text-slate-400 -translate-y-[12px]">Enter your info below. We&apos;ll be in touch!</p>

						{/* <div className="flex flex-row w-full items-center justify-center">
							<Link href="/apply">
								<a className="btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md w-[256px]">
									Apply to Work with Us
								</a>
							</Link>
						</div> */}
					</div>

					<div className="p-6 ltr:lg:ml-16 rtl:lg:mr-16 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 container">
						<h3 className="mb-2 text-2xl leading-normal font-semibold text-center">Request More Info</h3>
						<form onSubmit={handleSubmit} className="ltr:text-left rtl:text-right mt-6">
							<div className="grid grid-cols-1">
								<div className="mb-4">
									<label className="font-semibold" htmlFor="InfoName">
										Your Name:
									</label>
									<input ref={nameRef} id="InfoName" type="text" className="form-input mt-3" placeholder="John Smith" required />
								</div>

								<div className="mb-4">
									<label className="font-semibold" htmlFor="InfoEmail">
										Email Address:
									</label>
									<input
										ref={emailRef}
										id="InfoEmail"
										type="email"
										className="form-input mt-3"
										placeholder="name@example.com"
										required
									/>
								</div>

								<div className="mb-4">
									<label className="font-semibold" htmlFor="InfoBusiness">
										Business Name (optional):
									</label>
									<input
										ref={businessRef}
										id="InfoBusiness"
										type="text"
										className="form-input mt-3"
										placeholder="Sparks Full-Stack"
									/>
								</div>

								<div className="mb-4">
									<label className="font-semibold" htmlFor="InfoPhone">
										Phone Number (optional):
									</label>
									<input ref={phoneRef} id="InfoPhone" type="tel" className="form-input mt-3" placeholder="(111) 111-1111" />
								</div>

								<div className="mb-4">
									<label className="font-semibold" htmlFor="InfoMessage">
										Message (optional):
									</label>
									<textarea
										ref={messageRef}
										id="InfoMessage"
										className="form-input mt-3 h-[8rem]"
										placeholder="Can't wait for you to build my super awesome app!"
										rows={4}
										cols={50}
									/>
								</div>

								<div className="mb-4 flex flex-row justify-center mt-2">
									<button
										type="submit"
										className={`cursor-pointer ${!showLoadingSpinner && 'p-3'} btn bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md w-[256px]`}
									>
										{ showLoadingSpinner 
											? (
												<div className="flex justify-center">
													<LoadingSpinner/>
													</div>
												) 
											: 'Request More Info' }
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="toast toast-center z-999">
				{ error && <div className="alert alert-error w-[300px]">
					<div>
						<span>{error}</span>
					</div>
				</div> }
				{ success && <div className="alert alert-success w-[300px]">
					<div>
						<span>{success}</span>
					</div>
				</div> }
			</div>
		</section>
	)
}

export default Contact
