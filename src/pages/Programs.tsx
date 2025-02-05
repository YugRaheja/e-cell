import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Award } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Startup Incubation Program',
    description: 'A 6-month intensive program to help student startups go from idea to market.',
    duration: '6 months',
    benefits: [
      'Mentorship from industry experts',
      'Seed funding up to $10,000',
      'Workspace and resources',
      'Networking opportunities'
    ],
    icon: BookOpen,
    status: 'ongoing'
  },
  {
    id: 2,
    title: 'Innovation Bootcamp',
    description: 'A 2-week intensive bootcamp to learn entrepreneurship fundamentals.',
    duration: '2 weeks',
    benefits: [
      'Hands-on workshops',
      'Industry expert sessions',
      'Project-based learning',
      'Certificate of completion'
    ],
    icon: Clock,
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'Mentor Connect',
    description: 'Connect with industry mentors for guidance and support.',
    duration: '3 months',
    benefits: [
      'One-on-one mentoring',
      'Industry insights',
      'Career guidance',
      'Network building'
    ],
    icon: Users,
    status: 'ongoing'
  },
  {
    id: 4,
    title: 'Startup Competition',
    description: 'Annual competition to showcase and reward innovative startup ideas.',
    duration: '1 month',
    benefits: [
      'Cash prizes',
      'Investor exposure',
      'Media coverage',
      'Mentorship opportunities'
    ],
    icon: Award,
    status: 'upcoming'
  }
];

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our comprehensive programs designed to nurture and support the next generation of entrepreneurs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <program.icon className="w-8 h-8 text-primary-500 mr-3" />
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    program.status === 'ongoing' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                  }`}>
                    {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Duration: {program.duration}</h4>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {program.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{benefit}</li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary w-full"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;