import React, { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Properties from './components/Properties'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  useEffect(() => {
    // Handle browser back/forward navigation
    const handlePopState = (event) => {
      // Scroll to top when navigating back
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Remove hash from URL on page load/refresh
    if (window.location.hash) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Scroll to top on page load and refresh
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Add event listener for popstate (back/forward navigation)
    window.addEventListener('popstate', handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="text-gray-900 dark:text-gray-100">
        <CustomCursor />
        <ToastContainer/>
        <Header />
        <About />
        <Properties />
        <Testimonails />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App

// 
