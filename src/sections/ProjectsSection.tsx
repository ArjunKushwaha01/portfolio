import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface ProjectData {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  link?: string;
}

const PROJECTS: ProjectData[] = [
  {
    id: 'soc-siem-lab',
    number: '01',
    name: 'SOC SIEM Lab & Threat Hunting',
    category: 'Wazuh & Kali Linux',
    description:
      'Deployed Wazuh SIEM on Kali Linux monitoring Windows endpoints. Implemented File Integrity Monitoring (FIM), investigated alerts mapped to MITRE ATT&CK, correlated event logs, and executed automated incident response playbooks.',
    tags: ['Wazuh SIEM', 'Kali Linux', 'MITRE ATT&CK', 'FIM', 'Log Correlation', 'Threat Detection'],
    col1Image1:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1280&q=85',
    link: 'https://github.com/ArjunKushwaha01/wazuh-siem-soc-lab',
  },
  {
    id: 'network-intrusion-detection',
    number: '02',
    name: 'Network Intrusion Detection System',
    category: 'Python & Wireshark',
    description:
      'Captured and analyzed raw network traffic using Wireshark and Zeek. Built a Python-based traffic classification model to detect malicious port scans and anomalous patterns, tuning rules to reduce false positives.',
    tags: ['Wireshark', 'Python', 'Zeek', 'Traffic Classification', 'Network Forensics', 'TCP/IP'],
    col1Image1:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1280&q=85',
    link: 'https://github.com/ArjunKushwaha01/network-intrusion-detector',
  },
  {
    id: 'splunk-soc-operations',
    number: '03',
    name: 'Splunk Log Analysis & Incident Response',
    category: 'Techonet Internship',
    description:
      'Real-world SOC internship at Techonet Private Limited. Ingested and parsed authentication, system, and network logs in Splunk. Investigated failed logins, abnormal access patterns, and drafted structured findings for Incident Response.',
    tags: ['Splunk', 'Authentication Logs', 'Alert Triage', 'Incident Response', 'SOC Operations'],
    col1Image1:
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&w=1280&q=85',
    link: 'https://github.com/ArjunKushwaha01',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  progress,
}) => {
  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const startRange = index * 0.25;
  const scale = useTransform(progress, [startRange, 1], [1, targetScale]);

  return (
    <div
      className="h-[85vh] sticky top-24 md:top-32 flex items-start justify-center w-full"
      style={{
        top: `calc(clamp(5.5rem, 8vh, 8rem) + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.95)] origin-top backdrop-blur-md"
      >
        {/* Top Row: Number, category label, project name, tags, and Live Project button */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 pb-4 sm:pb-6 border-b border-white/10">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {/* Number (huge, same style as services) */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 110px)' }}
            >
              {project.number}
            </span>

            {/* Project Name and Category */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                ({project.category})
              </span>
              <h3 className="font-medium uppercase text-white tracking-wide text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tags.slice(0, 4).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-[#D7E2EA]/80 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="shrink-0">
            <LiveProjectButton href={project.link} />
          </div>
        </div>

        {/* Project Description Summary */}
        <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-3 font-light leading-relaxed max-w-4xl">
          {project.description}
        </p>

        {/* Bottom Row: Two-column image grid */}
        <div className="pt-4 sm:pt-6 flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-3 sm:gap-4">
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#16171B] border border-cyan-500/10"
              style={{ height: 'clamp(130px, 16vw, 210px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] hover:scale-105 transition-transform duration-500 filter brightness-90 hover:brightness-100"
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#16171B] border border-cyan-500/10"
              style={{ height: 'clamp(140px, 18vw, 250px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] hover:scale-105 transition-transform duration-500 filter brightness-90 hover:brightness-100"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="w-full md:w-[60%] flex min-h-[220px] md:min-h-0">
            <div className="w-full h-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#16171B] border border-cyan-500/10">
              <img
                src={project.col2Image}
                alt={`${project.name} showcase`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] hover:scale-105 transition-transform duration-500 filter brightness-90 hover:brightness-100"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: Project (singular) using .hero-heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* 3 Sticky Stacking Cards */}
        <div className="relative flex flex-col gap-10 sm:gap-14 pb-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
