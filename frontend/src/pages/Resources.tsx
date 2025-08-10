import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Link as LinkIcon } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'FIGMA IPO',
    // description: 'Comprehensive guide for starting your entrepreneurial journey',
    type: 'pdf',
    link: '/utils/figma.pdf',
    category: 'Guides'
  },
  {
    id: 2,
    title: 'LABUBU RESEARCH',
    // description: 'Comprehensive guide for starting your entrepreneurial journey',
    type: 'pdf',
    link: '/utils/labubu.pdf',
    category: 'Guides'
  }
];

const Resources: React.FC = () => {
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
            Access our curated collection of entrepreneurial resources.
          </p>
          <p className='mt-3 text-xl text-gray-600 dark:text-gray-300 '> <a href='https://chat.whatsapp.com/IQEkvhvfBkG8Zv8XiTvGlk' className='text-primary-500 hover:scale-150 transition-transform duration-200'>Join Our Community</a> for more opportunities and resources.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-8"
        >
          {resources.map((resource) => (
            <motion.a
              key={resource.id}
              href={resource.link}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-primary-500 mr-3" />
                  <h3 className="text-2xl font-bold">{resource.title}</h3>
                </div>
                {/* <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {resource.description}
                </p> */}
                <div className="flex items-center justify-between">
                  <span className="text-primary-500">
                    Access Resource
                    <LinkIcon className="w-4 h-4 ml-2 inline" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
