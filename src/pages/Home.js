import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Clock, Brain, Zap, Gamepad2, Cloud, Shield, Cpu, FlaskConical, Atom } from 'lucide-react';

const CLOUDINARY_CLOUD_NAME = 'djtemmctt';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Advanced Student Research Lab";

  useEffect(() => {
    let timeout;
    if (currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 150);
    }
    return () => clearTimeout(timeout);
  }, [currentText, fullText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="relative z-10 w-full h-full flex items-center justify-center px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-7xl min-h-[80vh] gap-8">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight font-heading">
                <span className="block"> Singularity</span>
              </h1>
              <div className="relative mt-6">
                <h2 className="text-lg md:text-xl lg:text-2xl font-light text-white tracking-wide font-body">
                  <span className="typing-text">{currentText}</span>
                  <span className="animate-pulse text-white ml-1">|</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right h-full">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight font-heading">
                <span className="block">Student Lab</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-x-4">
        <img src="/msc-logo.png" alt="Microsoft Student Community Logo" className="h-16 w-auto" />
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wider font-body">Powered by</p>
          <p className="text-base font-medium text-white font-body">Microsoft Student Community</p>
          <p className="text-sm text-gray-400 font-body">SRM University - AP</p>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [hoveredLab, setHoveredLab] = useState(null);

  const getCloudinaryUrl = (publicId, transformations = '') => {
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}${publicId}`;
  };

  const labs = [
    { name: 'Prajna Kritrima Lab', path: '/prajna-kritrima-lab', tagline: 'AI/ML, Deep Learning, Generative AI', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png') },
    { name: 'Aanu Tattva Lab', path: '/aanu-tattva-lab', tagline: 'Quantum Computing, Quantum Machine Learning', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png') },
    { name: 'Chitra Darshan Lab', path: '/chitra-darshan-lab', tagline: 'Game Development, AR, VR, Mixed Reality', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png') },
    { name: 'Varahamihira Lab', path: '/varahamihira-lab', tagline: 'Cloud Computing, Distributed Systems', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png') },
    { name: 'Bhaskaracharya Lab', path: '/bhaskaracharya-lab', tagline: 'Cybersecurity, Blockchain, Web3', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png') },
    { name: 'Agastya Lab', path: '/agastya-lab', tagline: 'Robotics, IoT, Embedded Systems', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png') },
    { name: 'Navya Vigyan Lab', path: '/navya-vigyan-lab', tagline: 'Interdisciplinary & Experimental Technology', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png') },
  ];

  const events = [
    { title: 'Tech Innovation Summit 2024', date: 'March 15, 2024', time: '9:00 AM - 5:00 PM', location: 'University Auditorium', description: 'Join us for a day of cutting-edge technology presentations, workshops, and networking opportunities.', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png'), status: 'Open' },
    { title: 'AI & Machine Learning Workshop', date: 'March 22, 2024', time: '2:00 PM - 6:00 PM', location: 'Computer Lab 3', description: 'Hands-on workshop covering the latest developments in AI and machine learning technologies.', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png'), status: 'Open' },
    { title: 'Quantum Computing Symposium', date: 'April 5, 2024', time: '10:00 AM - 4:00 PM', location: 'Physics Department', description: 'Explore the future of quantum computing with leading researchers and industry experts.', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png'), status: 'Coming Soon' },
  ];

  const labImages = [
    getCloudinaryUrl('v1758569385/WhatsApp_Image_2025-09-23_at_12.16.47_AM_aocp2d.jpg'),
    getCloudinaryUrl('v1758569742/WhatsApp_Image_2025-09-23_at_12.16.47_AM_2_iqvdym.jpg'),
    getCloudinaryUrl('v1758569742/WhatsApp_Image_2025-09-23_at_12.16.47_AM_1_akl3pc.jpg'),
    getCloudinaryUrl('v1758569742/WhatsApp_Image_2025-09-23_at_12.22.13_AM_do3ykq.jpg'),
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />

      <section id="about" className="py-16 bg-black">
        {/* ... About section content ... */}
      </section>

      <section id="labs" className="min-h-screen py-20 flex items-center justify-center bg-black relative">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-left w-full mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Our <span className="text-cyan-400">Divisions</span></h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-body">Seven specialized laboratories working at the forefront of technological innovation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/20 rounded-lg overflow-hidden relative">
            {labs.map((lab, index) => (
              <Link to={lab.path} key={index} onMouseEnter={() => setHoveredLab(lab.image)} onMouseLeave={() => setHoveredLab(null)}>
                <motion.div
                  className={`relative p-8 md:p-12 border-white/20 flex flex-col justify-between h-full group transition-colors duration-300 hover:bg-white/5 ${(index + 1) % 3 !== 0 ? 'md:border-r' : ''} ${index < labs.length - 3 ? 'border-b' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mt-auto">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-blue-400 transition-colors duration-300 font-heading">{lab.name}</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-300 font-body">{lab.tagline}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${hoveredLab ? 'opacity-20' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${hoveredLab})` }}
          ></div>
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
      </section>

      <section id="events" className="py-20 bg-black text-white">
        {/* ... Events section content ... */}
      </section>

      <section id="contact" className="py-20 bg-black">
       {/* ... Contact section content ... */}
      </section>
    </div>
  );
};

export default Home;