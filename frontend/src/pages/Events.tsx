import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const upcomingEvents = [
  {
  id: 6,
  title: 'Orientation Session',
  date: ' ',
  time: '11:00 AM',
  location: 'Auditorium',
  description: 'The Orientation of the Entrepreneurship Development Cell (EDC) at MAIT introduces students to the world of startups, innovation, and business opportunities.',
  image: '/utils/IMG_1921.jpg',
  category: 'Session',
  highlights: [
    '✅ Introduction to EDC’s vision, mission, and initiatives.',
    '✅ Insights from successful entrepreneurs and industry leaders.',
    '✅ Workshops on ideation, startup development, and business strategies.',
    '✅ Networking with mentors, investors, and like-minded peers.',
    '✅ Exciting opportunities for internships, projects, and funding support.'
  ],
  outcomes: '🚀 Increased Awareness: Students gained insights into entrepreneurship and startup ecosystems.🌟 Active Participation: More students joined EDC, engaging in upcoming events and activities.🤝 Networking & Mentorship: Attendees connected with industry leaders and startup mentors.💡 Idea Generation: Encouraged students to brainstorm and develop their entrepreneurial ideas.'
},
 
   
];

const pastEvents = [
  {
    id: 1,
    title: (
      <>
        <a
          href="https://zennith-esummit.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="zennith-link"
        >
          ZENITH
        </a>{' '}
        : Official E-SUMMIT of MAIT
      </>
    ),
    date: '2025-03-26',
    time: '09:00 AM',
    location: 'MAIT Campus',
    description: 'E-Summit at MAIT is a premier entrepreneurship event designed to foster innovation, leadership, and startup culture among students. It brings together industry leaders, startup founders, investors, and aspiring entrepreneurs through keynote sessions, panel discussions, workshops, and pitch competitions. The summit provides a platform for networking, mentorship, and funding opportunities, empowering students to turn their ideas into successful ventures. 🚀',
    image: '/utils/zennith_poster.jpg',
    category: 'E-SUMMIT'
  },
  {
    id: 3,
    title: 'GATE 101: The Ultimate Guide-in collab with PW',
    date: '2025-03-18',
    time: '11:00 AM',
    location: 'MAIT Campus',
    description: 'EDC MAIT invites you to GATE 101,a workshop tailored to help you ace GATE exam! Join us for an insightful session with Kuldeep Singh Rathore, an expert with exceptional credentials.',
    image: '/utils/IMG_1265.png',
    category: 'Session',
    highlights: []

  },
  {
    id: 2,
    title: 'Startup Expo: Alumni Meet Up',
    date: '2025-02-22',
    time: '10:00 AM',
    location: 'MAIT Campus',
    description: 'As part of alumni meetup, we are hosting an exclusive startup expo-a free platform for startups and companies To showcase their innovation and expertise. ',
    image: '/utils/uncle.png',
    category: 'Session',
    highlights: [
      'As a valued alumnus of MAIT, your prsence would be an inspiration to our students and budding entrepreneurs. ',
      'Why Participate?',
      '1. Showcase Innovation- present your unique solutions and achievements',
      '2. Network Strategically- Connect with budding entrepreneurs, investors, and industry leaders',
      '3. Inspire the future- position your brand at the forefront of entrepreneurship'
    ],
    outcomes: '🚀 Enhanced Awareness: Students gained a deeper understanding of entrepreneurial opportunities.🌟 Active Engagement: Increased participation in startup-related initiatives and EDC programs.🤝 Networking & Mentorship: Attendees connected with experienced entrepreneurs and investors.💡 Idea Development: Encouraged students to think innovatively and take the first step toward'
  },
  
  {
    id: 4,
    title: 'The Start Up Mindset',
    date: '2024-10-22',
    time: '11:00 AM',
    location: 'MAIT Campus',
    description: 'Workshop topic: START YOUR START-UP IN COLLEGE- specifically focusing on turning Ideas into Action and from Vision to Venture.',
    image: '/utils/20241022_115450.jpg',
    category: 'Workshop',
    highlights: [
      '✅ Introduction to entrepreneurship and the startup ecosystem.',
      '✅ Keynote sessions by successful entrepreneurs and industry leaders.',
      '✅ Workshops on ideation, business models, and fundraising.',
      '✅ Networking opportunities with mentors, investors, and startup founders.',
      '✅ Exciting opportunities for internships, projects, and startup support.'
    ],
    outcomes: '🚀 Enhanced Awareness: Students gained a deeper understanding of entrepreneurial opportunities.🌟 Active Engagement: Increased participation in startup-related initiatives and EDC programs.🤝 Networking & Mentorship: Attendees connected with experienced entrepreneurs and investors.💡 Idea Development: Encouraged students to think innovatively and take the first step toward'
  },
  
  {
    id: 5,
    title: 'Entrepreneurship Awareness Drive (EAD)',
    date: '2024-10-10',
    time: '10:00 AM',
    location: 'MAIT Campus',
    description: 'The Entrepreneurship Awareness Drive (EAD) at MAIT inspires students to explore entrepreneurship by providing insights into startups, innovation, and business opportunities.',
    image: '/utils/IMG_1274.jpg',
    category: 'Session',
    highlights: [
      '✅ Introduction to entrepreneurship and the startup ecosystem.',
      '✅ Keynote sessions by successful entrepreneurs and industry leaders.',
      '✅ Workshops on ideation, business models, and fundraising.',
      '✅ Networking opportunities with mentors, investors, and startup founders.',
      '✅ Exciting opportunities for internships, projects, and startup support.'
    ],
    outcomes: '🚀 Enhanced Awareness: Students gained a deeper understanding of entrepreneurial opportunities.🌟 Active Engagement: Increased participation in startup-related initiatives and EDC programs.🤝 Networking & Mentorship: Attendees connected with experienced entrepreneurs and investors.💡 Idea Development: Encouraged students to think innovatively and take the first step toward'
  },
  {
  id: 6,
  title: 'Orientation Session',
  date: '2024-09-11',
  time: '11:00 AM',
  location: 'Auditorium',
  description: 'The Orientation of the Entrepreneurship Development Cell (EDC) at MAIT introduces students to the world of startups, innovation, and business opportunities.',
  image: '/utils/IMG_1921.jpg',
  category: 'Meeting',
  highlights: [
    '✅ Introduction to EDC’s vision, mission, and initiatives.',
    '✅ Insights from successful entrepreneurs and industry leaders.',
    '✅ Workshops on ideation, startup development, and business strategies.',
    '✅ Networking with mentors, investors, and like-minded peers.',
    '✅ Exciting opportunities for internships, projects, and funding support.'
  ],
  outcomes: '🚀 Increased Awareness: Students gained insights into entrepreneurship and startup ecosystems.🌟 Active Participation: More students joined EDC, engaging in upcoming events and activities.🤝 Networking & Mentorship: Attendees connected with industry leaders and startup mentors.💡 Idea Generation: Encouraged students to brainstorm and develop their entrepreneurial ideas.'
},
{
  id: 7,
  title: 'Hacnovate',
  date: '2024-04-25',
  time: '09:00 AM',
  location: 'MAIT Campus',
  description: 'Hacknovate is a premier hackathon at MAIT that challenges innovators and developers to create cutting-edge solutions through coding, creativity, and collaboration.',
  image: '/utils/hacknovate final.jpg',
  category: 'Competetion',
  highlights: [
    '✅ 24/36-hour coding challenge with real-world problem statements.',
    '✅ Workshops & mentorship from industry experts.',
    '✅ Exciting prizes, internships, and funding opportunities for winners.',
    '✅ Networking with tech leaders, startups, and fellow innovators.',
    '✅ Open to students, developers, and tech enthusiasts from all backgrounds.'
  ],
  outcomes: '🚀 Successful Prototypes & Solutions: Participants built innovative tech solutions addressing industry challenges. 🏆 Winning Teams Recognized: Top teams received cash prizes, mentorship, and internship offers. 🤝 Networking & Collaboration: Students connected with industry leaders, startups, and fellow tech enthusiasts.💡 Skill Enhancement: Participants gained hands-on experience in coding, problem-solving, and teamwork.'
},
{
id: 12,
  title: 'Envisage 24',
  date: '2024-02-02',
  time: '11:00 AM',
  location: 'MSIT Campus',
  description: 'Envisage was an exciting event focused on innovation and entrepreneurship, where participants were required to pitch their ideas and present them in front of an esteemed panel.', 
  image: '/utils/Picture1.png',
  category: 'Competetion',
  highlights: [
    'Participating teams from EDC society were -',
    '1.	MATRIX - The team comprised Subhashish Panda, Anurag Sahani, Pratishtha Gupta, and Shivam Kumar Jha.',
    '2.	Epsilon: The team included Manan Anand, Hitesh Gaur, and Himanshu.', 
    ' The event started with an inspiring speaker session by Palakh Khanna, the founder of Break The Ice. Palakh shared her entrepreneurial journey, emphasizing the importance of resilience, creativity, and the power of networking in building a successful startup. Following the speaker session, the presentation round began. MATRIX team presented an innovative tech solution aimed at turbulence faced by the passengers during airplane ride. The Epsilon team introduced a unique eco-friendly product .',
   ' The participation of the Matrix and Epsilon teams from the EDC society was a testament to the talent and innovation nurtured within the community. The event not only fostered a spirit of competition but also encouraged collaboration and learning among the participants'


  ],
  outcomes: '🚀 Successful Prototypes & Solutions: Participants built innovative tech solutions addressing industry challenges. 🏆 Winning Teams Recognized: Top teams received cash prizes, mentorship, and internship offers. 🤝 Networking & Collaboration: Students connected with industry leaders, startups, and fellow tech enthusiasts.💡 Skill Enhancement: Participants gained hands-on experience in coding, problem-solving, and teamwork.'
},
{
id: 11,
  title: 'Entrepreneurship And Innovation',
  date: '2022-02-22',
  time: '03:30 PM',
  location: 'MAIT Campus',
  description: 'Ms. Aggarwal shared the wide experience of her start-up, enabling us with the difficulties which she faced during the journey till now. She discussed the attitude one should have to be an entrepreneur, pointing to being a great problem-solver & motivated leader. She inspired the young minds, highlighting how she managed to carry a successful business at a young age, not being from a Tier-1 college, she actually denied offers from companies like Google and built a fabulous 122 % growth year on year as well as generating a revenue of about 1cr in revenue. She also discussed how to develop yourself and what values we should inculcate in ourselves in order to become an entrepreneur.', 
  image: '/utils/Picture5.png',
  category: 'Competetion',
  highlights: [
     'Speaker: Arushi Agarwal (Co-Founder and CEO TalentDecrypt)',
     'Topic: Entrepreneurship and Innovation as Career Opportunity', 
     'Platform: MS Teams',
     'Collaboration: Institute Innovation Council, MAIT',
,

  ],
  outcomes: '🚀 Successful Prototypes & Solutions: Participants built innovative tech solutions addressing industry challenges. 🏆 Winning Teams Recognized: Top teams received cash prizes, mentorship, and internship offers. 🤝 Networking & Collaboration: Students connected with industry leaders, startups, and fellow tech enthusiasts.💡 Skill Enhancement: Participants gained hands-on experience in coding, problem-solving, and teamwork.'
},

{
  id: 9,
  title: 'Start Up Turn',
  date: '2021-04-21',
  time: '03:00 PM',
  location: 'MAIT Campus',
  description: 'Mr. Trivedi and Mr. Khare explained to everyone the importance of having a mentor and the significant role a mentor can play in an individual’s success. He also mentioned the ways through which one can approach a mentor.  MentorKart provides a platform to get to know and interact with mentors from various fields.',
  image: '/utils/Picture2.png',
  category: 'Competetion',
  highlights: [
    'Speaker: Saurabh Trivedi (Co-Founder Boudhik Ventures)',
    ' Speaker 2: Ashish Khare (Founder & CEO MentorKart)',
    ' Topic: Start-up turn', 
    ' Platform/Collaboration: MentorKart' ,

  ],
  outcomes: '🚀 Successful Prototypes & Solutions: Participants built innovative tech solutions addressing industry challenges. 🏆 Winning Teams Recognized: Top teams received cash prizes, mentorship, and internship offers. 🤝 Networking & Collaboration: Students connected with industry leaders, startups, and fellow tech enthusiasts.💡 Skill Enhancement: Participants gained hands-on experience in coding, problem-solving, and teamwork.'
},



{
id: 13,
  title: 'Sole Properitorship',
  date: '2021-11-13',
  time: '01:30 PM',
  location: 'MAIT Campus',
  description: 'Ms.Chadha , with her teammate, Mr Harsh Kaushik, talked about her company, their business model, their goals and their journey. She explained to the audience the difference between a startup and a sole proprietorship. She discussed the steps to start a startup and the ways we can fund our startup. She also iterated on the various skills and prerequisites to build one’s own company.', 
  image: '/utils/Picture3.png',
  category: 'Competetion',
  highlights: [
     'Speaker: Harshita Chadha ( Founder Meraki Labs)',
     'Topic: Sole Proprietorship',
     'Platform: MS Teams',

  ],
  outcomes: '🚀 Successful Prototypes & Solutions: Participants built innovative tech solutions addressing industry challenges. 🏆 Winning Teams Recognized: Top teams received cash prizes, mentorship, and internship offers. 🤝 Networking & Collaboration: Students connected with industry leaders, startups, and fellow tech enthusiasts.💡 Skill Enhancement: Participants gained hands-on experience in coding, problem-solving, and teamwork.'
},
{
  id: 8,
  title: 'Entrepreneurship In Technical Startups',
  date: '2020-08-07',
  time: '10:30 AM',
  location: 'MAIT Campus',
  description: 'The event was a one day international webinar on-Entrepreneurship in Technical Startups. The event consisted of 5 sessions, held by eminent speakers from various fields, followed by a Valedictory session and a quiz. The event received a very good response with 445 participants from 25 colleges and organizations.',
  image: '/utils/Picture4.png',
  category: 'SPEAKER SESSION',
  highlights: [
    'Speaker 1: Prof. Anjali Awasthi (Concordia University, Canada)',
     'Session 1 Topic: Block Chain for Smart Jewellery',
     'Speaker 2:  Mr Naresh Priyadarshi (CEO, IIITD)',
     'Session 2 Topic: Technology and Entrepreneurship in Covid-19 Era',
     'Speaker 3: Mr. Deepak Singh (CEO, Glide Accelerator)',
     'Session 3 Topic: Technopreneurship Innovation',
     'Speaker 4: Mr. Anup Gupta (Founder, Mathango)',
     'Session 4 Topic: Startup for Starters',
     'Speaker 5: Mr. Paritosh Shrivastava (Co-Founder, Upscale Work)',
     'Session 5 Topic: Survival, Sustenance and Growth in Covid Era'
],
  
},

];

const EventModal = ({ event, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">{event.title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary-500 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-500 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-500 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-primary-500 mr-2" />
                  <span>500+ Attendees</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">About the Event</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
              </div>

              {event.highlights && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Event Highlights</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {event.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {event.outcomes && (
                <div>
                  <h3 className="text-xl font-semibold mb-2">Outcomes</h3>
                  <p className="text-gray-600 dark:text-gray-300">{event.outcomes}</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const EventList = ({ events, isPast }) => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="grid grid-cols-1 gap-8"
      >
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-100">
                    {event.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary-500 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-500 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary-500 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-500 mr-2" />
                    <span>Limited Seats</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  {!isPast && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                        onClick={() => navigate('/contact')}
                      >
                        Register Now
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                        onClick={() => setSelectedEvent(event)}
                      >
                        View Details
                      </motion.button>
                    </>
                  )}
                  {isPast && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary"
                      onClick={() => setSelectedEvent(event)}
                    >
                      View Details
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
};

const Events: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us for exciting events designed to inspire and connect entrepreneurs
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <EventList events={upcomingEvents} isPast={false} />
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center my-20"
        >
          <h2 className="text-4xl font-bold mb-6">Past Events</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our previous events and their highlights
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <EventList events={pastEvents} isPast={true} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Events;