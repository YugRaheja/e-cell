

import React from 'react';
import edcimage from '../../pics/edcimage.jpg';

const Aboutedc: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-[#0f172a] text-white">
      
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={edcimage}
          alt="eDC Group"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Know More About EDC</h2>
        <p className="text-gray-300 text-lg mb-6">
          The Entrepreneurship Development Cell, MAIT is the hub where we ignite the spark of innovation and fuel ambitious minds. By uniting students, mentors, investors, and industry trailblazers, we spark creativity through hands-on workshops, pitch-perfect startup showcases, and inspiring E-talks. Our mission? To empower you with the resources, guidance, and network you need to turn dreams into dynamic ventures. Join us, and become one of the “PRU-DENT-REPRENEURS”—where bold vision meets smart action!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-center">
          <a href="/Team">
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              Meet Our Team
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutedc;

