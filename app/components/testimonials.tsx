"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was incredibly smooth and secure.",
    name: "Shubham Sharma",
    role: "Student",
    company: "IIIT Ranchi",
    avatar: "/Shubham.jpeg",
  },
  {
    id: 2,
    quote: "As a growing startup, optimizing our software costs was crucial. SoftSell's platform made it easy to sell licenses we no longer needed.",
    name: "Michael Chen",
    role: "Operations Director",
    company: "Nexus Innovations",
    avatar: "/PHOTO.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Testimonials</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Hear what our satisfied customers have to say about their experience with SoftSell.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 md:p-10 shadow-glass"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden glass p-1">
                    <Image 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/150?text=" + testimonials[currentIndex].name.charAt(0);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <blockquote className="text-lg italic mb-4">&quot;{testimonials[currentIndex].quote}&quot;</blockquote>
                  <div>
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm opacity-70">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full glass"
            >
              <FiArrowLeft />
            </motion.button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
            
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full glass"
            >
              <FiArrowRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;