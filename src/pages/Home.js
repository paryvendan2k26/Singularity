import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Clock, Brain, Zap, Gamepad2, Cloud, Shield, Cpu, FlaskConical, Atom } from 'lucide-react';
import ModelViewer from '../components/ModelViewer'; // Using the stable ModelViewer component

const CLOUDINARY_CLOUD_NAME = 'djtemmctt';

// --- HERO SECTION COMPONENT ---
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Model Viewer - Now uses the stable component */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center z-0">
        <div className="w-full max-w-lg h-[400px] lg:h-[600px] relative">
          <ModelViewer />
          <div className="absolute top-16 right-8 w-32 h-px bg-white/30 transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-7xl min-h-[80vh] gap-8">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight font-heading">
                <span className="block"> Singularity</span>
              </h1>
              <div className="relative mt-6">
                <h2 className="text-lg md:text-xl lg:text-2xl font-light text-white tracking-wide font-body">
                  <span>{currentText}</span>
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
      
      {/* Bottom Right - Powered By */}
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


// --- MAIN HOME PAGE COMPONENT ---
const Home = () => {
  const [hoveredLab, setHoveredLab] = useState(null);

  const getCloudinaryUrl = (publicId) => {
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}`;
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
    { title: 'Quantum Computing Symposium', date: 'April 5, 2024', time: '10:00 AM - 4:00 PM', location: 'Physics Department', description: 'Explore the future of quantum computing with leading researchers and industry experts.', image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png'), status: 'Coming Soon' }
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

      {/* About Section with Lab Images */}
      <section id="about" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div className="text-left w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Our <span className="text-cyan-400">Research Environment</span>
              </h2>
              <p className="text-xl text-gray-300 font-body">
                State-of-the-art facilities where innovation comes to life.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                {labImages.map((image, index) => (
                  <div key={index} className="group">
                    <div className="relative overflow-hidden rounded-lg aspect-[2/3] md:aspect-[3/4]">
                      <img src={image} alt={`Lab ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What is Singularity Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              What is <span className="text-cyan-400">"The Singularity"</span>?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-6 font-body">
                The technological singularity represents a hypothetical future point where artificial intelligence surpasses human intelligence, leading to unprecedented changes in civilization. At Singularity Lab, we don't just study this concept—we actively work towards creating the technologies that will define this transformative era.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-body">
                Our seven specialized research divisions work at the intersection of cutting-edge technology, exploring AI, quantum computing, immersive technologies, cloud systems, cybersecurity, robotics, and experimental innovations that will shape the future of humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section id="labs" className="min-h-screen py-20 flex items-center justify-center bg-black relative">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div className="text-left w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Our <span className="text-cyan-400">Divisions</span></h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-body">Seven specialized laboratories working at the forefront of technological innovation.</p>
            </div>
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
        {/* Restored Labs Hover Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${hoveredLab ? 'opacity-60' : 'opacity-0'}`} style={{ backgroundImage: `url(${hoveredLab})` }}></div>
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
      </section>

      {/* Restored Events Section */}
      <section id="events" className="min-h-[60vh] py-20 bg-black text-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {events.map((event, index) => (
              <div key={index} className={`relative group min-h-[500px] cursor-pointer ${(index < events.length - 1) ? 'md:border-r border-white/20' : ''}`}>
                <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/70"></div>
                </div>
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 font-heading">{event.title}</h3>
                    <p className="text-sm text-white opacity-60 font-body">{event.date}</p>
                  </div>
                  <div className="flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm text-white leading-relaxed font-body">{event.description}</p>
                    <div className="flex items-center text-white text-sm font-body"><Clock className="w-4 h-4 mr-2" />{event.time}</div>
                    <div className="flex items-center text-white text-sm font-body"><MapPin className="w-4 h-4 mr-2" />{event.location}</div>
                    <button className="w-full mt-4 py-2 px-4 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300 font-body">Apply Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restored Contact Section with Original Button Styles */}
      <section id="contact" className="py-20 bg-black">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-body">
              Ready to join the future of technology? Contact us to learn more about our research and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary font-body">Contact Us</button>
              <button className="btn-secondary font-body">Join Our Community</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;