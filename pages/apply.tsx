import React from 'react'
import Image from 'next/image'
import ApplyLayout from '../components/form/Layout'

const Apply = () => {
	return (
		<section className="md:pb-24 py-16 overflow-x-hidden xs:text-center md:text-left h-[100%] flex content-center">
			<div className="container flex flex-col justify-center">
				<Image priority={true} alt="Our stock image" width={'332px'} height={'309.95px'} src={require('../resources/test-image.svg')} />
				<div className="text-center my-10">
					<p className="text-3xl">Ready to bring your idea to life?</p>
				</div>
				<div className="flex justify-center">
					<button className={`cursor-pointer bg-blue-600 px-6 py-2.5 rounded-full text-white baseline hover:bg-blue-300 transition-colors text-center`}>
						Let&apos;s start!
					</button>
					<p className="mt-[9px] ml-[20px]">
						press
						<strong> Enter ↵</strong>
					</p>
				</div>
			</div>
		</section>
	)
}

Apply.getLayout = (page) => <ApplyLayout>{page}</ApplyLayout>

export default Apply
