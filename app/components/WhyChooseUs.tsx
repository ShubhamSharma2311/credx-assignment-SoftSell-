"use client"
import { motion } from 'framer-motion';
import { FiShield, FiClock, FiTrendingUp, FiGlobe } from 'react-icons/fi';

const features = [
  {
    id: 1,
    title: "Secure Transactions",
    description: "Bank-level encryption and secure transfer protocols protect your data at every step.",
    icon: <FiShield className="w-6 h-6 text-primary-500" />,
  },
  {
    id: 2,
    title: "Speed & Efficiency",
    description: "Get quotes instantly and receive payment within 48 hours of acceptance.",
    icon: <FiClock className="w-6 h-6 text-primary-500" />,
  },
  {
    id: 3,
    title: "Competitive Pricing",
    description: "Our market analytics ensure you get the highest value for your licenses.",
    icon: <FiTrendingUp className="w-6 h-6 text-primary-500" />,
  },
  {
    id: 4,
    title: "Global Network",
    description: "Access buyers from around the world through our extensive marketplace.",
    icon: <FiGlobe className="w-6 h-6 text-primary-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 relative bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            SoftSell stands out from the competition with unmatched benefits for sellers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 h-full"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg glass mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;