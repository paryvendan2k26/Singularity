import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Eye, Zap, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

// Use your Cloudinary cloud name
const CLOUDINARY_CLOUD_NAME = 'djtemmctt';

const getCloudinaryUrl = (publicId, transformations = '') => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${transformations}${publicId}`;
};

const ChitraDarshanLab = () => {
  const executives = [
    {
      name: 'Dr. Alex Render',
      role: 'Lab Director',
      specialization: 'Game Development & Graphics',
      image: 'data:image/jpeg;base64,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',
      bio: 'Expert in game development with 15+ years of experience in AAA game production and graphics programming.'
    },
    {
      name: 'Dr. Maya Virtual',
      role: 'Research Lead',
      specialization: 'AR/VR & Mixed Reality',
      image: 'data:image/jpeg;base64,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',
      bio: 'Pioneer in immersive technologies with breakthrough research in spatial computing and mixed reality interfaces.'
    }
  ];

  const affiliates = [
    {
      name: 'Prof. John Unity',
      role: 'Faculty Advisor',
      specialization: 'Interactive Media',
      affiliation: 'Department of Digital Arts'
    },
    {
      name: 'Dr. Sarah Engine',
      role: 'Industry Partner',
      specialization: 'Game Engines',
      affiliation: 'Epic Games Research'
    },
    {
      name: 'Dr. Mike Reality',
      role: 'Collaborating Researcher',
      specialization: 'Spatial Computing',
      affiliation: 'Meta Reality Labs'
    }
  ];

  const members = [
    {
      name: 'Jake Developer',
      role: 'PhD Student',
      specialization: 'Procedural Generation',
      year: '3rd Year'
    },
    {
      name: 'Luna Designer',
      role: 'MS Student',
      specialization: 'Game Design',
      year: '2nd Year'
    },
    {
      name: 'Pixel Artist',
      role: 'Undergraduate Researcher',
      specialization: '3D Graphics',
      year: 'Senior'
    },
    {
      name: 'Code Master',
      role: 'PhD Student',
      specialization: 'Game AI',
      year: '4th Year'
    },
    {
      name: 'VR Explorer',
      role: 'MS Student',
      specialization: 'Virtual Reality',
      year: '1st Year'
    },
    {
      name: 'AR Creator',
      role: 'Undergraduate Researcher',
      specialization: 'Augmented Reality',
      year: 'Junior'
    }
  ];

  const researchAreas = [
    {
      title: 'Game Development',
      description: 'Creating innovative games with cutting-edge mechanics, AI, and procedural generation techniques.',
      icon: Gamepad2,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Virtual Reality',
      description: 'Developing immersive VR experiences with advanced tracking, haptics, and spatial audio.',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Augmented Reality',
      description: 'Building AR applications that seamlessly blend digital content with the real world.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mixed Reality',
      description: 'Exploring the convergence of physical and digital worlds through advanced MR technologies.',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
          src="https://res.cloudinary.com/djtemmctt/video/upload/v1758569986/WhatsApp_Video_2025-09-23_at_12.34.51_AM_apnvdi.mp4"
        />

        {/* Overlay for readability */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 2
          }}
        ></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 font-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Chitra Darshan</span> Lab
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-body">
              Game Development, AR, VR & Mixed Reality
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl leading-relaxed font-body">
              Creating immersive digital experiences that blur the line between reality and imagination. 
              We develop cutting-edge games, virtual reality environments, and augmented reality applications 
              that push the boundaries of interactive entertainment and spatial computing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-body">
              To revolutionize interactive entertainment and spatial computing through innovative game development, 
              virtual reality, and augmented reality technologies. We create immersive experiences that engage, 
              educate, and inspire users while advancing the state-of-the-art in real-time graphics, spatial computing, 
              and human-computer interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Research <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl font-body">
              Our research spans the exciting domains of interactive entertainment and immersive technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 card-hover flex flex-col items-center text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center flex-shrink-0 mb-4`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-body">{area.title}</h3>
                <p className="text-gray-300 leading-relaxed font-body text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl font-body">
              Meet the creative minds building the future of interactive entertainment
            </p>
          </motion.div>

          {/* Executives */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 font-heading">Executives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {executives.map((executive, index) => (
                <motion.div
                  key={executive.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 flex flex-col items-center md:items-start text-center md:text-left card-hover"
                >
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-700">
                    <img 
                      src={executive.image} 
                      alt={executive.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/api/placeholder/150/150';
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-body">{executive.name}</h4>
                  <p className="text-green-400 font-semibold mb-2 font-body">{executive.role}</p>
                  <p className="text-gray-400 text-sm mb-3 font-body">{executive.specialization}</p>
                  <p className="text-gray-300 text-sm leading-relaxed font-body">{executive.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Affiliates */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 font-heading">Affiliates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {affiliates.map((affiliate, index) => (
                <motion.div
                  key={affiliate.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-lg p-6 card-hover"
                >
                  <h4 className="text-lg font-bold text-white mb-2 font-body">{affiliate.name}</h4>
                  <p className="text-green-400 font-semibold mb-2 font-body">{affiliate.role}</p>
                  <p className="text-gray-400 text-sm mb-2 font-body">{affiliate.specialization}</p>
                  <p className="text-gray-500 text-xs font-body">{affiliate.affiliation}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Members */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 font-heading">Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="glass-effect rounded-lg p-6 card-hover"
                >
                  <h4 className="text-lg font-bold text-white mb-2 font-body">{member.name}</h4>
                  <p className="text-green-400 font-semibold mb-2 font-body">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-2 font-body">{member.specialization}</p>
                  <p className="text-gray-500 text-xs font-body">{member.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Create the Future of Entertainment
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-body">
              Ready to build immersive experiences that captivate audiences? Join our team of creative 
              innovators pushing the boundaries of interactive entertainment and spatial computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScydNENhXxXQhfKd8nWbawxD2y0jtPTcYjqFqRqhOyz-Da3tw/viewform?usp=header', '_blank')}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:text-black transition-all duration-300">
                View Our Games
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChitraDarshanLab;