import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10' >
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <p className=' text-xl font-extrabold text-white'>Hello there</p>
        <p className='text-xl font-extrabold text-white'> Sign in</p>
        </nav>
    </header>
  )
}

export default Navbar