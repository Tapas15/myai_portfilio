import React from 'react';
import { motion } from 'motion/react';
import profileImage from '../assets/9ad67b5a895bb29b8fdb14d1a81eec90cd1d8060.png';

export function About() {

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
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
            
            <p className="text-gray-300 text-lg leading-relaxed text-justify mb-4">
              AI Engineer | QA Automation Engineer | Agentic AI, Generative AI & LLM Applications | Python & Automation | FinTech AI Solutions | Transitioning to Full-Stack AI Product Development
            </p>

            <p className="text-gray-300 text-lg leading-relaxed text-justify mb-4">
              I design and deploy scalable AI systems focused on real-world applications and production readiness. My work centers around building intelligent, agent-driven systems and LLM-powered solutions that integrate seamlessly into modern business workflows.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed text-justify mb-4">
              I actively explore and leverage cutting-edge technologies like Claude and other advanced AI models to accelerate development, improve efficiency, and build next-generation AI products.
            </p>

            <div className="mb-4">
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                <strong>Core Focus:</strong><br />
                ML Architecture • System Design • Production AI • Agentic AI • Generative AI
              </p>
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
