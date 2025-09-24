import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Zap, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

const BhaskaracharyaLab = () => {
  const executives = [
    {
      name: 'Dr. Security Master',
      role: 'Lab Director',
      specialization: 'Cybersecurity & Cryptography',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Leading cybersecurity expert with 15+ years of experience in threat analysis and cryptographic systems.'
    },
    {
      name: 'Dr. Blockchain Pioneer',
      role: 'Research Lead',
      specialization: 'Blockchain & Web3 Technologies',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Pioneer in blockchain technology with breakthrough research in decentralized systems and smart contracts.'
    }
  ];

  const affiliates = [
    {
      name: 'Prof. John Crypto',
      role: 'Faculty Advisor',
      specialization: 'Cryptography',
      affiliation: 'Department of Computer Science'
    },
    {
      name: 'Dr. Sarah Security',
      role: 'Industry Partner',
      specialization: 'Cybersecurity',
      affiliation: 'CyberDefense Corp'
    },
    {
      name: 'Dr. Mike Blockchain',
      role: 'Collaborating Researcher',
      specialization: 'Distributed Ledger',
      affiliation: 'Blockchain Research Institute'
    }
  ];

  const members = [
    {
      name: 'Alex Hacker',
      role: 'PhD Student',
      specialization: 'Penetration Testing',
      year: '3rd Year'
    },
    {
      name: 'Emma Crypto',
      role: 'MS Student',
      specialization: 'Cryptographic Protocols',
      year: '2nd Year'
    },
    {
      name: 'David Smart',
      role: 'Undergraduate Researcher',
      specialization: 'Smart Contracts',
      year: 'Senior'
    },
    {
      name: 'Sophie DeFi',
      role: 'PhD Student',
      specialization: 'Decentralized Finance',
      year: '4th Year'
    },
    {
      name: 'Ryan Network',
      role: 'MS Student',
      specialization: 'Network Security',
      year: '1st Year'
    },
    {
      name: 'Maya Privacy',
      role: 'Undergraduate Researcher',
      specialization: 'Privacy-Preserving Tech',
      year: 'Junior'
    }
  ];

  const researchAreas = [
    {
      title: 'Cybersecurity',
      description: 'Developing advanced security frameworks, threat detection systems, and incident response protocols.',
      icon: Shield,
      color: 'from-red-500 to-rose-500'
    },
    {
      title: 'Blockchain Technology',
      description: 'Building next-generation blockchain platforms with improved scalability, security, and efficiency.',
      icon: Lock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web3 Applications',
      description: 'Creating decentralized applications and protocols that enable the next generation of the internet.',
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cryptographic Systems',
      description: 'Designing and implementing advanced cryptographic protocols for secure communication and data protection.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-rose-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                Bhaskaracharya Lab
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Cybersecurity, Blockchain & Web3
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Securing the digital future through advanced cybersecurity research and blockchain innovation. 
              We develop cutting-edge security solutions, decentralized systems, and Web3 technologies that 
              protect and empower users in an increasingly connected world.
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
              To advance the field of cybersecurity and blockchain technology through innovative research in threat 
              detection, cryptographic systems, and decentralized applications. We develop secure, privacy-preserving 
              solutions that protect digital assets and enable trustless interactions in the Web3 ecosystem, 
              ensuring a safer and more decentralized future for all.
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
              Research <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our research spans the critical domains of cybersecurity and blockchain technology
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
              Our <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the security experts and blockchain pioneers protecting the digital future
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
              Secure the Digital Future
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to defend against cyber threats and build the decentralized web? Join our team of 
              security experts and blockchain innovators creating a safer digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                View Our Security Tools
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BhaskaracharyaLab;
