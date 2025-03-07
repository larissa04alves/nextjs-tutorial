import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='text-7xl'>
      <h1 className='text-5xl mb-8 font-bold'>Next.js Tutorial</h1>
      <Link href='/client' className='btn btn-primary'>Get Started</Link>
    </div>
  )
}

export default HomePage 