"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

type FormState = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormState]?: string;
};

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    licenseType: 'enterprise',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error on change
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          company: '',
          licenseType: 'enterprise',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Interested in selling your software licenses? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-10 shadow-glass"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="inline-block p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mb-4">
                  <FiSend className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-lg opacity-80 mb-6">Your message has been sent successfully. We'll be in touch soon!</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="!bg-indigo-600 !text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:!bg-indigo-700 transition duration-300 shadow-lg"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg glass border ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg glass border ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg glass border ${
                        errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="Acme Inc."
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="licenseType" className="block mb-2 text-sm font-medium">
                      License Type
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formState.licenseType}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg glass border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="enterprise">Enterprise</option>
                      <option value="professional">Professional</option>
                      <option value="educational">Educational</option>
                      <option value="personal">Personal</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full p-3 rounded-lg glass border ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Tell us more about the licenses you want to sell..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`!bg-indigo-600 !text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:!bg-indigo-700 transition duration-300 shadow-lg w-full flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;