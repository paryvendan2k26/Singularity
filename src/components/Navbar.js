import React, { useState, useEffect, useContext } from 'react'; // Import useContext
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import your AuthContext

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const { user, logout } = useContext(AuthContext); // Get user and logout from context
  const navigate = useNavigate();
  const location = useLocation();

  const navSections = [
    { name: 'Home', path: '#home', id: 'home' },
    { name: 'About', path: '#about', id: 'about' },
    { name: 'Labs', path: '#labs', id: 'labs' },
    { name: 'Events', path: '#events', id: 'events' },
    { name: 'Contact', path: '#contact', id: 'contact' },
    { name: 'Blogs', path: '/blogs', id: 'blogs' }, // <-- UPDATED: Changed path to '/blogs'
  ];

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
          const targetId = path.substring(1);
          const element = document.getElementById(targetId);
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            setActiveSection(sectionId);
          }
        }, 300);
      } else {
        const targetId = path.substring(1);
        const element = document.getElementById(targetId);
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
          <Link 
            to="/" 
            className="flex items-center space-x-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-heading">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap font-heading">
              The Singularity Lab - SRMAP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navSections.map((section) => (
              section.path.startsWith('#') ? (
                <button
                  key={section.path}
                  onClick={() => handleNavClick(section.path, section.id)}
                  className={`transition-colors duration-200 px-3 py-2 rounded-lg ${
                    activeSection === section.id && location.pathname === '/'
                      ? 'text-blue-400 font-semibold' 
                      : 'text-gray-300 hover:text-blue-400'
                  } font-heading`}
                >
                  {section.name}
                </button>
              ) : (
                <Link
                  key={section.path}
                  to={section.path}
                  className={`transition-colors duration-200 px-3 py-2 rounded-lg ${
                    location.pathname === section.path
                      ? 'text-blue-400 font-semibold'
                      : 'text-gray-300 hover:text-blue-400'
                  } font-heading`}
                >
                  {section.name}
                </Link>
              )
            ))}
            
            {/* --- Auth links for desktop --- */}
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

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 py-4 space-y-2">
            {navSections.map((section) => (
               section.path.startsWith('#') ? (
                <button
                  key={section.path}
                  onClick={() => handleNavClick(section.path, section.id)}
                  className={`block w-full text-left py-2 px-3 rounded-lg ${
                    activeSection === section.id && location.pathname === '/' ? 'text-blue-400 bg-white/10' : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {section.name}
                </button>
               ) : (
                <Link
                  key={section.path}
                  to={section.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left py-2 px-3 rounded-lg ${
                    location.pathname === section.path ? 'text-blue-400 bg-white/10' : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {section.name}
                </Link>
               )
            ))}
            {/* --- Auth links for mobile --- */}
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;