import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLabsOpen, setIsLabsOpen] = useState(false);
  const [isMobileLabsOpen, setMobileLabsOpen] = useState(false);
  
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const labLinks = [
    { name: 'Prajna Kritrima Lab', path: '/prajna-kritrima-lab' },
    { name: 'Aanu Tattva Lab', path: '/aanu-tattva-lab' },
    { name: 'Chitra Darshan Lab', path: '/chitra-darshan-lab' },
    { name: 'Varahamihira Lab', path: '/varahamihira-lab' },
    { name: 'Bhaskaracharya Lab', path: '/bhaskaracharya-lab' },
    { name: 'Agastya Lab', path: '/agastya-lab' },
    { name: 'Navya Vigyan Lab', path: '/navya-vigyan-lab' },
  ];

  const navSections = [
    { name: 'Home', path: '#home', id: 'home' },
    { name: 'About', path: '#about', id: 'about' },
    { name: 'Labs', path: '#labs', id: 'labs', sublinks: labLinks },
    { name: 'Events', path: '#events', id: 'events' },
    { name: 'Contact', path: '#contact', id: 'contact' },
    { name: 'Blogs', path: '/blogs', id: 'blogs' },
  ];

  // --- NEW: A variable to check if we are on any lab page ---
  const isLabActive = labLinks.some(lab => location.pathname === lab.path);

  useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 50);
        if (location.pathname === '/') {
            const sections = navSections.filter(s => s.path.startsWith('#')).map(s => s.id);
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
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navSections, location.pathname]);


  const handleNavClick = (path, sectionId) => {
    setIsOpen(false);
    if (path.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(path.substring(1));
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            setActiveSection(sectionId);
          }
        }, 300);
      } else {
        const element = document.getElementById(path.substring(1));
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }
    }
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200" onClick={() => setIsOpen(false)}>
            <div className="p-1 bg-white/ rounded-lg">
              <img src="/new-logo.jpg" alt="Singularity Lab Logo" className="h-16 w-16" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap font-heading">The Singularity Lab - SRMAP</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navSections.map((section) => (
              section.sublinks ? (
                <div key={section.name} className="relative" onMouseEnter={() => setIsLabsOpen(true)} onMouseLeave={() => setIsLabsOpen(false)}>
                  {/* --- CHANGED: Added 'isLabActive' to the className logic --- */}
                  <button className={`flex items-center transition-colors duration-200 px-3 py-2 rounded-lg ${ (activeSection === section.id && location.pathname === '/') || isLabActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'} font-heading`}>
                    {section.name}
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isLabsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isLabsOpen && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
                        <div className="p-2">
                          {section.sublinks.map(link => (
                            <Link key={link.path} to={link.path} className="block text-left w-full px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-blue-400 rounded-md transition-colors" onClick={() => setIsLabsOpen(false)}>
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : section.path.startsWith('#') ? (
                <button key={section.path} onClick={() => handleNavClick(section.path, section.id)} className={`transition-colors duration-200 px-3 py-2 rounded-lg ${activeSection === section.id && location.pathname === '/' ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'} font-heading`}>
                  {section.name}
                </button>
              ) : (
                <Link key={section.path} to={section.path} className={`transition-colors duration-200 px-3 py-2 rounded-lg ${location.pathname === section.path ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'} font-heading`}>
                  {section.name}
                </Link>
              )
            ))}
            <div className="flex items-center space-x-4 pl-4">
              {user ? (
                <>
                  <span className="text-white font-semibold">Hi, {user.username}</span>
                  <button onClick={handleLogout} className="text-gray-300 hover:text-white bg-red-600 px-3 py-2 rounded-lg transition-colors">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors">Login</Link>
                  <Link to="/register" className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg transition-colors">Register</Link>
                </>
              )}
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-blue-400">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-black/95 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navSections.map((section) => (
                section.sublinks ? (
                  <div key={section.name}>
                    {/* --- CHANGED: Added 'isLabActive' to the className logic for mobile --- */}
                    <button onClick={() => setMobileLabsOpen(!isMobileLabsOpen)} className={`flex justify-between items-center w-full text-left py-2 px-3 rounded-lg hover:bg-white/10 ${isLabActive ? 'text-blue-400' : 'text-gray-300'}`}>
                      <span>{section.name}</span>
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isMobileLabsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileLabsOpen && (
                      <div className="pl-4 pt-2 space-y-1">
                        {section.sublinks.map(link => (
                          <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-lg text-gray-400 hover:bg-white/10 hover:text-blue-400">
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : section.path.startsWith('#') ? (
                  <button key={section.path} onClick={() => handleNavClick(section.path, section.id)} className={`block w-full text-left py-2 px-3 rounded-lg ${activeSection === section.id && location.pathname === '/' ? 'text-blue-400 bg-white/10' : 'text-gray-300 hover:bg-white/10'}`}>
                    {section.name}
                  </button>
                ) : (
                  <Link key={section.path} to={section.path} onClick={() => setIsOpen(false)} className={`block w-full text-left py-2 px-3 rounded-lg ${location.pathname === section.path ? 'text-blue-400 bg-white/10' : 'text-gray-300 hover:bg-white/10'}`}>
                    {section.name}
                  </Link>
                )
              ))}
              <div className="border-t border-white/20 mt-4 pt-4 space-y-2">
                {user ? (
                  <>
                    <span className="block text-white px-3 py-2">Welcome, {user.username}</span>
                    <button onClick={handleLogout} className="block w-full text-left text-red-400 hover:bg-white/10 py-2 px-3 rounded-lg">Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:bg-white/10 py-2 px-3 rounded-lg">Login</Link>
                    <Link to="/register" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:bg-white/10 py-2 px-3 rounded-lg">Register</Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;