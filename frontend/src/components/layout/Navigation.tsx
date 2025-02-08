import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import type { NavLink } from '../../types';

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/team', label: 'Team' },
  { path: '/events', label: 'Events' },
  { path: '/resources', label: 'Resources' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/utils/edc_logo.png"
                alt="EDC Logo"
                className="h-8 w-8 rounded-full mr-2 object-cover hover:scale-110 transition-transform duration-200"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform duration-200"
              >
                EDC
              </motion.div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  location.pathname === path
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300'
                } hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`${
                location.pathname === path
                  ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-700 dark:text-gray-300'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;