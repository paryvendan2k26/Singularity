import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navSections = [
    { name: 'Home', path: '#home', id: 'home' },
    { name: 'About', path: '#about', id: 'about' },
    { name: 'Labs', path: '#labs', id: 'labs' },
    { name: 'Events', path: '#events', id: 'events' },
    { name: 'Contact', path: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Update active section based on scroll position
      const sections = navSections.map(section => section.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navSections]);

  const handleNavClick = (path, sectionId) => {
    setIsOpen(false);
    
    if (path.startsWith('#')) {
      const targetId = path.substring(1);
      
      // Small delay to ensure mobile menu closes first
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          setActiveSection(sectionId);
        } else {
          console.warn(`Element with id '${targetId}' not found`);
        }
      }, 100);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/50 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('#home', 'home')}
            className="flex items-center space-x-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-heading">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap font-heading">
              Singularity Lab
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navSections.map((section) => (
              <button
                key={section.path}
                onClick={() => handleNavClick(section.path, section.id)}
                className={`flex items-center space-x-1 transition-colors duration-200 px-3 py-2 rounded-lg ${
                  activeSection === section.id
                    ? 'text-blue-400 font-semibold' 
                    : 'text-gray-300 hover:text-blue-400'
                } font-heading`}
              >
                <span>{section.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/20 rounded-b-lg">
            <div className="px-4 py-4 space-y-2">
              {navSections.map((section) => (
                <button
                  key={section.path}
                  onClick={() => handleNavClick(section.path, section.id)}
                  className={`flex items-center space-x-2 py-3 px-3 w-full text-left transition-colors duration-200 rounded-lg ${
                    activeSection === section.id
                      ? 'text-blue-400 font-semibold bg-blue-500/20' 
                      : 'text-gray-300 hover:text-blue-400 hover:bg-white/10'
                  } font-body`}
                >
                  <span>{section.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Inter:wght@400;500;700&display=swap');
        
        .font-heading {
          font-family: 'Bungee', cursive;
        }
        
        .font-body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
