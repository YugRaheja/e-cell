import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Video, Link as LinkIcon, PenTool as Tool } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Startup Guide 2024',
    description: 'Comprehensive guide for starting your entrepreneurial journey',
    type: 'pdf',
    link: '#',
    category: 'Guides'
  },
  {
    id: 2,
    title: 'Pitch Deck Workshop',
    description: 'Learn how to create compelling pitch decks for investors',
    type: 'video',
    link: '#',
    category: 'Workshops'
  },
  {
    id: 3,
    title: 'Business Model Canvas',
    description: 'Interactive tool for business model development',
    type: 'tool',
    link: '#',
    category: 'Tools'
  },
  {
    id: 4,
    title: 'Funding Strategies',
    description: 'Expert insights on securing startup funding',
    type: 'article',
    link: '#',
    category: 'Articles'
  }
];

const categories = ['All', 'Guides', 'Workshops', 'Tools', 'Articles'];

const getIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return FileText;
    case 'video':
      return Video;
    case 'tool':
      return Tool;
    default:
      return LinkIcon;
  }
};

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredResources = selectedCategory === 'All'
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access our curated collection of entrepreneurial resources
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
            {filteredResources.map((resource) => {
              const Icon = getIcon(resource.type);
              return (
                <motion.a
                  key={resource.id}
                  href={resource.link}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Icon className="w-8 h-8 text-primary-500 mr-3" />
                      <h3 className="text-2xl font-bold">{resource.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-100">
                        {resource.category}
                      </span>
                      <span className="text-primary-500">
                        Access Resource
                        <LinkIcon className="w-4 h-4 ml-2 inline" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Resources;