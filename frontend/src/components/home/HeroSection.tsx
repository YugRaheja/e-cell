import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current;
      gsap.to(text, {
        backgroundSize: '200%',
        duration: 10,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
      <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto whitespace-nowrap"
        >
          INNOVATE. CREATE. LEAD. 
        </motion.p>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            ref={textRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-[length:100%] bg-clip-text text-transparent max-w-4xl mx-auto"
          >
            Entrepreneurship Development Cell, MAIT
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/events"
            className="btn btn-primary group"
          >
            Our events
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="btn btn-outline"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection