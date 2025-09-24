import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Zap, Database, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

const AgastyaLab = () => {
  const executives = [
    {
      name: 'Dr. Robot Master',
      role: 'Lab Director',
      specialization: 'Robotics & Autonomous Systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Leading robotics expert with 12+ years of experience in autonomous systems and robotic intelligence.'
    },
    {
      name: 'Dr. IoT Innovator',
      role: 'Research Lead',
      specialization: 'IoT & Embedded Systems',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Pioneer in IoT technologies with breakthrough research in smart sensors and embedded computing systems.'
    }
  ];

  const affiliates = [
    {
      name: 'Prof. John Robotics',
      role: 'Faculty Advisor',
      specialization: 'Mechanical Engineering',
      affiliation: 'Department of Engineering'
    },
    {
      name: 'Dr. Sarah Sensors',
      role: 'Industry Partner',
      specialization: 'Sensor Technologies',
      affiliation: 'SmartTech Industries'
    },
    {
      name: 'Dr. Mike Embedded',
      role: 'Collaborating Researcher',
      specialization: 'Embedded Systems',
      affiliation: 'Embedded Research Labs'
    }
  ];

  const members = [
    {
      name: 'Alex Robot',
      role: 'PhD Student',
      specialization: 'Autonomous Navigation',
      year: '3rd Year'
    },
    {
      name: 'Emma Sensor',
      role: 'MS Student',
      specialization: 'Smart Sensors',
      year: '2nd Year'
    },
    {
      name: 'David IoT',
      role: 'Undergraduate Researcher',
      specialization: 'IoT Networks',
      year: 'Senior'
    },
    {
      name: 'Sophie Embedded',
      role: 'PhD Student',
      specialization: 'Embedded AI',
      year: '4th Year'
    },
    {
      name: 'Ryan Automation',
      role: 'MS Student',
      specialization: 'Industrial Automation',
      year: '1st Year'
    },
    {
      name: 'Maya Smart',
      role: 'Undergraduate Researcher',
      specialization: 'Smart Cities',
      year: 'Junior'
    }
  ];

  const researchAreas = [
    {
      title: 'Robotics',
      description: 'Developing intelligent robotic systems with advanced perception, planning, and control capabilities.',
      icon: Cpu,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Internet of Things',
      description: 'Building connected IoT ecosystems with smart sensors, edge computing, and data analytics.',
      icon: Wifi,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Embedded Systems',
      description: 'Designing efficient embedded computing platforms for real-time applications and edge intelligence.',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Smart Environments',
      description: 'Creating intelligent environments that adapt and respond to human needs through automation.',
      icon: Database,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Cpu className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Agastya Lab
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Robotics, IoT & Embedded Systems
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Building intelligent systems that bridge the physical and digital worlds. We develop advanced robotics, 
              IoT solutions, and embedded systems that create smarter, more connected environments for homes, 
              cities, and industries.
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
              To advance the field of robotics, IoT, and embedded systems through innovative research in autonomous 
              systems, smart sensors, and intelligent automation. We develop practical solutions that enhance human 
              capabilities, improve efficiency, and create sustainable smart environments that benefit society and 
              industry.
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
              Research <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our research spans the exciting domains of robotics, IoT, and embedded systems
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
              Our <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the engineers building the intelligent systems of tomorrow
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
              Build the Future of Automation
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to create intelligent systems that transform how we live and work? Join our team of 
              robotics and IoT innovators building the smart world of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                View Our Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AgastyaLab;
