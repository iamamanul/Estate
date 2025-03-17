import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '8e41a02e-f1a9-432e-bd73-43b52782c53c', // Your Web3Forms access key
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: 'New Contact Form Submission'
                })
            })

            const result = await response.json()

            if (result.success) {
                toast.success('Message sent successfully!')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                })
            } else {
                throw new Error(result.message || 'Something went wrong!')
            }
        } catch (error) {
            console.error('Error:', error)
            toast.error(error.message || 'Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <motion.div 
            initial={{opacity: 0, y: 50}}
            transition={{duration: 0.5}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className='container mx-auto py-4 pt-24 px-6 md:px-20 lg:px-32 my-12 w-full overflow-hidden' 
            id="Contact"
        >
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>Us</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Get in touch with us for any inquiries about properties</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                {/* Contact Information */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='space-y-8'
                >
                    <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 border border-gray-100 dark:border-gray-700'>
                        <h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'>Let's Connect</h2>
                        <div className='space-y-4'>
                            <div className='flex items-start space-x-3'>
                                <div className='p-2 bg-blue-100 dark:bg-blue-900 rounded-lg'>
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-base font-medium text-gray-800 dark:text-white'>Phone</h3>
                                    <p className='text-sm text-gray-600 dark:text-gray-300'>+91 8595465329</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-3'>
                                <div className='p-2 bg-blue-100 dark:bg-blue-900 rounded-lg'>
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-base font-medium text-gray-800 dark:text-white'>Email</h3>
                                    <p className='text-sm text-gray-600 dark:text-gray-300'>amanulmat@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-3'>
                                <div className='p-2 bg-blue-100 dark:bg-blue-900 rounded-lg'>
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-base font-medium text-gray-800 dark:text-white'>Address</h3>
                                    <p className='text-sm text-gray-600 dark:text-gray-300'>Building Number 256, 6, near Pocket 10B, Jasola, Jasola Vihar, New Delhi, Delhi 110025</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 border border-gray-100 dark:border-gray-700'>
                        <h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'>Business Hours</h2>
                        <div className='space-y-3'>
                            <div className='flex justify-between items-center'>
                                <span className='text-sm text-gray-600 dark:text-gray-300'>Monday - Friday</span>
                                <span className='text-sm text-gray-800 dark:text-white font-medium'>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-sm text-gray-600 dark:text-gray-300'>Saturday</span>
                                <span className='text-sm text-gray-800 dark:text-white font-medium'>10:00 AM - 4:00 PM</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-sm text-gray-600 dark:text-gray-300'>Sunday</span>
                                <span className='text-sm text-gray-800 dark:text-white font-medium'>Closed</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 border border-gray-100 dark:border-gray-700'
                >
                    <h2 className='text-2xl font-semibold mb-6 text-gray-800 dark:text-white'>Send us a Message</h2>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 shadow-sm hover:shadow-md'
                                placeholder='John Doe'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 shadow-sm hover:shadow-md'
                                placeholder='john@example.com'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 shadow-sm hover:shadow-md'
                                placeholder='+1 (123) 456-7890'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className='w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 shadow-sm hover:shadow-md resize-none'
                                placeholder='Your message here...'
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-[0_4px_12px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_16px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact
