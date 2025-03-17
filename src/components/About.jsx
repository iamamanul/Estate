import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='flex flex-col items-center justify-center container mx-auto px-14 pt-14 pb-4 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Us</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>10+</p>
                    <p>Years of Excellence</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>100+</p>
                    <p>Properties Sold or provided for rent</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>20</p>
                    <p>Mn. Sq. Ft. Delivered</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>25+</p>
                    <p>Employees over the city</p>
                </div>
            </div>
            <p className='my-10 max-w-lg leading-relaxed'>
                Welcome to our real estate agency, where we transform your property dreams into reality. As trusted property dealers, we specialize in both sales and rentals, offering a comprehensive range of properties to suit every lifestyle and investment goal. Our experienced team provides personalized guidance, ensuring you find the perfect property that matches your requirements and budget. Whether you're looking to buy your dream home or invest in rental properties, we're here to make your real estate journey smooth and successful.
            </p>
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://maps.app.goo.gl/WULBDMZLNCxjD7C39"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Visit Our Office
            </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default About
