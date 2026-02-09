import React from 'react';
import { motion } from 'motion/react';
import { Code, Coffee, Heart, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import profileImage from 'figma:asset/9ad67b5a895bb29b8fdb14d1a81eec90cd1d8060.png';

export function About() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Explore Live Projects Button - Top of About Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.button
            onClick={() => navigate('/live-projects')}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg shadow-purple-500/30 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <Rocket size={20} />
              Explore Live Projects
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Tapas Kumar" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Architecting Intelligent Systems That Scale
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              I architect and deploy scalable AI systems that drive measurable business impact across finance and enterprise domains. I specialize in building LLM-powered intelligent document processing, computer vision pipelines, and end-to-end machine learning infrastructure tailored for real-world business workflows.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              I design agentic AI solutions for financial institutions and enterprise organizations, enabling automation in areas such as loan processing, risk analysis, fraud detection, data extraction, and decision intelligence. Beyond finance, I develop AI systems for day-to-day business operations, including process automation, analytics, customer intelligence, and operational optimization.
            </p>

            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Code className="text-blue-400" size={20} />
                <span>ML Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="text-purple-400" size={20} />
                <span>System Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-pink-400" size={20} />
                <span>Production AI</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic">
                "Engineering intelligent systems where AI meets production reality—delivering impact at scale."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
