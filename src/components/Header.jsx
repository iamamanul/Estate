import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918595465329', '_blank');
  };

  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
      <Navbar/>
      <motion.div 
        initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white mt-20'
      >
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold'>Explore homes that fit your dreams</h2>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-16'>
          <a href="#Contact" className='w-full sm:w-auto border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-center'>Contact Us</a>
          <button 
            onClick={handleWhatsAppClick}
            className='w-full sm:w-auto bg-[#25D366] px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105'
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
            WhatsApp Us
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
