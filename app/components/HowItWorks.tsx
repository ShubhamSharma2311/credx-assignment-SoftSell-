"use client"
import { motion } from 'framer-motion';
import { FiUpload, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const steps = [
  {
    id: 1,
    title: "Upload License",
    description: "Submit your unused software license details through our secure portal.",
    icon: <FiUpload className="w-8 h-8 text-primary-500" />,
  },
  {
    id: 2,
    title: "Get Valuation",
    description: "Receive a fair market valuation based on our proprietary pricing algorithm.",
    icon: <FiDollarSign className="w-8 h-8 text-primary-500" />,
  },
  {
    id: 3,
    title: "Get Paid",
    description: "Accept the offer and receive payment through your preferred method within 48 hours.",
    icon: <FiCheckCircle className="w-8 h-8 text-primary-500" />,
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Our streamlined 3-step process makes selling your software licenses quick and easy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="glass rounded-xl p-8 text-center relative overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex justify-center mb-6"
              >
                <div className="p-4 rounded-full glass inline-flex">
                  {step.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="opacity-80">{step.description}</p>
              {/* Number indicator */}
              <div className="absolute -right-6 -bottom-6 text-9xl font-bold opacity-10">
                {step.id}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 