import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Users, Calendar, Tag } from 'lucide-react';

const startups = [
  {
    id: 1,
    name: 'TechVision AI',
    description: 'AI-powered analytics platform for business intelligence',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
    founders: ['Sarah Johnson', 'Michael Chen'],
    category: 'Artificial Intelligence',
    yearFounded: 2023,
    website: '#'
  },
  {
    id: 2,
    name: 'EcoSolutions',
    description: 'Sustainable energy solutions for residential buildings',
    logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=500&q=80',
    founders: ['Emma Davis', 'James Wilson'],
    category: 'CleanTech',
    yearFounded: 2022,
    website: '#'
  },
  {
    id: 3,
    name: 'HealthTech',
    description: 'Digital healthcare platform for remote patient monitoring',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80',
    founders: ['David Kim', 'Lisa Chen'],
    category: 'Healthcare',
    yearFounded: 2023,
    website: '#'
  }
];

const categories = ['All', 'Artificial Intelligence', 'CleanTech', 'Healthcare', 'EdTech', 'FinTech'];

const Startups: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStartups = selectedCategory === 'All'
    ? startups
    : startups.filter(startup => startup.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Our Startups</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover innovative startups founded by our talented entrepreneurs
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredStartups.map((startup) => (
              <motion.div
                key={startup.id}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={startup.logo}
                    alt={startup.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{startup.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {startup.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-primary-500 mr-2" />
                      <span>Founders: {startup.founders.join(', ')}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-primary-500 mr-2" />
                      <span>Founded: {startup.yearFounded}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-5 h-5 text-primary-500 mr-2" />
                      <span>{startup.category}</span>
                    </div>
                  </div>
                  <motion.a
                    href={startup.website}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary w-full mt-6 inline-flex items-center justify-center"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Startups;