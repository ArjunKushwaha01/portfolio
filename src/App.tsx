import React, { useState } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactModal from './components/ContactModal';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] min-h-screen w-full relative"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection onContactClick={() => setIsContactOpen(true)} />
      <MarqueeSection />
      <AboutSection onContactClick={() => setIsContactOpen(true)} />
      <ServicesSection />
      <ProjectsSection />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
