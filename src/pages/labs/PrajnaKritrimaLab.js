import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Zap, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

const PrajnaKritrimaLab = () => {
  const executives = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Lab Director',
      specialization: 'Deep Learning & Neural Networks',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Leading researcher in deep learning with 10+ years of experience in neural network architectures.'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Research Lead',
      specialization: 'Generative AI & LLMs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in large language models and generative AI systems with multiple publications in top-tier conferences.'
    }
  ];

  const affiliates = [
    {
      name: 'Prof. Michael Zhang',
      role: 'Faculty Advisor',
      specialization: 'Computer Vision',
      affiliation: 'Department of Computer Science'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Industry Partner',
      specialization: 'MLOps & Production Systems',
      affiliation: 'TechCorp AI Research'
    },
    {
      name: 'Dr. James Park',
      role: 'Collaborating Researcher',
      specialization: 'Natural Language Processing',
      affiliation: 'NLP Research Institute'
    }
  ];

  const members = [
    {
      name: 'Maria Garcia',
      role: 'PhD Student',
      specialization: 'Computer Vision',
      year: '3rd Year'
    },
    {
      name: 'David Kim',
      role: 'MS Student',
      specialization: 'Reinforcement Learning',
      year: '2nd Year'
    },
    {
      name: 'Lisa Wang',
      role: 'Undergraduate Researcher',
      specialization: 'Generative Models',
      year: 'Senior'
    },
    {
      name: 'Tom Wilson',
      role: 'PhD Student',
      specialization: 'Federated Learning',
      year: '4th Year'
    },
    {
      name: 'Anna Patel',
      role: 'MS Student',
      specialization: 'Explainable AI',
      year: '1st Year'
    },
    {
      name: 'Chris Brown',
      role: 'Undergraduate Researcher',
      specialization: 'Deep Reinforcement Learning',
      year: 'Junior'
    }
    
  ];

  const researchAreas = [
    {
      title: 'Deep Learning Architectures',
      description: 'Developing novel neural network architectures for improved performance and efficiency.',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Generative AI Systems',
      description: 'Creating advanced generative models for text, image, and multimodal content generation.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Machine Learning Infrastructure',
      description: 'Building scalable ML pipelines and MLOps systems for production deployment.',
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Ethics & Fairness',
      description: 'Ensuring responsible AI development through bias detection and fairness metrics.',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Prajna Kritrima Lab
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              AI/ML, Deep Learning & Generative AI
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of artificial intelligence through cutting-edge research in deep learning, 
              neural networks, and generative AI systems. We develop intelligent solutions that push the 
              boundaries of what machines can learn and create.
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
              To advance the field of artificial intelligence through innovative research in machine learning, 
              deep learning, and generative AI. We aim to create intelligent systems that are not only powerful 
              but also ethical, explainable, and beneficial to society. Our research spans from fundamental 
              theoretical advances to practical applications that solve real-world problems.
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
              Research <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our research spans multiple domains within artificial intelligence and machine learning
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
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the brilliant minds driving innovation in artificial intelligence
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
              Join Our Research
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Interested in contributing to cutting-edge AI research? We welcome passionate researchers 
              and students to join our mission of advancing artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                View Publications
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrajnaKritrimaLab;
