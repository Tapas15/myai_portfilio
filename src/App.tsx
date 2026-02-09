import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { NeuralBackground } from './components/NeuralBackground';
import { LiveProjectsPage } from './pages/LiveProjectsPage';

export default function App() {
  return (
    <div 
      className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden"
    >
      <NeuralBackground />
      
      <Routes>
        <Route path="/" element={
          <>
            <div className="relative z-10">
              <Hero />
              <About />
              <Projects />
              <Experience />
              <TechStack />
              <Contact />
            </div>
          </>
        } />
        <Route path="/live-projects" element={<LiveProjectsPage />} />
      </Routes>
    </div>
  );
}