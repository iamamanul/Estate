import React, { useEffect, useState, useRef } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion';

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLaptop, setIsLaptop] = useState(false);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const updateView = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };

    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const handleTouchStart = (e) => {
    if (!isLaptop) {
      const touch = e.touches[0];
      containerRef.current = { x: touch.clientX };
    }
  };

  const handleTouchMove = (e) => {
    if (!isLaptop && containerRef.current) {
      const touch = e.touches[0];
      const diff = containerRef.current.x - touch.clientX;

      if (diff > 50 && currentIndex < projectsData.length - 1) {
        setDirection(1);
        setCurrentIndex(prev => prev + 1);
        containerRef.current = null;
      } else if (diff < -50 && currentIndex > 0) {
        setDirection(-1);
        setCurrentIndex(prev => prev - 1);
        containerRef.current = null;
      }
    }
  };

  const nextProperty = () => {
    if (!isLaptop && currentIndex < projectsData.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevProperty = () => {
    if (!isLaptop && currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const renderPropertyCard = (property) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className='bg-white dark:bg-gray-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden h-full group'
    >
      <div className='relative aspect-[4/3] w-full overflow-hidden'>
        <motion.img 
          src={property.image} 
          alt={property.title}
          className='w-full h-full object-cover transition-transform duration-700 ease-out'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:from-black/80 transition-all duration-300'></div>
        <motion.div 
          className='absolute bottom-4 left-0 right-0 px-6 text-white space-y-1'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='text-xl font-semibold transform group-hover:translate-y-[-2px] transition-transform duration-300'>{property.title}</h3>
          <p className='text-sm opacity-90 transform group-hover:translate-y-[-2px] transition-transform duration-300'>{property.location}</p>
          <p className='text-lg font-bold transform group-hover:translate-y-[-2px] transition-transform duration-300'>{property.price}</p>
        </motion.div>
      </div>
      <motion.div 
        className='p-6'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className='grid grid-cols-3 gap-4 text-center'>
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <p className='text-sm text-gray-600 dark:text-gray-400'>Beds</p>
            <p className='font-semibold'>{property.beds}</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <p className='text-sm text-gray-600 dark:text-gray-400'>Baths</p>
            <p className='font-semibold'>{property.baths}</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <p className='text-sm text-gray-600 dark:text-gray-400'>Sqft</p>
            <p className='font-semibold'>{property.sqft}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div 
      initial={{opacity: 0, y: 50}}
      transition={{duration: 0.5}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      className='container mx-auto py-4 pt-16 px-4 sm:px-6 md:px-8 lg:px-12 my-12 w-full overflow-hidden' 
      id='Properties'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Properties <span className="underline underline-offset-4 decoration-1 under font-light">Home Rentals</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Find your perfect home today!</p>

      {/* property slider container */}
      <div className='w-full relative max-w-[1400px] mx-auto px-4 sm:px-8'>
        <div 
          className='relative'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {!isLaptop ? (
            <AnimatePresence mode='wait' initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
                transition={{ duration: 0.3 }}
                className='w-full'
              >
                {renderPropertyCard(projectsData[currentIndex])}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className='relative py-8'>
              <div 
                ref={scrollContainerRef}
                className='flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar'
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  padding: '20px 0',
                  margin: '-20px 0'
                }}
              >
                {projectsData.map((property, index) => (
                  <div key={index} className='snap-start w-[350px] flex-shrink-0 first:ml-0'>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                      className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden h-full group cursor-pointer'
                      style={{
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <div className='relative aspect-[4/3] w-full overflow-hidden'>
                        <motion.img 
                          src={property.image} 
                          alt={property.title}
                          className='w-full h-full object-cover transform'
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.4 }}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                          <h3 className='text-xl font-semibold mb-1'>{property.title}</h3>
                          <p className='text-sm opacity-90 mb-1'>{property.location}</p>
                          <p className='text-lg font-bold'>{property.price}</p>
                        </div>
                      </div>
                      <div className='p-4'>
                        <div className='grid grid-cols-3 gap-2 text-center'>
                          {[
                            { label: 'Beds', value: property.beds },
                            { label: 'Baths', value: property.baths },
                            { label: 'Sqft', value: property.sqft }
                          ].map((item, i) => (
                            <div 
                              key={i}
                              className="py-2 px-2 rounded-lg group-hover:bg-gray-50 dark:group-hover:bg-gray-700/50 transition-colors duration-300"
                            >
                              <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>{item.label}</p>
                              <p className='font-semibold text-gray-900 dark:text-gray-100'>{item.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <motion.button 
                onClick={scrollPrev}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='absolute -left-14 top-[calc(33%+10px)] -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 z-10'
              >
                <img src={assets.left_arrow} alt="Previous" className="w-5 h-5" />
              </motion.button>
              <motion.button 
                onClick={scrollNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='absolute -right-14 top-[calc(33%+10px)] -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 z-10'
              >
                <img src={assets.right_arrow} alt="Next" className="w-5 h-5" />
              </motion.button>
            </div>
          )}
        </div>

        {/* Navigation Arrows - Only show on mobile */}
        {!isLaptop && (
          <>
            <button 
              onClick={prevProperty}
              className='absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-800 dark:text-white backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed z-10'
              disabled={currentIndex === 0}
            >
              <img src={assets.left_arrow} alt="Previous" className="w-4 h-4" />
            </button>
            <button 
              onClick={nextProperty}
              className='absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-800 dark:text-white backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed z-10'
              disabled={currentIndex >= projectsData.length - 1}
            >
              <img src={assets.right_arrow} alt="Next" className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </motion.div>
  )
}

export default Properties 