"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 glass' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
            SoftSell
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="hover:text-primary-500 transition-colors">How It Works</a>
          <a href="#why-choose-us" className="hover:text-primary-500 transition-colors">Why Choose Us</a>
          <a href="#testimonials" className="hover:text-primary-500 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a>
          
          <motion.button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {isDarkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-primary-600" />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <motion.button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 mr-2"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-primary-600" />}
          </motion.button>
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden glass p-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-4">
            <a href="#how-it-works" className="hover:text-primary-500 transition-colors" onClick={() => setIsOpen(false)}>How It Works</a>
            <a href="#why-choose-us" className="hover:text-primary-500 transition-colors" onClick={() => setIsOpen(false)}>Why Choose Us</a>
            <a href="#testimonials" className="hover:text-primary-500 transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#contact" className="hover:text-primary-500 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
