import React from 'react';
import ParticlesBackground from '../components/shared/ParticlesBackground';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturedStartups from '../components/home/FeaturedStartups';
import NewsletterSection from '../components/home/NewsletterSection';
import SocialBar from '../components/home/SocialBar';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
        <FeaturedStartups />
        <NewsletterSection />
        <SocialBar />
      </div>
    </div>
  );
};

export default Home;