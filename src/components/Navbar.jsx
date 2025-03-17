import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import DarkModeToggle from './DarkModeToggle'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        };
    },[showMobileMenu])

    const handleHomeClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setShowMobileMenu(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
                <motion.img 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    src={assets.logo} 
                    alt="" 
                    className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'} ${
                        isScrolled ? 'brightness-100' : 'brightness-0 invert'
                    }`} 
                />
                <ul className='hidden md:flex gap-7'>
                    <motion.a 
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="#Header" 
                        onClick={handleHomeClick}
                        className={`cursor-pointer transition-colors duration-300 ${
                            isScrolled ? 'text-white' : 'text-white'
                        }`}
                    >
                        Home
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="#About" 
                        className={`cursor-pointer transition-colors duration-300 ${
                            isScrolled ? 'text-white' : 'text-white'
                        }`}
                    >
                        About
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="#Properties" 
                        className={`cursor-pointer transition-colors duration-300 ${
                            isScrolled ? 'text-white' : 'text-white'
                        }`}
                    >
                        Properties
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="#Testimonials" 
                        className={`cursor-pointer transition-colors duration-300 ${
                            isScrolled ? 'text-white' : 'text-white'
                        }`}
                    >
                        Testimonials
                    </motion.a>
                </ul>
                <div className='hidden md:block'>
                    <DarkModeToggle />
                </div>
                <motion.img 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={()=> setShowMobileMenu(true)} 
                    src={assets.menu_icon} 
                    className={`md:hidden w-7 cursor-pointer transition-all duration-300 ${
                        isScrolled ? 'invert' : 'invert'
                    }`} 
                    alt="" 
                />
            </div>
            {/* --------- mobile-menu------ */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-gray-900 transition-all duration-300 ease-in-out`}>
                <div className='flex justify-between items-center p-6'>
                    <div className='flex items-center'>
                        <img src={assets.logo} alt="logo" className='w-10 h-10 md:w-12 md:h-12' />
                        <span className='text-xl md:text-2xl font-bold text-white md:text-gray-800 dark:text-white'>Real Estate</span>
                    </div>
                    <div className='cursor-pointer'>
                        <motion.img 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={()=> setShowMobileMenu(false)} 
                            src={assets.cross_icon} 
                            className='w-6 invert' 
                            alt="" 
                        />
                    </div>
                </div>
                <div className='flex justify-center mb-6'>
                    <DarkModeToggle />
                </div>
                <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium text-white'>
                    <motion.a 
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleHomeClick}
                        href="#Header" 
                        className='w-full text-center py-3 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300'
                    >
                        Home
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={()=> setShowMobileMenu(false)} 
                        href="#About" 
                        className='w-full text-center py-3 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300'
                    >
                        About
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={()=> setShowMobileMenu(false)} 
                        href="#Properties" 
                        className='w-full text-center py-3 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300'
                    >
                        Properties
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={()=> setShowMobileMenu(false)} 
                        href="#Testimonials" 
                        className='w-full text-center py-3 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300'
                    >
                        Testimonials
                    </motion.a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
