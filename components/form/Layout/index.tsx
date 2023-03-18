import React from 'react'
// import ApplyFooter from './ApplyFooter'
import ApplyHeader from './ApplyHeader'

type Props = {
	children: React.ReactNode
}

const ApplyLayout = ({ children }: Props) => (
	<>
		<ApplyHeader />
		<main className="h-[70vh]">{children}</main>
		{/* <ApplyFooter /> */}
	</>
)

export default ApplyLayout
