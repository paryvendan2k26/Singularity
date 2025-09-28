import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Dribbble, ExternalLink } from 'lucide-react';

const Footer = () => {
  const menuLinks = [
    { name: 'Work', path: '#' },
    { name: 'Exhibitions', path: '#' },
    { name: 'Stories', path: '#' },
    { name: 'About', path: '#' },
    { name: 'Inquiries', path: '#' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'http://www.instagram.com/thesingularity.srmap', icon: Instagram },
    { name: 'X / Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/the-singularity-advanced-research-lab-srmap/', icon: Linkedin },
    { name: 'Behance', href: '#', icon: ExternalLink },
    { name: 'Dribbble', href: '#', icon: Dribbble },
  ];

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-heading mb-4">Social</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <link.icon className="w-5 h-5 mr-3" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-heading mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-heading mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>University Research Complex, Technology Building, Room 404</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:contact@singularitylab.edu" className="hover:text-white">contact@singularitylab.edu</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>+1 (234) 567-8900</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-heading mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to stay up to date with the latest news and projects.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full py-3 px-4 bg-white/10 text-white rounded-lg focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="w-full py-3 px-6 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <hr className="border-t border-white/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">© 2024 The Singularity Lab. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;