import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Clock, Brain, Zap, Gamepad2, Cloud, Shield, Cpu, FlaskConical, Atom } from 'lucide-react';

// Use your Cloudinary cloud name
const CLOUDINARY_CLOUD_NAME = 'djtemmctt';
//https://res.cloudinary.com/djtemmctt/image/upload/v1758569385/WhatsApp_Image_2025-09-23_at_12.16.47_AM_aocp2d.jpg

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Innovation";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping && currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 150);
    } else if (currentText.length === fullText.length) {
      setIsTyping(false);
    }
    return () => clearTimeout(timeout);
  }, [currentText, isTyping, fullText]);

  const ModelViewer = () => {
    const mountRef = useRef(null);
  
    useEffect(() => {
      let THREE;
      const loadThree = async () => {
        const module = await import('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js');
        THREE = module;
      };

      loadThree().then(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        const updateSize = () => {
          if (mountRef.current) {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
          }
        };
    
        if (mountRef.current) {
          mountRef.current.appendChild(renderer.domElement);
          updateSize();
        }
        window.addEventListener('resize', updateSize);
    
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        
        camera.position.z = 5;

        const animate = () => {
          requestAnimationFrame(animate);
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
    
        animate();
    
        return () => {
          window.removeEventListener('resize', updateSize);
          if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
          }
        };
      });
    }, []);
  
    return <div ref={mountRef} className="w-full h-full" />;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      
      {/* 3D Model Viewer - positioned to overlap and layered behind text */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center z-0">
        <div className="w-full max-w-lg h-[400px] lg:h-[600px] relative">
          <ModelViewer />
          
          {/* Geometric line element */}
          <div className="absolute top-16 right-8 w-32 h-px bg-white/30 transform rotate-12"></div>
          
          {/* Subtle glow effect around model */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none"></div>
        </div>
      </div>

      {/* Main Content Container - text on top of the model viewer */}
<div className="relative z-10 w-full h-full flex items-center justify-center px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-7xl min-h-[80vh] gap-8">
    
    {/* Left - "Singularity" */}
    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight font-heading">
          <span className="block">Singularity</span>
        </h1>

        <div className="relative mt-6">
          <h2 className="text-lg md:text-xl lg:text-2xl font-light text-white tracking-wide font-body">
            <span className="typing-text">{currentText}</span>
            <span className="animate-pulse text-white ml-1">|</span>
          </h2>
        </div>
      </div>
    </div>

    {/* Right - "Student Lab" */}
    <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right h-full">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight font-heading">
          <span className="block">Student Lab</span>
        </h1>
      </div>
    </div>
    
  </div>
</div>




      {/* Bottom Left - Clean footer */}
      <div className="absolute bottom-8 left-8 text-left space-y-1 z-20">
        <p className="text-xs text-gray-500 uppercase tracking-wider font-body">Powered by</p>
        <p className="text-sm font-medium text-white font-body">Microsoft Student Community</p>
        <p className="text-xs text-gray-400 font-body">SRM University - AP</p>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Inter:wght@400;500;700&display=swap');
        
        .font-heading {
          font-family: 'Bungee', cursive;
        }
        
        .font-body {
          font-family: 'Inter', sans-serif;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        .typing-text {
          display: inline-block;
          overflow: hidden;
          border-right: 2px solid transparent;
          animation: typing 2s steps(20, end), blink-caret 1s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          0%, 50% { border-color: rgba(255,255,255,0.7); }
          51%, 100% { border-color: transparent; }
        }
        
        /* Mobile responsiveness */
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .lg\\:col-span-1 {
            text-align: center;
            padding: 0 1rem;
          }
          
          .items-end {
            align-items: center;
          }
          
          .text-right {
            text-align: center;
          }
          
          /* Hide top nav on mobile for cleaner look */
          .absolute.top-0 {
            display: none;
          }
          
          /* Adjust bottom cards for mobile */
          .absolute.bottom-8.right-8 {
            right: 1rem;
            left: 1rem;
            max-width: none;
          }
          
          .absolute.bottom-8.left-8 {
            left: 1rem;
            bottom: 20rem;
          }
        }
        
        @media (max-width: 768px) {
          .text-7xl {
            font-size: 4rem;
          }
          
          .text-8xl {
            font-size: 5rem;
          }
          
          .text-9xl {
            font-size: 6rem;
          }
        }
      `}</style>
    </section>
  );
};

// ... other components

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const fullText = "The best way to predict the future is to invent it.";
  const [isTyping, setIsTyping] = useState(true);
  const [hoveredLab, setHoveredLab] = useState(null);
  const [mouseTrail, setMouseTrail] = useState([]);
  const mouseTrailRef = useRef(null);
  const trailLength = 5;

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMouseTrail(currentTrail => {
        const newTrail = [...currentTrail, { x: clientX, y: clientY }];
        if (newTrail.length > trailLength) {
          return newTrail.slice(newTrail.length - trailLength);
        }
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let timeout;
    if (isTyping && currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 100);
    } else if (currentText.length === fullText.length) {
      setIsTyping(false);
    }
    return () => clearTimeout(timeout);
  }, [currentText, isTyping, fullText]);

  const CLOUDINARY_URL_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/`;

  const getCloudinaryUrl = (publicId, transformations = '') => {
    return `${CLOUDINARY_URL_BASE}${transformations}${publicId}`;
  };

  const labs = [
    {
      name: 'Prajna Kritrima Lab',
      path: '/prajna-kritrima-lab',
      tagline: 'AI/ML, Deep Learning, Generative AI',
      description: 'Pioneering artificial intelligence and machine learning research with cutting-edge neural networks and generative models.',
      image: getCloudinaryUrl('v1709459341/lab-image-1.jpg'), // Replace with your image's Public ID
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Aanu Tattva Lab',
      path: '/aanu-tattva-lab',
      tagline: 'Quantum Computing, Quantum Machine Learning',
      description: 'Exploring the quantum realm to revolutionize computing and machine learning through quantum algorithms.',
      image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png'), // Replace with your image's Public ID
      icon: Atom,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Chitra Darshan Lab',
      path: '/chitra-darshan-lab',
      tagline: 'Game Development, AR, VR, Mixed Reality',
      description: 'Creating immersive digital experiences through game development and extended reality technologies.',
      image: getCloudinaryUrl('v1709459341/lab-image-3.jpg'), // Replace with your image's Public ID
      icon: Gamepad2,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Varahamihira Lab',
      path: '/varahamihira-lab',
      tagline: 'Cloud Computing, Distributed Systems',
      description: 'Building scalable cloud infrastructure and distributed systems for the next generation of applications.',
      image: getCloudinaryUrl('v1709459341/lab-image-4.jpg'), // Replace with your image's Public ID
      icon: Cloud,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Bhaskaracharya Lab',
      path: '/bhaskaracharya-lab',
      tagline: 'Cybersecurity, Blockchain, Web3',
      description: 'Securing the digital future through advanced cybersecurity and blockchain technology research.',
      image: getCloudinaryUrl('v1709459341/lab-image-5.jpg'), // Replace with your image's Public ID
      icon: Shield,
      color: 'from-red-500 to-rose-500'
    },
    {
      name: 'Agastya Lab',
      path: '/agastya-lab',
      tagline: 'Robotics, IoT, Embedded Systems',
      description: 'Developing intelligent robotic systems and IoT solutions for smart environments.',
      image: getCloudinaryUrl('v1709459341/lab-image-6.jpg'), // Replace with your image's Public ID
      icon: Cpu,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Navya Vigyan Lab',
      path: '/navya-vigyan-lab',
      tagline: 'Interdisciplinary & Experimental Technology',
      description: 'Pushing boundaries through experimental research and interdisciplinary technology innovation.',
      image: getCloudinaryUrl('v1709459341/lab-image-1.jpg'), // Use imported local image (or another)
      icon: FlaskConical,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const events = [
    {
      title: 'Tech Innovation Summit 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'University Auditorium',
      description: 'Join us for a day of cutting-edge technology presentations, workshops, and networking opportunities.',
      image: getCloudinaryUrl('v1709459341/event-image-1.jpg'), // Replace with your image's Public ID
      status: 'Open'
    },
    {
      title: 'AI & Machine Learning Workshop',
      date: 'March 22, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Computer Lab 3',
      description: 'Hands-on workshop covering the latest developments in AI and machine learning technologies.',
      image: getCloudinaryUrl('v1709459341/event-image-2.jpg'), // Replace with your image's Public ID
      status: 'Open'
    },
    {
      title: 'Quantum Computing Symposium',
      date: 'April 5, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Physics Department',
      description: 'Explore the future of quantum computing with leading researchers and industry experts.',
      image: getCloudinaryUrl('v1758735862/Screenshot_from_2025-09-24_23-12-57_p3xz52.png'), // Replace with your image's Public ID
      status: 'Coming Soon'
    }
  ];

  

  const labImages = [
    getCloudinaryUrl('v1758569385/WhatsApp_Image_2025-09-23_at_12.16.47_AM_aocp2d.jpg'),
    getCloudinaryUrl('v1758569742/WhatsApp_Image_2025-09-23_at_12.16.47_AM_2_iqvdym.jpg'),
    getCloudinaryUrl('v1758569742/WhatsApp_Image_2025-09-23_at_12.16.47_AM_1_akl3pc.jpg'),
    getCloudinaryUrl('v1758569742/WhatsApp_Image_2025-09-23_at_12.22.13_AM_do3ykq.jpg'),
  ];

  const mouseTrailPath = mouseTrail.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />

      {/* Mouse Trail SVG */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-50">
        <polyline 
          points={mouseTrailPath} 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>


      {/* Lab Images Section */}
      <section id="about" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div className="text-left w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Our <span className="gradient-text">Research Environment</span>
              </h2>
              <p className="text-xl text-white font-body">
                State-of-the-art facilities where innovation comes to life
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                {labImages.map((image, index) => (
                  <div key={index} className="group">
                    <div className="relative overflow-hidden rounded-lg aspect-[2/3] md:aspect-[3/4]">
                      <img 
                        src={image} 
                        alt={`Lab ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              What is <span className="gradient-text">"The Singularity"</span>?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-white leading-relaxed mb-6 font-body">
                The technological singularity represents a hypothetical future point where artificial intelligence 
                surpasses human intelligence, leading to unprecedented changes in civilization. At Singularity Lab, 
                we don't just study this concept—we actively work towards creating the technologies that will 
                define this transformative era.
              </p>
              <p className="text-lg text-white leading-relaxed font-body">
                Our seven specialized research divisions work at the intersection of cutting-edge technology, 
                exploring AI, quantum computing, immersive technologies, cloud systems, cybersecurity, robotics, 
                and experimental innovations that will shape the future of humanity.
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                Our <span className="gradient-text">Divisions</span>
              </h2>
              <p className="text-lg md:text-xl text-white max-w-2xl font-body">
                Seven specialized laboratories working at the forefront of technological innovation
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white border-opacity-20 rounded-lg overflow-hidden relative">
            {labs.map((lab, index) => (
              <Link 
                to={lab.path} 
                key={index}
                onMouseEnter={() => setHoveredLab(lab.image)}
                onMouseLeave={() => setHoveredLab(null)}
              >
                <motion.div
                  className={`
                    relative p-8 md:p-12 border-white border-opacity-20 flex flex-col justify-between h-full group
                    transition-colors duration-300 hover:bg-white/5
                    ${index === labs.length - 1 ? '' : 'md:border-r md:border-b'}
                    ${(index + 1) % 3 !== 0 ? 'border-r' : ''}
                    ${index < labs.length - 3 ? 'border-b' : ''}
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Content container at the bottom */}
                  <div className="mt-auto">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-blue-400 transition-colors duration-300 font-heading">
                        {lab.name}
                      </h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-white group-hover:text-white transition-colors duration-300 font-body">
                      {lab.tagline}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Hover Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className={`
              absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500
              ${hoveredLab ? 'opacity-60' : 'opacity-0'}
            `}
            style={{ backgroundImage: `url(${hoveredLab})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="min-h-[60vh] py-20 bg-black text-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-right mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`relative rounded-lg overflow-hidden group min-h-[500px] cursor-pointer
                          ${index < events.length -1 ? 'border-r border-white border-opacity-20' : ''}`}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/70"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-8">
                  {/* Top: Event Title and Date */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 font-heading">
                      {event.title}
                    </h3>
                    <p className="text-sm text-white opacity-60 font-body">
                      {event.date}
                    </p>
                  </div>

                  {/* Bottom: Hidden details on hover */}
                  <div className="flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm text-white leading-relaxed font-body">{event.description}</p>
                    <div className="flex items-center text-white text-sm font-body">
                      <Clock className="w-4 h-4 mr-2 text-white" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-white text-sm font-body">
                      <MapPin className="w-4 h-4 mr-2 text-white" />
                      {event.location}
                    </div>
                    <button className="w-full mt-4 py-2 px-4 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300 font-body">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-body">
              Ready to join the future of technology? Contact us to learn more about our research and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary font-body">
                Contact Us
              </button>
              <button className="btn-secondary font-body">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;