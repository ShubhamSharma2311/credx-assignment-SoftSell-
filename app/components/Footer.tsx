"use client"
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative glass">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent mb-4">
                SoftSell
              </h3>
              <p className="opacity-70 max-w-md mb-6">
                SoftSell helps businesses reclaim value from their unused software 
                licenses through a secure and efficient marketplace.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-2 glass rounded-full"
                >
                  <FiTwitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-2 glass rounded-full"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-2 glass rounded-full"
                >
                  <FiFacebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-2 glass rounded-full"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="opacity-70 hover:opacity-100 hover:text-primary-500 transition-colors">How It Works</a></li>
              <li><a href="#why-choose-us" className="opacity-70 hover:opacity-100 hover:text-primary-500 transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="opacity-70 hover:opacity-100 hover:text-primary-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="opacity-70 hover:opacity-100 hover:text-primary-500 transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="opacity-70">Email: info@softsell.com</li>
              <li className="opacity-70">Phone: +1 (555) 123-4567</li>
              <li className="opacity-70">Address: 123 Tech Avenue, San Francisco, CA 94107</li>
            </ul>
          </motion.div>
        </div>
        
        <hr className="my-8 border-gray-200 dark:border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-60 text-sm">
            © {currentYear} SoftSell. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;