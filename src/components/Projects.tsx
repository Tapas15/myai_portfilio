import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Rocket, Newspaper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { projects } from '../data/projects';

export function Projects() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Recent Activity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.a
            href="https://www.linkedin.com/in/tapas-k-897237b1/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-teal-600 to-cyan-600 p-1 block"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 via-teal-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-[22px] p-8 lg:p-10 border border-white/10">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left - Icon & Badge */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-2xl">
                    <Newspaper size={48} className="text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-2 border border-green-400/30">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Live Updates
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-green-400 transition-colors">
                      Regular News & Post Updates
                    </h3>
                  </div>
                </div>
                
                {/* Right - Description & Tags */}
                <div className="text-left">
                  <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    Stay updated with my latest posts, articles, and professional updates. I regularly share insights on AI, machine learning, and technology trends.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['AI Insights', 'Tech Trends', 'Project Updates', 'Industry News'].map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Hover Arrow */}
              <motion.div
                className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>
          </motion.a>
        </motion.div>

        {/* Explore Live Projects - Featured Card Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            onClick={() => window.open('https://www.linkedin.com/in/tapas-k-897237b1/details/featured/', '_blank')}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-[22px] p-8 lg:p-10 border border-white/10">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left - Icon & Badge */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl">
                    <Rocket size={48} className="text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-2 border border-blue-400/30">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      Live Demo
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      Explore Live Projects
                    </h3>
                  </div>
                </div>
                
                {/* Right - Description & Tech */}
                <div className="text-left">
                  <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    <strong>Live Projects</strong><br />
                    I continuously build and share live projects as part of my learning and development journey. You can check my work in the Featured section and Posts on my LinkedIn profile, where I regularly document real-time implementations, experiments, and progress.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Interactive Demos', 'Source Code', 'Performance Metrics', 'Case Studies'].map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Hover Arrow */}
              <motion.div
                className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Scalable AI systems delivering measurable business impact in production
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                        <ExternalLink size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                        <Github size={16} />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                {project.image && (
                  <div className="px-6 mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full rounded-lg object-cover h-48 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}