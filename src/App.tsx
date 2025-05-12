import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900">
      <Header />
      <Hero />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;