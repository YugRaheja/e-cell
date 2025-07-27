import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Trophy } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'To foster entrepreneurial spirit and innovation among students through mentorship, resources, and opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Vision',
    description:
      'Creating a vibrant ecosystem of student entrepreneurs who drive positive change through innovation.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Building a strong network of mentors, investors, and industry experts to support student ventures.',
  },
  {
    icon: Trophy,
    title: 'Excellence',
    description:
      'Striving for excellence in everything we do, from ideation to execution.',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-[#0f172a] to-[#020617] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">About EDC</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            The Entrepreneurship Development Cell is a student-run organization
            dedicated to fostering the spirit of entrepreneurship among students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center backdrop-blur-sm bg-white/5 border border-white/10 hover:scale-105 hover:shadow-[0_0_12px_rgba(99,102,241,0.3)] hover:border-indigo-400 transition-all duration-300 ease-in-out p-8 rounded-2xl shadow-lg"
            >
              <value.icon className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {value.title}
              </h3>
              <p className="text-sm text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </div>
  );
};

export default About;
