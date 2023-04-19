import Link from 'next/link'
import * as React from 'react'
import Icon from 'react-icons-kit'
import { ic_arrow_upward } from 'react-icons-kit/md/ic_arrow_upward'

const BackToTop = () => {
	const topFunction = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	return (
		<Link href="#">
			<a
				href="#"
				onClick={topFunction}
				id="back-to-top"
				className="back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center hover:bg-blue-400 bg-blue-600 text-white leading-9 transition-colors ease-in-out"
			>
				<Icon id="back-to-top-icon" size={24} icon={ic_arrow_upward} />
			</a>
		</Link>
	)
}

export default BackToTop
