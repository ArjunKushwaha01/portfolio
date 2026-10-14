import React, { useRef, useState, useEffect } from 'react';

interface TelemetryItem {
  title: string;
  category: string;
  image: string;
}

const ROW1_ITEMS: TelemetryItem[] = [
  {
    title: 'Splunk Security Event Correlation',
    category: 'SIEM & SOC',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Wireshark Packet Deep Inspection',
    category: 'Network Forensics',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Wazuh Endpoint FIM & Alert Triage',
    category: 'EDR / XDR',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'MITRE ATT&CK Matrix Mapping',
    category: 'Threat Hunting',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Kali Linux Penetration & Audit',
    category: 'Security Testing',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Network Traffic & Anomaly Detection',
    category: 'NIDS / Snort',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Windows Event Log 4625 Forensics',
    category: 'Log Analysis',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Nessus Vulnerability Assessment',
    category: 'Vuln Management',
    image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Python Intrusion Detection Classifier',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Zeek Network Security Telemetry',
    category: 'Packet Analysis',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'SOC Incident Response Playbooks',
    category: 'IR Workflows',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
  },
];

const ROW2_ITEMS: TelemetryItem[] = [
  {
    title: 'Burp Suite HTTP Security Assessment',
    category: 'Application Sec',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Nmap Port & Service Surface Recon',
    category: 'Reconnaissance',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'DNS Tunneling & C2 Beacon Hunting',
    category: 'Network Forensics',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Failed Logins & Brute Force Triage',
    category: 'SIEM Monitoring',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Firewall & EDR Policy Hardening',
    category: 'Cyber Defense',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Malware Analysis Sandbox Triage',
    category: 'Endpoint Security',
    image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Microsoft Security Essentials Defense',
    category: 'Certified Track',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'IT Infrastructure & Systems Security (PGCP-ITISS)',
    category: 'Sunbeam CDAC',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Red Team Log Analysis Defense',
    category: 'Certified Track',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Threat Intelligence Feeds & IOCs',
    category: 'SOAR / SecOps',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
];

// Tripled lists for seamless scrolling
const TRIPLED_ROW1 = [...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS];
const TRIPLED_ROW2 = [...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const x1 = offset - 200;
  const x2 = -(offset - 200);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full relative z-0"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: moves RIGHT on scroll (translateX(offset - 200)) */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translateX(${x1}px)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW1.map((item, index) => (
            <div
              key={`row1-${index}`}
              className="relative w-[420px] h-[270px] min-w-[420px] rounded-2xl overflow-hidden bg-[#16171B] flex-shrink-0 shadow-lg border border-cyan-500/10 group"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl select-none pointer-events-none group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="text-white text-base font-medium tracking-wide">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: moves LEFT on scroll (translateX(-(offset - 200))) */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translateX(${x2}px)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW2.map((item, index) => (
            <div
              key={`row2-${index}`}
              className="relative w-[420px] h-[270px] min-w-[420px] rounded-2xl overflow-hidden bg-[#16171B] flex-shrink-0 shadow-lg border border-purple-500/10 group"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl select-none pointer-events-none group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B600A8] font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="text-white text-base font-medium tracking-wide">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
