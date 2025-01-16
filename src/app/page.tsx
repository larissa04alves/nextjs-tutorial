import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='text-7xl'>
      <h1>Home Page</h1>
      <Link href='/about' className='text-2xl'>about page</Link>
    </div>
  )
}

export default HomePage 