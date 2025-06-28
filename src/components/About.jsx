import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {

const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  
  return age;
};
    const age = calculateAge('2001-03-12');

  const skills = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Build web applications with modern technologies like React, Nodejs, JavaScript & for them who need no-code fullstack web application, i then use bubble.io',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'This is only for my practice to get familiar wih new ideas and free-time activity for creating intuitive user interfaces that enhance user experience.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, scalability, and best user experience.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively in teams using agile methodologies and modern tools.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 relative overflow-hidden">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-16 w-40 h-40 bg-green-300/20 rounded-full blur-2xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-56 h-56 bg-emerald-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 16,
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I am a {age}-year old man with a bachelor degree in computer sciences, <a className='underline' target='_blank' href="https://www.coursera.org/account/accomplishments/verify/DFV6KGN6AB6D">Full Stack Developer</a>  who fully focused on Frontend(React.js) & UI/UX Designer interested about creating,
            updating, managing and cloning beautiful functional digital experiences that make lives of people easier. 
            With experience in both frontend and backend development, I enjoy turning complex problems 
            into simple, understandable, and unreflectin solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl border border-green-200/50"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="p-3 bg-green-100 rounded-lg"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon size={24} className="text-green-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-200/50 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h3>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new opportunities, interesting projects, or just chatting about tech. You might wonder why I chose <a target='_blank' href="https://www.coursera.org/account/accomplishments/verify/FG5DMK2WCVZ9" className='underline'>frontend development</a>? it's because i am confident about creating px perfect
            designs that meet requirements and yes! got the second reason by clicking on the link. I also enjoy documenting projects (yes, really!) and learning new skills. I've completed courses in <a target='_blank' href="https://www.coursera.org/account/accomplishments/specialization/L13019C7A63O" className='underline'>Office 365</a>, <a target='_blank' href="https://www.coursera.org/account/accomplishments/specialization/V77GLS2ND74E" className='underline'>Intermediate Grammar</a> , and <a target='_blank' href="https://www.coursera.org/account/accomplishments/specialization/certificate/97YWJ91T6210" className='underline'>Microsoft Program Management</a> 
            <span> to strengthen both my technical and professional abilities.</span>
          </p>
          <motion.button 
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'mailto:qaisers.official@gmail.com'}
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;