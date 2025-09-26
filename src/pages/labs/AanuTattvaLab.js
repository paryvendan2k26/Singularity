import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Atom, Cpu, Database, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

// Use your Cloudinary cloud name
const CLOUDINARY_CLOUD_NAME = 'djtemmctt';

const getCloudinaryUrl = (publicId, transformations = '') => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${transformations}${publicId}`;
};

const AanuTattvaLab = () => {
  const executives = [
    {
      name: 'Dr. Quantum Zhang',
      role: 'Lab Director',
      specialization: 'Quantum Algorithms & Complexity',
      image: '/api/placeholder/150/150', // Fixed: Using placeholder for now
      bio: 'Leading quantum computing researcher with expertise in quantum algorithms and quantum machine learning.'
    },
    {
      name: 'Dr. Maya Patel',
      role: 'Research Lead',
      specialization: 'Quantum Machine Learning',
      image: '/api/placeholder/150/150', // Fixed: Using placeholder for now
      bio: 'Pioneer in quantum machine learning with multiple breakthrough publications in quantum neural networks.'
    }
  ];

  const affiliates = [
    {
      name: 'Prof. Richard Feynman',
      role: 'Faculty Advisor',
      specialization: 'Quantum Physics',
      affiliation: 'Department of Physics'
    },
    {
      name: 'Dr. Shor Algorithm',
      role: 'Industry Partner',
      specialization: 'Quantum Cryptography',
      affiliation: 'QuantumTech Industries'
    },
    {
      name: 'Dr. Bell State',
      role: 'Collaborating Researcher',
      specialization: 'Quantum Entanglement',
      affiliation: 'Quantum Research Institute'
    }
  ];

  const members = [
    {
      name: 'Alice Quantum',
      role: 'PhD Student',
      specialization: 'Quantum Algorithms',
      year: '3rd Year'
    },
    {
      name: 'Bob Entangled',
      role: 'MS Student',
      specialization: 'Quantum Machine Learning',
      year: '2nd Year'
    },
    {
      name: 'Charlie Superposition',
      role: 'Undergraduate Researcher',
      specialization: 'Quantum Computing',
      year: 'Senior'
    },
    {
      name: 'Diana Coherence',
      role: 'PhD Student',
      specialization: 'Quantum Error Correction',
      year: '4th Year'
    },
    {
      name: 'Eve Interference',
      role: 'MS Student',
      specialization: 'Quantum Cryptography',
      year: '1st Year'
    },
    {
      name: 'Frank Decoherence',
      role: 'Undergraduate Researcher',
      specialization: 'Quantum Simulation',
      year: 'Junior'
    }
  ];

  const researchAreas = [
    {
      title: 'Quantum Algorithms',
      description: 'Developing novel quantum algorithms for optimization, simulation, and machine learning problems.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Exploring quantum advantage in machine learning through quantum neural networks and quantum kernels.',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quantum Error Correction',
      description: 'Building fault-tolerant quantum computers through advanced error correction techniques.',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quantum Cryptography',
      description: 'Developing secure communication protocols using quantum key distribution and post-quantum cryptography.',
      icon: Database,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Moved styles to external CSS - Better practice */}
      
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
              {/* Your existing content goes here */}
              {/* <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </div> */}
              {/* ... rest of your hero content ... */}
            </motion.div>
          </div>
        
        {/* Fallback background image if video fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 z-0"></div>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 font-heading">
              Aanu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tattva</span> Lab
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-body">
              Quantum Computing & Quantum Machine Learning
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl leading-relaxed font-body">
              Exploring the quantum realm to revolutionize computing and machine learning. We develop quantum 
              algorithms, quantum machine learning models, and quantum error correction techniques that will 
              shape the future of computation.
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
            viewport={{ once: true }}
            className="text-center rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-body">
              To unlock the potential of quantum computing through groundbreaking research in quantum algorithms, 
              quantum machine learning, and quantum error correction. We aim to develop practical quantum 
              solutions that provide exponential speedups over classical computing for real-world problems 
              in optimization, simulation, and artificial intelligence.
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
            viewport={{ once: true }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Research <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl font-body">
              Our research spans the cutting-edge domains of quantum computing and quantum machine learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
            viewport={{ once: true }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl font-body">
              Meet the quantum pioneers pushing the boundaries of computation
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
                  viewport={{ once: true }}
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
                  <p className="text-purple-400 font-semibold mb-2 font-body">{executive.role}</p>
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
                  viewport={{ once: true }}
                  className="glass-effect rounded-lg p-6 card-hover"
                >
                  <h4 className="text-lg font-bold text-white mb-2 font-body">{affiliate.name}</h4>
                  <p className="text-purple-400 font-semibold mb-2 font-body">{affiliate.role}</p>
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
                  viewport={{ once: true }}
                  className="glass-effect rounded-lg p-6 card-hover"
                >
                  <h4 className="text-lg font-bold text-white mb-2 font-body">{member.name}</h4>
                  <p className="text-purple-400 font-semibold mb-2 font-body">{member.role}</p>
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
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Join the Quantum Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-body">
              Ready to explore the quantum realm? We welcome researchers and students passionate about 
              quantum computing to join our mission of building the quantum future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:text-black transition-all duration-300">
                View Publications
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AanuTattvaLab;