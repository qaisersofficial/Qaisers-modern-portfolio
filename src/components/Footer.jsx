import { MapPin, Github, Linkedin, Facebook, Instagram, Heart, Bird, LandPlot, Projector, Brain, UserSearch  } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/qaisersofficial', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/qaisersofficial', icon: Linkedin },
    { name: 'Facebook', href: 'https://www.facebook.com/qaisers.official', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/qaisers.official', icon: Instagram },
  ];

  const hobbies = [
    { name: 'Feeding birds and ants', icon: Bird },
    { name: 'Tug of War', icon: LandPlot },
    { name: 'Netflix', icon: Projector },
    { name: 'Travel', icon: Heart },
    { name: 'Exploring LLMs Agents', icon: Brain },
    { name: 'Research on ants', icon: UserSearch },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-20 w-40 h-40 bg-emerald-400/15 rounded-full blur-2xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-28 h-28 bg-green-300/25 rounded-full blur-xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location & Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="text-green-400" size={20} />
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-gray-300">50200 Gujrat, Pakistan</p>
            <div className="w-full h-40 bg-gray-700/50 backdrop-blur-sm rounded-lg overflow-hidden border border-green-500/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.1000000000004!2d74.10030282978406!3d32.57301763507062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDM0JzIyLjkiTiA3NMKwMDYnMDEuMSJF!5e0!3m2!1sen!2s!4v1681234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 backdrop-blur-sm rounded-full hover:bg-green-600/50 transition-all duration-200 group border border-green-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                  </motion.a>
                );
              })}
            </div>
            <div className="pt-4">
              <p className="text-gray-300 text-sm ">
                Building digital experiences that inspire and connect people
              </p>
            </div>
          </motion.div>

          {/* Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Hobbies & Interests</h3>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map((hobby) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={hobby.name}
                    className="flex items-center space-x-2 p-2 bg-gray-700/50 backdrop-blur-sm rounded-lg hover:bg-green-600/30 transition-colors duration-200 border border-green-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Icon size={16} className="text-green-400" />
                    <span className="text-sm">{hobby.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-500/20 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 <a href="mailto:qaisers.official@gmail.com">Qaiser Ali</a> created using React, vite, Tailwind CSS, FramerMotion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;