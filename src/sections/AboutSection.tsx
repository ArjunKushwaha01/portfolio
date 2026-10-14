import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { GraduationCap, Award, ShieldCheck, MapPin } from 'lucide-react';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const aboutText =
    "Cybersecurity professional with hands-on expertise in network defense, infrastructure hardening, and threat mitigation. Moving from a B.Tech in Computer Science to advanced specialization via PGCP-ITISS at Sunbeam CDAC, i focus on identifying vulnerabilities, analyzing network traffic, and building resilient security operations.";

  const education = [
    {
      degree: 'PGCP in IT Infrastructure, Systems & Security (PGCP-ITISS)',
      institution: 'Sunbeam CDAC College / Institute of Information Technology',
      period: 'August 2026 – February 2027',
      status: 'Upcoming Advanced Specialization',
      highlight: true,
    },
    {
      degree: 'Bachelor of Technology, Computer Science & Engineering',
      institution: 'Bhilai Institute of Technology, Durg',
      period: '2023 – 2026',
      status: 'Undergraduate Degree',
      highlight: false,
    },
    {
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'Shri Shankaracharya Technical Campus, Durg',
      period: '2020 – 2023',
      status: 'Technical Diploma',
      highlight: false,
    },
  ];

  const certifications = [
    {
      name: 'Microsoft Security Essentials Professional Certificate',
      issuer: 'Microsoft',
    },
    {
      name: 'Foundations of Log Analysis for Cyber Defense',
      issuer: 'Red Team Leaders',
    },
    {
      name: 'Tata Cybersecurity Security Analyst Job Simulation',
      issuer: 'Forage',
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-hidden bg-[#0C0C0C]"
    >
      {/* 4 Decorative 3D Corner Images */}

      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] select-none opacity-80"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D object"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] select-none opacity-80"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] select-none opacity-80"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D group element"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] select-none opacity-80"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated Paragraph with character-by-character reveal */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center px-4">
          <AnimatedText text={aboutText} />
        </div>

        {/* Education & Certifications Timeline Bento */}
        <FadeIn delay={0.25} y={30} className="w-full mt-14 sm:mt-18 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Education Track */}
            <div className="rounded-3xl border border-white/10 bg-[#121316]/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold mb-6 pb-3 border-b border-white/10">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic & Specialization Roadmap</span>
                </div>

                <div className="flex flex-col gap-5">
                  {education.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border transition-all ${
                        item.highlight
                          ? 'border-cyan-500/40 bg-cyan-950/20'
                          : 'border-white/5 bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400/90 font-medium">
                          {item.period}
                        </span>
                        {item.highlight && (
                          <span className="text-[10px] font-mono uppercase bg-[#B600A8]/30 border border-[#B600A8]/60 text-white px-2 py-0.5 rounded-full">
                            Next Stage
                          </span>
                        )}
                      </div>
                      <h4 className="text-white font-medium text-sm sm:text-base leading-snug">
                        {item.degree}
                      </h4>
                      <p className="text-xs text-[#D7E2EA]/60 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {item.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Certifications Track */}
            <div className="rounded-3xl border border-white/10 bg-[#121316]/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-[#B600A8] font-mono text-xs uppercase tracking-widest font-semibold mb-6 pb-3 border-b border-white/10">
                  <Award className="w-4 h-4" />
                  <span>Verified Certifications & Accreditations</span>
                </div>

                <div className="flex flex-col gap-4">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-start gap-3.5 hover:border-white/15 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5 text-purple-300">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm leading-snug">
                          {cert.name}
                        </h4>
                        <span className="text-xs font-mono text-cyan-400/80 mt-0.5 block">
                          Verified by {cert.issuer}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#D7E2EA]/50 font-mono">
                <span>Location: Pune, Maharashtra, India</span>
                <span className="text-emerald-400">Available for Opportunities</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Contact Button */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton
              onClick={onContactClick}
              href={onContactClick ? undefined : '#contact'}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
