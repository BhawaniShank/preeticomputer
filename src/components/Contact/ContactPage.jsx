import React from 'react'
import { CgMail, CgPhone } from 'react-icons/cg'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Contactform from './Contactform'


function ContactPage() {
  return (
    <>
    <div className='w-full relative h-full'>
         <div
        className="w-full pt-20 overflow-hidden   min-h-[30em] py-10 flex flex-col h-full items-center justify-center max-w-[120em] mx-auto text-white relative"
        style={{
            backgroundImage: ` url('compressed_images/homepc.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            
        }}
    >
        <h1 className="extralarge w-full h-full -mt-10 flex items-center justify-center absolute bg-black/60 font-bold text-white text-center">Contact US</h1>
        {/* <p className="mt-4 text-[#453c38]  medium text-center">
            <Link to="/">Home </Link> {'>'} About Us
        </p> */}
    </div>
    </div>
    <main className='flex justify-center max-w-[90em] mx-auto px-4 flex-col lg:flex-row gap-5 xl:gap-20 bg-[#F7F7F7] items-center min-h-screen ' >
      <section className=' mt-10 lg:mt-0'>
       <h1 className='text-5xl'>Get in touch with us</h1>
       <p className='flex gap-2 ptext mt-12 items-center w-full'><CgMail className='text-5xl mb-3 text-[#1D85C3]'/> support@preeticomputers.com</p>
      
       <p className='flex gap-2 ptext items-center w-full'><CgPhone className='text-5xl mb-3 text-[#1D85C3]' /> +91 9829 179 799</p>
   
       <p className='flex gap-2 ptext max-w-xl items-center w-full'> <span><FaMapMarkerAlt className='text-5xl text-[#1D85C3]' /> </span>WP6G+2CW Dussehra Ground, Maharana Pratap Rd, Shree Ram Nagar - A, Sunder Nagar, Panchyawala, Jaipur, Rajasthan 302034, India</p>
       
      </section>
      <section className='md:w-[80%] mb-10 xl:w-auto'>
      <Contactform/>
    
      </section>
      
    </main>
  <iframe className='w-full max-w-[90em] mx-auto rounded-2xl mb-2 h-[20em]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1993440409055!2d75.8323544!3d26.8971679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6eafad0a40f%3A0xbbe787467603c06c!2sPreeti%20Computers%20Laptop%20Service%20Center!5e0!3m2!1sen!2sin!4v1749489145339!5m2!1sen!2sin"  style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </>

  )
}

export default ContactPage