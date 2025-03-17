import React from 'react'
import {assets} from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white py-16'>
            <div className='container mx-auto px-6 md:px-20 lg:px-32'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {/* Company Info */}
                    <div className='space-y-4'>
                        <img src={assets.logo} alt="" className='h-12 brightness-100' />
                        <p className='text-gray-400 leading-relaxed'>Your trusted partner in real estate investments. We help you find the perfect property that matches your lifestyle and investment goals.</p>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-semibold text-white'>Quick Links</h3>
                        <ul className='space-y-3'>
                            <li>
                                <motion.a 
                                    whileHover={{ x: 5 }}
                                    href="#Header" 
                                    className='text-gray-400 hover:text-white transition-colors flex items-center gap-2'
                                >
                                    <span className='w-1 h-1 bg-blue-500 rounded-full'></span>
                                    Home
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    whileHover={{ x: 5 }}
                                    href="#About" 
                                    className='text-gray-400 hover:text-white transition-colors flex items-center gap-2'
                                >
                                    <span className='w-1 h-1 bg-blue-500 rounded-full'></span>
                                    About
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    whileHover={{ x: 5 }}
                                    href="#Properties" 
                                    className='text-gray-400 hover:text-white transition-colors flex items-center gap-2'
                                >
                                    <span className='w-1 h-1 bg-blue-500 rounded-full'></span>
                                    Properties
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    whileHover={{ x: 5 }}
                                    href="#Testimonials" 
                                    className='text-gray-400 hover:text-white transition-colors flex items-center gap-2'
                                >
                                    <span className='w-1 h-1 bg-blue-500 rounded-full'></span>
                                    Testimonials
                                </motion.a>
                            </li>
                        </ul>
                    </div>

                    {/* Developer Info */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-semibold text-white'>Developer</h3>
                        <div className='space-y-6'>
                            <div className='space-y-2'>
                                <h4 className='font-medium text-white text-lg'>Amanul Hasan</h4>
                                <p className='text-gray-400'>Full Stack Developer</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <motion.a
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    href="https://github.com/iamamanul"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    <span>GitHub</span>
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    href="https://www.linkedin.com/in/amanul-hasan-9a204a2b5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    <span>LinkedIn</span>
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    href="mailto:amanulmat@gmail.com"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.773 2.686-4.475 5.198-3.258l4.797 2.599c.372.202.762.202 1.134 0l4.797-2.599c2.512-1.217 5.198.485 5.198 3.258z"/>
                                    </svg>
                                    <span>Email</span>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
                    <p>&copy; 2025 <b>Estate</b>. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
