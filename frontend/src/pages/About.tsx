import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Trophy } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To foster entrepreneurial spirit and innovation among students through mentorship, resources, and opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Vision',
    description: 'Creating a vibrant ecosystem of student entrepreneurs who drive positive change through innovation.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a strong network of mentors, investors, and industry experts to support student ventures.',
  },
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'Striving for excellence in everything we do, from ideation to execution.',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">About EDC</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The Entrepreneurship Development Cell is a student-run organization dedicated to fostering the spirit of entrepreneurship among students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <value.icon className="w-12 h-12 mx-auto mb-4 text-primary-500" />
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-bold">2018</div>
              <div>Establishment of EDC with a small team of passionate students</div>
            </div>
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-bold">2019</div>
              <div>Launched first startup incubation program with 10 startups</div>
            </div>
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-bold">2020</div>
              <div>Expanded to virtual mentorship and online events during pandemic</div>
            </div>
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-bold">2021</div>
              <div>Established partnerships with leading industry players</div>
            </div>
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-bold">2022</div>
              <div>Reached milestone of 50+ successful startup launches</div>
            </div>
            <div className="flex items-start">
              <div className="w-24 flex-shrink-0 font-bold">2023</div>
              <div>Expanded to international entrepreneurship programs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;