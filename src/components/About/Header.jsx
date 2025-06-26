import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full relative h-full'>
         <div
        className="w-full pt-20 overflow-hidden  min-h-[30em] py-10 flex flex-col h-full items-center justify-center max-w-[120em] mx-auto text-white relative"
        style={{
            backgroundImage: ` url('compressed_images/about.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
        }}
    >
        <h1 className="extralarge w-full h-full flex items-center justify-center absolute bg-black/70 font-bold text-white text-center">About Us</h1>
        {/* <p className="mt-4 text-[#453c38]  medium text-center">
            <Link to="/">Home </Link> {'>'} About Us
        </p> */}
    </div>
    </div>
  )
}

export default Header