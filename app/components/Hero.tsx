// src/components/Hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

// Dynamically import the Player component with ssr: false
const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 opacity-20 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-700 opacity-20 rounded-full filter blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Column */}
          <motion.div
            className="w-full md:w-1/2 lg:max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Unlock the Value of Your Unused Software Licenses
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-lg lg:text-xl opacity-80 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              SoftSell helps businesses monetize their unused software licenses quickly,
              securely, and at the best possible price.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="!bg-indigo-600 !text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:!bg-indigo-700 transition duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Lottie Animation Column */}
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-4 md:p-6 shadow-glass">
              <LottiePlayer
                autoplay
                loop
                src="/licence.json"
                style={{ width: "100%", height: "100%", minHeight: "250px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;