import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Languages, Code2, Database, FileText, Briefcase, Brain, Clock } from 'lucide-react';

const skillDetails = [
  {
    title: 'Graphic Design',
    description: 'Expert in Adobe Creative Suite with a focus on Photoshop and Illustrator. Creating stunning visuals, logos, and marketing materials.',
    icon: <Palette className="w-8 h-8" />,
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Logo Design', 'Brand Identity', 'Social Media Graphics']
  },
  {
    title: 'Translation Services',
    description: 'Professional translation services across multiple languages, ensuring accurate and culturally appropriate translations.',
    icon: <Languages className="w-8 h-8" />,
    skills: ['Multiple Languages', 'Document Translation', 'Content Localization', 'Technical Translation', 'Proofreading']
  },
  {
    title: 'Development',
    description: 'Growing expertise in web development technologies and Python programming.',
    icon: <Code2 className="w-8 h-8" />,
    skills: ['HTML', 'CSS', 'Python', 'Web Development', 'Basic Programming']
  },
  {
    title: 'Data Automation',
    description: 'Streamlining workflows and handling large datasets with automated solutions.',
    icon: <Database className="w-8 h-8" />,
    skills: ['Big Data Handling', 'Google Sheets', 'Task Automation', 'Data Analysis', 'Process Optimization']
  },
  {
    title: 'Documentation',
    description: 'Creating comprehensive documentation and managing content organization.',
    icon: <FileText className="w-8 h-8" />,
    skills: ['Technical Writing', 'Content Management', 'Documentation', 'Report Generation']
  },
  {
    title: 'Virtual Assistance',
    description: 'Providing professional VA services with focus on efficiency and organization.',
    icon: <Briefcase className="w-8 h-8" />,
    skills: ['Email Management', 'Calendar Organization', 'Task Management', 'Administrative Support']
  },
  {
    title: 'Problem Solving',
    description: 'Analytical approach to challenges with creative solution finding.',
    icon: <Brain className="w-8 h-8" />,
    skills: ['Critical Thinking', 'Creative Solutions', 'Process Improvement', 'Strategic Planning']
  },
  {
    title: 'Time Management',
    description: 'Excellent organizational skills with ability to handle multiple projects.',
    icon: <Clock className="w-8 h-8" />,
    skills: ['Project Planning', 'Deadline Management', 'Priority Setting', 'Efficient Workflows']
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const iconVariants = {
    initial: { 
      rotateY: 0,
      rotateX: 0,
      scale: 1
    },
    hover: { 
      rotateY: 360,
      rotateX: 360,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const cardVariants = {
    initial: { 
      rotateY: 0,
      z: 0
    },
    hover: { 
      rotateY: 10,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16 relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Professional Skills
          </span>
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillDetails.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 perspective-1000 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white cursor-pointer transform-gpu perspective-1000"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((subSkill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 bg-gray-700 text-sm text-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      {subSkill}
                    </motion.span>
                  ))}
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