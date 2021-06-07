import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import GameSection from '../GameSection';

function Home() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <ParallaxProvider>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <GameSection />
    </ParallaxProvider>
  );
}

export default Home;
