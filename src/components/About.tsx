import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Languages, Code2, Database } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const iconVariants = {
    initial: { rotateY: 0 },
    hover: { 
      rotateY: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const skills = [
    { icon: <Palette className="w-6 h-6" />, title: 'Graphic Design', description: 'Photoshop, Adobe Illustrator etc' },
    { icon: <Languages className="w-6 h-6" />, title: 'Documents Translation', description: 'Multiple languages' },
    { icon: <Code2 className="w-6 h-6" />, title: 'Development', description: 'HTML, CSS, Python intern' },
    { icon: <Database className="w-6 h-6" />, title: 'Data Automation', description: 'Big Data, Google Sheets, Task Automation' }
  ];

  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate professional with expertise in graphic design and translation services.
              I specialize in creating beautiful visual content, providing accurate translations,
              and implementing efficient data automation solutions for businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-700 p-6 rounded-lg text-center transform-gpu"
              >
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="inline-block p-3 bg-blue-500 rounded-lg text-white mb-4 cursor-pointer transform-gpu perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;