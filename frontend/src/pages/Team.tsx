import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
// import type { TeamMember } from '../types';
//core pics
import aashi from '../pics/aashi.jpg'
import ramit from '../pics/ramit.jpg'
import sneha from '../pics/sneha.jpg'
import yug from '../pics/yug.jpg'
import vishrut from '../pics/vishrut.jpg'
import shivansh from '../pics/shivansh.jpg'
import pushkar from '../pics/pushkar.jpg'
import aryan from '../pics/aryan.jpg'
//coordinators pics
import dhruv from '../pics/dhruv bb.jpg'
import ansh from '../pics/ansh.jpg'
import priya from '../pics/priya.png'
import skj from '../pics/skj.png'
import nalin from '../pics/nalin b.jpg'
import manas from '../pics/manas.jpg'
import sid from '../pics/siddharta.png'
import himanshu from '../pics/himanshu.png'
import sanchit from '../pics/sanchit.png'
import shubhashish from '../pics/Shubhashish.png'
import sarthak from '../pics/sarthak.jpg'
import nishant from '../pics/nishant.png'
import arnav from '../pics/arnav.png'
import aditya from '../pics/aditya.png'
import sujal from '../pics/sujal.jpg'
import hitesh from '../pics/hitesh.jpg'

//mentors pics
import nitin from '../pics/nitin.png'
import vaibhav from '../pics/vaibhav.png'
import bhaskar from '../pics/bhaskar.png'
import sukhvinder from '../pics/sukhvinder.png'
import vinay from '../pics/vinay.jpg'
import blank from '../pics/blank.webp'

type TeamMember = {
  id: string;
  name: string;
  role?: string;
  category: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    // email?: string;
    github?: string;
  };
};



const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarthak Jain',
    role: 'President',
    category: 'Core Team',
    image: sarthak,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sarthak-jain2902/',
      // email: 'sarthak.jain@ecellmait.com',
    },
  },
  {
    id: '2',
    name: 'Manas Ishwar',
    role: 'Vice President',
    category: 'Core Team',
    image: manas,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/manas-ishwar-910078303/',
      // email: 'manas.ishwar@ecellmait.com',
    },
  },
  {
    id: '3',
    name: 'Ansh Kapila',
    role: 'General Secretary',
    category: 'Core Team',
    image: ansh,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/anshkapila/',
      // email: 'ansh.kapila@ecellnsut.com',
    },
  },
  {
    id: '4',
    name: 'Dhruv Anand ',
    role: 'Joint Secretary',
    category: 'Core Team',
    image: dhruv,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/dhruv-anand-3595912a7/',
      // email: 'dhruv30.here@gmail.com',
    },
  },
  {
    id: '5',
    name: 'Priya Talreja',
    role: 'Treasurer',
    category: 'Core Team',
    image: priya,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/priya-talreja-a325b5249/',
      // email: 'priya.talreja@ecellmait.com',
    },
  },
  {
    id: '6',
    name: 'Nalin Khanna',
    role: 'Core Team Lead',
    category: 'Core Team',
    image: nalin,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/nalin-khanna-877a99246/',
      // email: 'nalin@ecellmait.com',
      github: 'https://github.com/Nalin-khanna',
    },
  },
  {
    id: '7',
    name: 'Shivam Kumar Jha',
    role: 'Logistic Head',
    category: 'Core Team',
    image: skj,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/shivam-kumar-jha-35686a238/',
      // email: '2004skj@gmail.com',
      github: 'https://github.com/Shivoo29',
    },
  },
  {
    id: '8',
    name: 'Sujal',
    role: 'Logistic Head',
    category: 'Core Team',
    image: sujal,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/chauhansujal/',
      // email: 'aakash@ecellmait.com',
    },
  },
  {
    id: '9',
    name: 'Aditya Rawat',
    role: 'R&D Head',
    category: 'Core Team',
    image: aditya,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/adityarwt/',
      // email: 'aditya.rawat@ecellmait.com',
    },
  },
  {
    id: '9',
    name: 'Arnav Pathak',
    role: 'R&D Head',
    category: 'Core Team',
    image: arnav,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/profile-of-arnav-pathak/',
      // email: 'arnav.pathak@ecellmait.com',
    },
  },
  {
    id: '10',
    name: 'Siddharth',
    role: 'Content Head',
    category: 'Core Team',
    image: sid,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/siddhartha-sharma-039895298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // email: 'siddharta@ecellmait.com',
    },
  },
  {
    id: '11',
    name: 'Subhashish Panda',
    role: 'Creative Head',
    category: 'Core Team',
    image: shubhashish,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/subhasishpanda25/',
      // email: 'shubhashish.panda@ecellmait.com',
    },
  },
  {
    id: '11',
    name: 'himanshu Vishwakarma',
    role: 'Creative Head',
    category: 'Core Team',
    image: himanshu,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/himanshu-vishwakarma-a3766a258/',
      // email: 'himanshu.vishwakarma@ecellmait.com',
    },
  },
  {
    id: '12',
    name: 'Hitesh Gaur',
    role: 'PR Head',
    category: 'Core Team',
    image: hitesh,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/hitesh-gaur-159240258/',
      // email: 'kartiksuri682002@gmail.com',
    },
  },
  {
    id: '12',
    name: 'Sanchit Kumar',
    role: 'PR Head',
    category: 'Core Team',
    image: sanchit,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sanchit-kumar-419132350/',
      // email: 'sanchit@ecellmait.com',
    },
  },
  {
    id: '12',
    name: 'Nishant Rao',
    role: 'PR Head',
    category: 'Core Team',
    image: nishant,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/nishant-rao-98a34a258/',
      // email: 'nishant.rao@ecellmait.com',
    },
  },
  {
    id: '16',
    name: 'Yug Raheja',
    role: 'Research & Development Lead',
    category: 'Coordinators',
    image: yug,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/yug-raheja/',
      // email: 'manas.ishwar@ecellmait.com',
    },
  },
  {
    id: '21',
    name: 'Sneha Sharma',
    role: 'Research & Development Lead',
    category: 'Coordinators',
    image: sneha,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sneha-sharma-59183b320/',
      // email: 'shubhashish.panda@ecellmait.com',
    },
  },
  {
    id: '18',
    name: 'Vishrut Gupta',
    role: 'Outreach Lead',
    category: 'Coordinators',
    image: vishrut,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/vishrut-gupta-3026a2232',
      // email: 'arnav.pathak@ecellmait.com',
    },
  },
  {
    id: '14',
    name: 'Ramit',
    role: 'Event Lead',
    category: 'Coordinators',
    image: ramit,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/anshika-chaubey-76b40a254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // email: 'ansh.kapila@ecellmait.com',
    },
  },
  {
    id: '13',
    name: 'Shivansh Sharma',
    role: 'Operation Lead',
    category: 'Coordinators',
    image: shivansh,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/shivanshsharma355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // email: 'dhruv30.here@gmail.com',
    },
  },
  
  {
    id: '20',
    name: 'Aashi Jain',
    role: 'Graphics Lead',
    category: 'Coordinators',
    image: aashi,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/aashi-jain-474b3529a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // email: '2004skj@gmail.com',
      // github: 'https://github.com/Shivoo29',
    },
  },
  {
    id: '24',
    name: 'Pushkar Taneja',
    role: 'Graphic Lead',
    category: 'Coordinators',
    image: pushkar,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/pushkar-taneja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // email: 'sarthak.jain@ecellmait.com',
    },
  },
  
  {
    id: '17',
    name: 'Aryan Kumar',
    role: 'Content Lead',
    category: 'Coordinators',
    image: aryan,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/aryan-kumar-650044250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // email: 'nalin@ecellmait.com',
      github: 'https://github.com/Nalin-khanna',
    },
  },

  {
    id: '31',
    name: 'Dr. Vinay Kumar Saini',
    role: 'Convener',
    category: 'Mentors',
    image: blank,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/vinaykumarsaini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // email: 'nalin@ecellmait.com',
      // github: 'https://github.com/Nalin-khanna',
    },
  },

  

  {
    id: '33',
    name: 'Dr. Bhaskar Kapoor',
    role: 'Member',
    category: 'Mentors',
    image: blank,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/dr-bhaskar-kapoor-6b4b7819/',
      // email: 'nalin@ecellmait.com',
      // github: 'https://github.com/Nalin-khanna',
    },
  },

  {
    id: '34',
    name: 'Dr. Deshdeep Gambhir',
    role: 'Member',
    category: 'Mentors',
    image: blank,
    socialLinks: {
      // linkedin: 'https://www.linkedin.com/in/aryan-kumar-650044250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // email: 'nalin@ecellmait.com',
      // github: 'https://github.com/Nalin-khanna',
    },
  },

  {
    id: '35',
    name: 'Dr. Siddharth',
    role: 'Member',
    category: 'Mentors',
    image: blank,
    socialLinks: {
      // linkedin: 'https://www.linkedin.com/in/aryan-kumar-650044250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // // email: 'nalin@ecellmait.com',
      // github: 'https://github.com/Nalin-khanna',
    },
  },

  {
    id: '36',
    name: 'Mr.Vaibhav Nijhawan',
    role: 'Member',
    category: 'Mentors',
    image: blank,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/vaibhav-nijhawan-20941021/',
      // email: 'nalin@ecellmait.com',
      // github: 'https://github.com/Nalin-khanna',
    },
  },

  {
    id: '37',
    name: 'Mr.Rohit Lakhane',
    role: 'Member',
    category: 'Mentors',
    image: blank,
    socialLinks: {
      // linkedin: 'https://www.linkedin.com/in/aryan-kumar-650044250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // // email: 'nalin@ecellmait.com',
      // github: 'https://github.com/Nalin-khanna',
    },
  },

   {
    id: '38',
    name: 'Dr.Sukhvinder Singh',
    role: 'Member',
    category: 'Mentors',
    image: blank,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/dr-sukhvinder-singh-9098039b',    
      // github: 'https://github.com/Nalin-khanna',
    },
  },

   {
    id: '39',
    name: 'Dr. Nitin Garg',
    role: 'Member',
    category: 'Mentors',
    image: blank,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/nitin-garg-3a847644/recent-activity/all/',
      // email: 'nalin@ecellmait.com',
      // github: 'https://github.com/Nalin-khanna',
    },
  },

   {
    id: '40',
    name: 'Mr.Ajay Tiwari',
    role: 'Member',
    category: 'Mentors',
    image: blank,
    socialLinks: {
      // linkedin: 'https://www.linkedin.com/in/aryan-kumar-650044250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // // email: 'nalin@ecellmait.com',
      // // github: 'https://github.com/Nalin-khanna',
    },
  },

   {
    id: '41',
    name: 'Dr.Shashi Kant Pandey',
    role: 'Member',
    category: 'Mentors',
    image: blank,
    socialLinks: {
      // linkedin: 'https://www.linkedin.com/in/aryan-kumar-650044250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // // email: 'nalin@ecellmait.com',
      // // github: 'https://github.com/Nalin-khanna',
    },
  },

  
];



const categories = ['Core Team', 'Mentors', 'Coordinators'];

const Team: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Core Team');

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
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
              className={`px-6 py-2 rounded-full ${selectedCategory === category ? 'bg-primary-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11"
          >
            {teamMembers
              .filter((member) => member.category === selectedCategory)
              .map((member) => (
            
           <motion.div key={member.id} whileHover={{ y: -10 }} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary-500 mb-4">{member.role}</p>
                    <div className="flex gap-4">
                      {member.socialLinks.linkedin && member.socialLinks.linkedin !== '#' && (
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {/* {member.socialLinks.email && (
                        <a href={`mailto:${member.socialLinks.email}`} className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      )} */}
                      {member.socialLinks.github && (
                        <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-700 transition-colors">
                          <Github className="w-5 h-5" />
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
