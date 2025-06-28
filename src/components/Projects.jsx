import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
   {
      id: 1,
      title: 'Bachat',
      description: 'Bachat is a MERN stack (MongoDB, Express.js, React, Node.js) web application designed for comprehensive personal financial management. This locally hosted solution enables users to effectively track income, expenses, investments, and budgets through an intuitive dashboard interface.',
      image: 'Bachat.jpg',
      technologies: ['React.js', 'Chart.js', 'Vite', 'Node.js/Express','Redux','JWT', 'MongoDB' , 'Tailwind CSS'],
      liveUrl: 'https://github.com/qaisersofficial/Bachat',
      githubUrl: 'https://github.com/qaisersofficial/Bachat',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Vanilla JavaScript Weather App Using WeatherAPI is a sleek and responsive application designed to provide real-time weather updates and a 3-day forecast. Built using HTML, CSS, and JavaScript.',
      image: 'Weather-App.png',
      technologies: ['HTML', 'CSS', 'Vanilla JS', 'LocalStorage' , 'Netlify'],
      liveUrl: 'https://weather-app-qasier.netlify.app/',
      githubUrl: 'https://github.com/qaisersofficial/JavaScript-Weather-App-Using-WeatherAPI',
    },
     {
      id: 3,
      title: 'Clone Figma to Code',
      description: 'A web project built using HTML and CSS as part of my internship at JagoBD IT Solutions. This project focuses on creating a clean and well structured design while following best practices for HTML structure and CSS styling.',
      image: 'miro-design-cloned-by-qaiser.netlify.app_.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'TailwindCSS'],
      liveUrl: 'https://miro-design-cloned-by-qaiser.netlify.app/',
      githubUrl: 'https://github.com/qaisersofficial/Miro-Project-by-JAGOBD',
    },
    
     {
      id: 4,
      title: 'Portfolio Website',
      description: 'I designed and developed my personal portfolio using React and Vite to showcase my skills, projects, and experience. A modern, responsive portfolio website with smooth animations, contact form, and CMS integration.',
      image: 'Portfolio.png',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS','Emailjs', 'GitHub Pages', 'Vite'],
      liveUrl: 'https://qaisersofficial.github.io/profile/',
      githubUrl: 'https://qaiser-portfolio.netlify.app/',
    },

    {
      id: 5,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce website built with Express.js, MongoDB, and EJS for backend learning practice. The project includes user authentication, cart functionality, and admin product management.',
      image: 'E-Commerce.png',
      technologies: ['ejs', 'Node.js', 'express', 'mongodb'],
      liveUrl: 'https://furniro-cloned-project-qaiser.netlify.app/',
      githubUrl: 'https://github.com/qaisersofficial/E-Ecommerce-website-a-backend-project',
    },
    
    {
      id: 6,
      title: 'Tik Tac Toe Game',
      description: 'I developed a fully functional Tic-Tac-Toe game using React, showcasing my skills in modern front-end development. The game includes features like dynamic state management, interactive UI updates, and clear winner detection logic.',
      image: 'Tik-Tac-Toe-Game.jpg',
      technologies: ['React', 'Local Storage', 'Redux', 'Framer Motion'],
      liveUrl: 'https://qaiser-tic-tac-toe.netlify.app/',
      githubUrl: 'https://github.com/qaisersofficial/REACT-Journey/tree/Master/TIC%20TAK%20TOE%20GAME',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-green-50/40 to-emerald-50/60 relative overflow-hidden">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-32 w-48 h-48 bg-green-400/20 rounded-full blur-2xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-64 h-64 bg-emerald-300/15 rounded-full blur-3xl"
          animate={{
            x: [0, 90, 0],
            y: [0, -30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-36 h-36 bg-green-500/10 rounded-full blur-xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 11,
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience 
            in building modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-green-200/50"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Globe size={20} className="text-green-700" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} className="text-gray-700" />
                  </motion.a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-green-600 hover:text-green-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;