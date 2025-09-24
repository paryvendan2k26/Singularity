import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Lightbulb, Zap, Database, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

const NavyaVigyanLab = () => {
  const executives = [
    {
      name: 'Dr. Innovation Leader',
      role: 'Lab Director',
      specialization: 'Interdisciplinary Research',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Leading interdisciplinary researcher with 15+ years of experience in experimental technology and innovation.'
    },
    {
      name: 'Dr. Future Tech',
      role: 'Research Lead',
      specialization: 'Experimental Technology',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Pioneer in experimental technologies with breakthrough research in emerging tech and interdisciplinary applications.'
    }
  ];

  const affiliates = [
    {
      name: 'Prof. John Innovation',
      role: 'Faculty Advisor',
      specialization: 'Technology Innovation',
      affiliation: 'Department of Engineering'
    },
    {
      name: 'Dr. Sarah Future',
      role: 'Industry Partner',
      specialization: 'Emerging Technologies',
      affiliation: 'FutureTech Industries'
    },
    {
      name: 'Dr. Mike Experimental',
      role: 'Collaborating Researcher',
      specialization: 'Experimental Design',
      affiliation: 'Innovation Research Institute'
    }
  ];

  const members = [
    {
      name: 'Alex Innovator',
      role: 'PhD Student',
      specialization: 'Biotech Integration',
      year: '3rd Year'
    },
    {
      name: 'Emma Experimental',
      role: 'MS Student',
      specialization: 'Nano Technology',
      year: '2nd Year'
    },
    {
      name: 'David Future',
      role: 'Undergraduate Researcher',
      specialization: 'Space Technology',
      year: 'Senior'
    },
    {
      name: 'Sophie Interdisciplinary',
      role: 'PhD Student',
      specialization: 'AI-Bio Interface',
      year: '4th Year'
    },
    {
      name: 'Ryan Emerging',
      role: 'MS Student',
      specialization: 'Quantum Materials',
      year: '1st Year'
    },
    {
      name: 'Maya Experimental',
      role: 'Undergraduate Researcher',
      specialization: 'Sustainable Tech',
      year: 'Junior'
    }
  ];

  const researchAreas = [
    {
      title: 'Interdisciplinary Research',
      description: 'Bridging multiple scientific disciplines to create innovative solutions for complex global challenges.',
      icon: FlaskConical,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Experimental Technology',
      description: 'Developing cutting-edge experimental technologies that push the boundaries of what is possible.',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Emerging Technologies',
      description: 'Exploring and developing next-generation technologies that will shape the future of humanity.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Innovation Systems',
      description: 'Creating systematic approaches to innovation and technology transfer for maximum impact.',
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <FlaskConical className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Navya Vigyan Lab
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Interdisciplinary & Experimental Technology
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Pushing the boundaries of innovation through interdisciplinary research and experimental technology. 
              We explore the convergence of multiple scientific disciplines to create breakthrough solutions that 
              address complex challenges and shape the future of technology.
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
              To pioneer breakthrough innovations through interdisciplinary research and experimental technology development. 
              We bring together diverse scientific disciplines to tackle complex global challenges, creating novel solutions 
              that transcend traditional boundaries and open new possibilities for human advancement and technological progress.
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
              Research <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our research spans multiple disciplines, creating innovative solutions at the intersection of technology and science
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
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the interdisciplinary innovators pushing the boundaries of experimental technology
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
              Pioneer the Future of Innovation
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to break boundaries and create breakthrough innovations? Join our interdisciplinary team 
              of experimental technology pioneers shaping the future of science and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                View Our Innovations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NavyaVigyanLab;
