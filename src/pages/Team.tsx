import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
import type { TeamMember } from '../types';
//core pics
import ayush from '../pics/Ayush.png'
import jiya from '../pics/Jiya.png'
import akshat from '../pics/akshat.png'
import anushka from '../pics/ansuhka.png'
import anurag from '../pics/anurag.png'
import harprabh from '../pics/harprabh.png'
import harshit from '../pics/harshit.png'
import kartik from '../pics/kartik.png'
import rishab from '../pics/rishab.png'
import vansh from '../pics/vansh.png'
import varun from '../pics/varun.png'
import aakash from '../pics/Aakash.png'
//coordinators pics
import sarthak from '../pics/sarthak.png'
import ansh from '../pics/ansh.png'
import priya from '../pics/priya.png'
import skj from '../pics/skj.png'
import nalin from '../pics/nalin.png'
import manas from '../pics/manas.png'
import sid from '../pics/siddharta.png'
import himanshu from '../pics/himanshu.png'
import sanchit from '../pics/sanchit.png'
import shubhashish from '../pics/Shubhashish.png'
import dhruv from '../pics/dhruv.png'
import nishant from '../pics/nishant.png'
import arnav from '../pics/arnav.png'
import aditya from '../pics/aditya.png'


const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ayush Narayan Kamal',
    role: 'President',
    category: 'Core Team',
    image: ayush,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ayush-narayan-kamal-62b094229/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '2',
    name: 'Jiya Verma',
    role: 'Vice President',
    category: 'Core Team',
    image: jiya,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jiyaverma/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '3',
    name: 'Akshat Jindal',
    role: 'General Secretary',
    category: 'Core Team',
    image: akshat,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/akshat-jindal-4285b1208/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '4',
    name: 'Anushka Dubey',
    role: 'Treasurer',
    category: 'Core Team',
    image: anushka,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/anushka-dubey-0b9817231/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '5',
    name: 'Varun Punia',
    role: 'Core Team Lead',
    category: 'Core Team',
    image: varun,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/varun-punia-068841229/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '6',
    name: 'Rishabh',
    role: 'Event Head',
    category: 'Core Team',
    image: rishab,
    socialLinks: {
      linkedin: '#',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '7',
    name: 'Harprabh Singh',
    role: 'Logistic Head',
    category: 'Core Team',
    image: harprabh,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/harprabh-singh-42a9a5225/edit/forms/next-action/after-connect-add-position/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '8',
    name: 'Aakash',
    role: 'Logistic Head',
    category: 'Core Team',
    image: aakash,
    socialLinks: {
      linkedin: '#',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '9',
    name: 'Vansh',
    role: 'Logistic Head',
    category: 'Core Team',
    image: vansh,
    socialLinks: {
      linkedin: '#',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '10',
    name: 'Harshit',
    role: 'Content Head',
    category: 'Core Team',
    image: harshit,
    socialLinks: {
      linkedin: '#',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '11',
    name: 'Anurag Sahani',
    role: 'Creative Head',
    category: 'Core Team',
    image: anurag,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/anurag-sahani-145b03232/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '12',
    name: 'Kartik Suri',
    role: 'PR Head',
    category: 'Core Team',
    image: kartik,
    socialLinks: {
      linkedin: '#',
      gmail: 'https://www.gmail.com/',
    },
  },
  //Coordinators
  {
    id: '13',
    name: 'Sarthak Jain',
    role: 'Event Lead',
    category: 'Coordinators',
    image: sarthak,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sarthak-jain2902/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '14',
    name: 'Ansh Kapila',
    role: 'Graphics Lead',
    category: 'Coordinators',
    image: ansh,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/anshkapila/',
    },
  },
  {
    id: '15',
    name: 'Priya Talreja',
    role: 'Graphics Lead',
    category: 'Coordinators',
    image: priya,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/priya-talreja-a325b5249/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '16',
    name: 'Manas Ishwar',
    role: 'Content Lead',
    category: 'Coordinators',
    image: manas,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/manas-ishwar-910078303/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '17',
    name: 'Shubhashish Panda',
    role: 'Grapics',
    category: 'Coordinators',
    image: shubhashish,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/subhasishpanda25/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '18',
    name: 'Arnav Pathak',
    role: '',
    category: 'Coordinators',
    image: arnav,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/profile-of-arnav-pathak/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '19',
    name: 'Nishant Rao',
    role: '',
    category: 'Coordinators',
    image: nishant,
    socialLinks: {
      linkedin: '#',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '20',
    name: 'Shivam Kumar Jha',
    role: 'Research and Development',
    category: 'Coordinators',
    image: skj,
    socialLinks: {
      linkedin: '#',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '21',
    name: 'Nalin',
    role: 'Research and Development',
    category: 'Coordinators',
    image: nalin,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/nalin-khanna-877a99246/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '22',
    name: 'Aditya Rawat',
    role: 'Event',
    category: 'Coordinators',
    image: aditya,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/adityarwt/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '23',
    name: 'Siddharta',
    role: '',
    category: 'Coordinators',
    image: sid,
    socialLinks: {
      linkedin: '#',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '24',
    name: 'Dhruv Anand',
    role: 'Event',
    category: 'Coordinators',
    image: dhruv,
    socialLinks: {
      linkedin: '#',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '25',
    name: 'Himanshu Vishwakarma',
    role: '',
    category: 'Coordinators',
    image: himanshu,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/himanshu-vishwakarma-a3766a258/',
      gmail: 'https://www.gmail.com/',
    },
  },
  {
    id: '26',
    name: 'Sanchit',
    role: 'Content',
    category: 'Coordinators',
    image: sanchit,
    socialLinks: {
      linkedin: '#',
      gmail: 'https://www.gmail.com/',
    },
  },
];

const categories = ['Core Team', 'Coordinators'];

const Team: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Core Team');

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation and entrepreneurship
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${selectedCategory === category
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11"
          >
            {teamMembers
              .filter((member) => member.category === selectedCategory)
              .map((member) => (
                <motion.div
                  key={member.id}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary-500 mb-4">{member.role}</p>
                    <div className="flex gap-4">
                      {member.socialLinks.linkedin && (
                        <a href={member.socialLinks.linkedin} className="text-gray-600 dark:text-gray-300 hover:text-primary-500">
                          <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                            <Linkedin className="w-4 h-4 text-white" />
                          </div>
                        </a>
                      )}
                      {member.socialLinks.gmail && (
                        <a href={member.socialLinks.gmail} className="text-gray-600 dark:text-gray-300 hover:text-primary-500">
                          <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center">
                            <Mail className="w-4 h-4 text-white" />
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Team;
