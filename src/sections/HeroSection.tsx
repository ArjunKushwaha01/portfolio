import React from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section
      className="h-screen w-full flex flex-col justify-between relative overflow-x-clip bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="w-full px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center relative z-20"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              if (link.label === 'Contact' && onContactClick) {
                e.preventDefault();
                onContactClick();
              }
            }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden text-center relative z-0 select-none">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m arjun
          </h1>
        </FadeIn>
      </div>

      {/* Centered Hero Portrait with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto flex justify-center">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center relative group"
          >
            {/* Arjun Portrait Visual with Cyber Glow */}
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute -inset-4 bg-gradient-to-t from-cyan-500/25 via-[#B600A8]/20 to-transparent blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <img
                src="/arjun.png"
                alt="Arjun Kushwaha - Cybersecurity Professional"
                className="w-full h-auto max-h-[58vh] sm:max-h-[64vh] md:max-h-[70vh] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.95)] select-none pointer-events-none filter contrast-105"
                loading="eager"
              />
              {/* Cyber Status Badge */}
              <div className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 bg-[#0C0C0C]/90 backdrop-blur-md border border-cyan-400/40 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-2xl whitespace-nowrap z-20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase text-cyan-200">
                  CYBER DEFENSE // INFRASTRUCTURE &amp; DEV-OPS
                </span>
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end relative z-20">
        {/* Left Text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[200px] sm:max-w-[260px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.35vw, 1.4rem)' }}
          >
            a cybersecurity professional defending enterprise networks, hunting threats, and hardening digital infrastructure
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton
            onClick={onContactClick}
            href={onContactClick ? undefined : '#contact'}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
