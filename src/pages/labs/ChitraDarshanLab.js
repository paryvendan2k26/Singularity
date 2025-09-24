import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Eye, Zap, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

const ChitraDarshanLab = () => {
  const executives = [
    {
      name: 'Dr. Alex Render',
      role: 'Lab Director',
      specialization: 'Game Development & Graphics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in game development with 15+ years of experience in AAA game production and graphics programming.'
    },
    {
      name: 'Dr. Maya Virtual',
      role: 'Research Lead',
      specialization: 'AR/VR & Mixed Reality',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Chitra Darshan Lab
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Game Development, AR, VR & Mixed Reality
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Creating immersive digital experiences that blur the line between reality and imagination. 
              We develop cutting-edge games, virtual reality environments, and augmented reality applications 
              that push the boundaries of interactive entertainment and spatial computing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-b from-transparent to-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our research spans the exciting domains of interactive entertainment and immersive technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-secondary-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the creative minds building the future of interactive entertainment
            </p>
          </motion.div>

          {/* Executives */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Executives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {executives.map((executive, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={executive.image} 
                      alt={executive.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{executive.name}</h4>
                  <p className="text-primary-400 font-semibold mb-2">{executive.role}</p>
                  <p className="text-gray-400 text-sm mb-3">{executive.specialization}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{executive.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Affiliates */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Affiliates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {affiliates.map((affiliate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-lg p-6"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{affiliate.name}</h4>
                  <p className="text-primary-400 font-semibold mb-2">{affiliate.role}</p>
                  <p className="text-gray-400 text-sm mb-2">{affiliate.specialization}</p>
                  <p className="text-gray-500 text-xs">{affiliate.affiliation}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Members */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="glass-effect rounded-lg p-6"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-primary-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-2">{member.specialization}</p>
                  <p className="text-gray-500 text-xs">{member.year}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Create the Future of Entertainment
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to build immersive experiences that captivate audiences? Join our team of creative 
              innovators pushing the boundaries of interactive entertainment and spatial computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
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
