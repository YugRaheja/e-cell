import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 1,
    title: 'Zennith: Official E-SUMMIT of MAIT',
    date: '2025-03-26',
    time: '09:00 AM',
    location: 'MAIT Campus',
    description: '54-hour weekend event where groups of developers, business managers, startup enthusiasts, marketing experts, and graphic artists pitch ideas for new startup companies.',
    image: '/utils/zennith_poster.jpg',
    category: 'E-SUMMIT'
  },

];

const pastEvents = [
  {
    id: 2,
    title: 'AI in Business Summit',
    date: '2024-02-15',
    time: '10:00 AM',
    location: 'Digital Hub',
    description: 'Explored the transformative impact of AI on modern business landscapes and future opportunities.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80',
    category: 'Conference',
    highlights: [
      'Over 500 attendees from leading tech companies',
      'Keynote speakers from Google, Microsoft, and Amazon',
      'Interactive AI demos and workshops',
      'Networking sessions with industry leaders'
    ],
    outcomes: 'The summit resulted in multiple partnerships between startups and established companies, fostering innovation in AI implementation across various sectors.'
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