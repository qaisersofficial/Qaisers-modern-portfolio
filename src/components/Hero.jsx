import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();    

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Qaiser_Ali_CV _Accessible_Master.pdf';
    link.download = 'Qaiser_Ali_CV _Accessible_Master.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-green-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-48 h-48 bg-emerald-300/15 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-56 h-56 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-32 h-32 bg-emerald-400/25 rounded-full blur-xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div 
              className="w-64 h-64 mx-auto mb-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 20px 25px -5px rgba(34, 197, 94, 0.1), 0 10px 10px -5px rgba(34, 197, 94, 0.04)",
                  "0 25px 50px -12px rgba(34, 197, 94, 0.25), 0 25px 25px -5px rgba(34, 197, 94, 0.1)",
                  "0 20px 25px -5px rgba(34, 197, 94, 0.1), 0 10px 10px -5px rgba(34, 197, 94, 0.04)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <img src="/Profile-Image-BG-Blury-Green.png" className='w-64 h-64 rounded-full' alt="" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                <span className='text-gray-400'>Qai</span>
                <span className='text-gray-800'>ser</span>
                <span className='text-gray-700'> Ali!</span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Your Full Stack Developer to convert your idea into digital solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                  <motion.button 
                    className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                  >
                    <span>Get In Touch</span>
                    <ArrowRight size={20} />
                  </motion.button>

                  <motion.button 
                    className="flex items-center space-x-2 border-2 border-green-300 text-green-700 px-8 py-3 rounded-lg hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownloadCV}
                  >
                    <Download size={20} />
                    <span>Download Resume</span>
                  </motion.button>
                </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/qaisersofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-green-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} className="text-gray-700" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/qaisersofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-green-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} className="text-[#0A66C2]" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;