import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Html,CSS,JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 93 },
        { name: 'React', level: 80 },
        { name: 'Material UI', level: 75 },
        { name: 'Framer Motion', level: 79 },
        { name: 'Wordpress & Shopify', level: 92 },
        { name: 'Netlify', level: 92 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 68 },
        { name: 'Express', level: 60 },
        { name: 'JWT', level: 67 },
        { name: 'MySQL', level: 81 },
        { name: 'MongoDB', level: 69 },
        { name: 'Vercel', level:   70 },
        { name: 'Bubble.io', level:   76 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Team Collaboration', level: 99 },
        { name: 'Office 365', level: 96 },
        { name: 'Project Management', level: 95 },
        { name: 'GitHub', level: 90 },
        { name: 'Figma', level: 87 },
        { name: 'Versel', level: 64 },
        { name: 'Docker & Kubernetes', level: 34 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50 relative overflow-hidden">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 left-32 w-52 h-52 bg-emerald-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-40 w-44 h-44 bg-green-300/15 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 70, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I work with a variety of technologies and tools to build modern, 
            scalable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200/50"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technology evolves rapidly, and I am committed to continuous learning. 
              I regularly explore new frameworks, tools, and best practices to stay 
              current with industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;