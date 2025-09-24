import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const labs = [
    { name: 'Prajna Kritrima Lab', path: '/prajna-kritrima-lab' },
    { name: 'Aanu Tattva Lab', path: '/aanu-tattva-lab' },
    { name: 'Chitra Darshan Lab', path: '/chitra-darshan-lab' },
    { name: 'Varahamihira Lab', path: '/varahamihira-lab' },
    { name: 'Bhaskaracharya Lab', path: '/bhaskaracharya-lab' },
    { name: 'Agastya Lab', path: '/agastya-lab' },
    { name: 'Navya Vigyan Lab', path: '/navya-vigyan-lab' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      items: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '#about' },
        { name: 'Research', path: '#research' },
        { name: 'Publications', path: '#publications' },
        { name: 'Contact', path: '#contact' }
      ]
    },
    {
      title: 'Divisions',
      items: labs
    },
    {
      title: 'Contact Info',
      items: [
        { name: 'University Research Complex', icon: MapPin },
        { name: 'Technology Building, Room 404', icon: null },
        { name: 'Campus Address, City 12345', icon: null },
        { name: 'contact@singularitylab.edu', icon: Mail },
        { name: '+1 (234) 567-8900', icon: Phone }
      ]
    },
  ];

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24 mb-12">
          {/* Main Title Column */}
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-3xl lg:text-3xl font-black font-heading leading-tight">
              SINGULARITY LAB
            </h2>
          </div>
          
          {/* Menu and Contact Columns */}
          <div className="md:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold font-heading mb-4">Menu</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Work</a></li>
                <li><a href="#about" className="hover:text-gray-400">Exhibitions</a></li>
                <li><a href="#" className="hover:text-gray-400">Stories</a></li>
                <li><a href="#" className="hover:text-gray-400">About</a></li>
                <li><a href="#" className="hover:text-gray-400">Inquiries</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold font-heading mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-400">X / Twitter</a></li>
                <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-400">Behance</a></li>
                <li><a href="#" className="hover:text-gray-400">Dribbble</a></li>
                <li><a href="#" className="hover:text-gray-400">Patreon</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-2 lg:col-span-1 mt-8 lg:mt-0">
              <h3 className="text-xl font-bold font-heading mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Subscribe to stay up to date with the latest news and projects.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full py-2 px-4 bg-white/10 text-white rounded-l-lg focus:outline-none"
                />
                <button
                  className="py-2 px-6 bg-white text-black font-bold rounded-r-lg hover:bg-gray-200 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-t border-white/20 mb-8" />

        {/* Bottom text */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">© 2024 Singularity Lab. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-200">Terms of Service</a>
          </div>
        </div>
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
    </footer>
  );
};

export default Footer;
