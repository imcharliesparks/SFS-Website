import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ApplyHeader = () => {
  return (
    <div className="w-[100%] max-h-[150px] flex justify-center pt-4">
        <Link href="/">
          <Image height={'100px'} className="max-w-[400px] min-w-[400px] max-h-[200px] min-h-[200px] cursor-pointer" priority={true} src={require('../../../resources/sfs-logo.svg')} alt="The Sparks Full-Stack Logo" />
        </Link>
    </div>
  )
}

export default ApplyHeader