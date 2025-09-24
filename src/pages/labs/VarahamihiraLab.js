import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Zap, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

const VarahamihiraLab = () => {
  const executives = [
    {
      name: 'Dr. Cloud Architect',
      role: 'Lab Director',
      specialization: 'Distributed Systems & Cloud Computing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Leading expert in cloud computing with 12+ years of experience in building scalable distributed systems.'
    },
    {
      name: 'Dr. Sarah Microservices',
      role: 'Research Lead',
      specialization: 'Microservices & Containerization',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Pioneer in microservices architecture with breakthrough research in container orchestration and service mesh technologies.'
    }
  ];

  const affiliates = [
    {
      name: 'Prof. John Kubernetes',
      role: 'Faculty Advisor',
      specialization: 'Cloud Infrastructure',
      affiliation: 'Department of Computer Science'
    },
    {
      name: 'Dr. Mike AWS',
      role: 'Industry Partner',
      specialization: 'Cloud Platforms',
      affiliation: 'Amazon Web Services'
    },
    {
      name: 'Dr. Lisa Docker',
      role: 'Collaborating Researcher',
      specialization: 'Container Technologies',
      affiliation: 'Docker Research Labs'
    }
  ];

  const members = [
    {
      name: 'Alex Container',
      role: 'PhD Student',
      specialization: 'Container Orchestration',
      year: '3rd Year'
    },
    {
      name: 'Emma Serverless',
      role: 'MS Student',
      specialization: 'Serverless Computing',
      year: '2nd Year'
    },
    {
      name: 'David DevOps',
      role: 'Undergraduate Researcher',
      specialization: 'DevOps & CI/CD',
      year: 'Senior'
    },
    {
      name: 'Sophie Edge',
      role: 'PhD Student',
      specialization: 'Edge Computing',
      year: '4th Year'
    },
    {
      name: 'Ryan Network',
      role: 'MS Student',
      specialization: 'Network Virtualization',
      year: '1st Year'
    },
    {
      name: 'Maya Storage',
      role: 'Undergraduate Researcher',
      specialization: 'Distributed Storage',
      year: 'Junior'
    }
  ];

  const researchAreas = [
    {
      title: 'Cloud Computing',
      description: 'Developing next-generation cloud platforms with advanced virtualization, auto-scaling, and resource optimization.',
      icon: Cloud,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Distributed Systems',
      description: 'Building fault-tolerant, scalable distributed systems with advanced consensus algorithms and load balancing.',
      icon: Server,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Microservices Architecture',
      description: 'Designing and implementing microservices ecosystems with service discovery, API gateways, and monitoring.',
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Edge Computing',
      description: 'Pioneering edge computing solutions for low-latency applications and IoT device management.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Varahamihira Lab
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Cloud Computing & Distributed Systems
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Building the infrastructure of tomorrow through cutting-edge cloud computing and distributed systems research. 
              We develop scalable, fault-tolerant platforms that power the next generation of applications and services 
              in our increasingly connected world.
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
              To advance the field of cloud computing and distributed systems through innovative research in scalability, 
              fault tolerance, and resource optimization. We develop next-generation infrastructure technologies that 
              enable seamless, efficient, and reliable computing at global scale, supporting the growing demands of 
              modern applications and services.
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
              Research <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our research spans the critical domains of cloud computing and distributed systems infrastructure
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
              Our <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the architects building the infrastructure of the future
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
              Build the Cloud of Tomorrow
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to shape the future of cloud computing? Join our team of infrastructure innovators 
              building scalable, reliable systems that power the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                View Our Systems
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VarahamihiraLab;
