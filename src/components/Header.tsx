import React from 'react';
import { Cloud, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-slate-900 text-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Cloud Engineer</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#certifications" className="hover:text-blue-400 transition">Certifications</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block hover:text-blue-400 transition">Home</a>
            <a href="#skills" className="block hover:text-blue-400 transition">Skills</a>
            <a href="#certifications" className="block hover:text-blue-400 transition">Certifications</a>
            <a href="#projects" className="block hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="block hover:text-blue-400 transition">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}