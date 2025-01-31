import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Mail, ChevronDown, MessageCircle, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  const colors = ['#60A5FA', '#818CF8', '#A78BFA', '#C084FC', '#E879F9', '#F472B6'];
  
  const FloatingLetter = ({ children }: { children: string }) => (
    <motion.span
      animate={{
        y: [-2, 2, -2],
        rotate: [-3, 3, -3],
        color: colors,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        color: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );

  return (
    <div className="h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Glow effect container */}
          <div className="absolute inset-0 rounded-full animate-glow">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-50 animate-pulse blur-xl" />
          </div>
          
          {/* Sparkles */}
          <div className="absolute inset-0 animate-sparkle">
            <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full" />
            <div className="absolute top-1/4 right-0 w-1 h-1 bg-white rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-white rounded-full" />
            <div className="absolute bottom-1/4 left-0 w-1 h-1 bg-white rounded-full" />
          </div>
          
          {/* Profile image */}
          <div className="w-48 h-48 rounded-full overflow-hidden relative z-10 ring-4 ring-blue-500/50 shadow-lg shadow-blue-500/20">
            <img
              src="https://drive.google.com/file/d/1tIotU5xoJ6gfO8sMP64z0Ua6KQstPfMO/view?usp=drive_link"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="relative">
            <h1 className="text-6xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Muhammad Amjad
              </span>
            </h1>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 opacity-50"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            Tech Savvy VA and <FloatingLetter>G</FloatingLetter>raphic <FloatingLetter>D</FloatingLetter>esigner
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/+923016415706"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-whatsapp transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 backdrop-blur-sm"
            >
              <MessageCircle size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://facebook.com/amjadali21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-facebook transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 backdrop-blur-sm"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/muhammad-amjid-552ba3230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-linkedin transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 backdrop-blur-sm"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/amjadali.21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-instagram transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 backdrop-blur-sm"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:myaries21@gmail.com"
              className="text-gray-300 hover:text-gmail transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 backdrop-blur-sm"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8"
      >
        <ChevronDown className="text-gray-400" size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
