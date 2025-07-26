import React from 'react';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    id: 'E-Summit',
    title: 'E-Summit',
    image: '/utils/zennith_poster.jpg',
    description:
      'E-Summit at MAIT is a flagship entrepreneurship event that inspires innovation and leadership among students. It features workshops, panels, and pitch competitions, connecting students with founders, investors, and mentors. 🚀',
    bg: 'bg-slate-800 dark:bg-[#1e293b]',
  },
  {
    id: 'Entrepreneurship Awareness Drive (EAD)',
    title: 'Entrepreneurship Awareness Drive (EAD)',
    image: '/utils/IMG_1274.jpg',
    description:
      'An immersive introduction to entrepreneurship featuring keynotes by industry leaders, hands-on workshops, and networking with mentors and investors — plus exciting opportunities for internships and startup support.',
    bg: 'bg-slate-800',
  },
  {
    id: 'HACKNOVATE',
    title: 'Hacknovate',
    image: '/utils/hacknovate final.jpg',
    description:
      'A thrilling 24–36 hour coding challenge with real-world problems, expert mentorship, and big rewards — open to all tech enthusiasts, with opportunities for internships, funding, and networking with industry leaders.',
    bg: 'bg-slate-800',
  },
  {
    id: 'ORIENTATION SESSION',
    title: 'Orientation Session',
    image: '/utils/IMG_1921.jpg',
    description:
      'Get introduced to EDC’s vision and initiatives through inspiring talks, practical workshops, and networking with founders, mentors, and peers — along with exciting opportunities for funding, projects, and internships.',
    bg: 'bg-slate-800',
  },
];

const EventGrid: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/events#${id}`);
  };

  return (
    <section className="px-4 md:px-20 py-16 bg-white dark:bg-[#0f172a] transition-all">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => handleCardClick(event.id)}
            className={`flex items-center gap-6 p-8 rounded-xl shadow-md cursor-pointer hover:scale-[1.02] transition-all duration-300 ${event.bg} text-white`}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-36 h-36 object-cover rounded-xl shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-200">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventGrid;