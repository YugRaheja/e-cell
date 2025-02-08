import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '30 Best Pieces of Advice for Entrepreneurs',
    excerpt: 'Expert Advice to Elevate Your Entrepreneurial Journey and Achieve Success',
    content: '',
    author: {
      name: '',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    },
    date: '2024-03-01',
    category: 'Startup Tips',
    readTime: 5,
    image: 'https://review.firstround.com/content/images/size/w2000/format/webp/2024/01/Screenshot-2024-01-25-at-11.23.52-AM.png',
    websiteUrl: 'https://review.firstround.com/the-30-best-pieces-of-advice-for-entrepreneurs-in-2023/',

    
  },
  
  {
    id: '2',
    title: 'Why Customer Service Matters More Than Ever',
    excerpt: 'How Exceptional Support Drives Loyalty, Growth, and Business Success',
    content: '',
    author: {
      name: '',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    },
    date: '2024-03-01',
    category: 'Startup Tips',
    readTime: 5,
    image: 'https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899134.jpg',
    websiteUrl: 'https://blog.groovehq.com/why-customer-service-is-important',

    
  },

  {
    id: '3',
    title: 'Investing: The Ultimate Guide to Wealth Building',
    excerpt: 'Smart Strategies, Risks, and Opportunities for Financial Success',
    content: '',
    author: {
      name: '',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    },
    date: '2024-03-01',
    category: 'Startup Tips',
    readTime: 5,
    image: 'https://wallpapers.com/images/hd/illustrates-the-qualities-of-investment-umz2rk1n9aa0ix0l.jpg',
    websiteUrl: 'https://www.investopedia.com/terms/i/investing.asp',

    
  },

  
];

// const categories = ['All', 'Startup Tips', 'Technology', 'Sustainability', 'Innovation'];

const Blog: React.FC = () => {

  const filteredPosts = blogPosts;
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights and stories from the entrepreneurial world
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
        
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary w-full"
                    href={post.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check It Out
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;