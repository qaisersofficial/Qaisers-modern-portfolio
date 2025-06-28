import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceId = 'service_evv2g6q';  
    const templateId = 'template_gy8l5yq';
    const publicKey = 'u65EGTzMbC5Iz9DbO';  
  
    try {
     
      if (!window.emailjs) {
        console.error("Email.js library not founded. ");
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const response = await window.emailjs.sendForm(serviceId, templateId, e.target, publicKey);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Email.js Error:', response.text || 'Unknown error from Email.js');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'qaisers.official@gmail.com',
      href: 'mailto:qaisers.official@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 318 7159007',
      href: 'tel:+923187159007',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gujrat, Pakistan',
      href: '#',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-green-50/50 to-emerald-50/70 relative overflow-hidden font-inter">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-20 w-56 h-56 bg-green-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 70, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-32 w-48 h-48 bg-emerald-300/15 rounded-full blur-2xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-500/25 rounded-full blur-xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have an idea in mind or want to collaborate? I would love to hear from you.
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      className="flex items-center space-x-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Icon size={24} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-gray-900 hover:text-green-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-xl p-6 border border-green-200/50">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Let's Build Something Amazing Together
              </h4>
              <p className="text-gray-600">
                Whether you have a project in mind, need consultation, or just want to say hello,
                I'm always excited to connect with fellow developers, designers, and entrepreneurs.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-green-200/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition-all duration-200"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={20} />
                  <span>Failed to send message. Please try again or email me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
