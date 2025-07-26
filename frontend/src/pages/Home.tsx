import React from 'react';
import ParticlesBackground from '../components/shared/ParticlesBackground';
import HeroSection from '../components/home/HeroSection';
import Aboutedc from '../components/home/Aoubtedc';
import EventGrid from '../components/home/EventGrid';
import Footer from '../components/home/Footer';
import SocialBar from '../components/home/SocialBar';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <Aboutedc />
        <EventGrid />
        <Footer />
        <SocialBar />
      </div>
    </div>
  );
};

export default Home;