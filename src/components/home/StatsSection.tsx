import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Calendar, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'Students Mentored',
  },
  {
    icon: Rocket,
    value: '50+',
    label: 'Startups Launched',
  },
  {
    icon: Calendar,
    value: '100+',
    label: 'Events Organized',
  },
  {
    icon: Award,
    value: '20+',
    label: 'Awards Won',
  },
];

const StatsSection: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-500" />
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-3xl font-bold mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection