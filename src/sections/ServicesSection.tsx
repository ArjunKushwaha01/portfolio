import React from 'react';
import FadeIn from '../components/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Network Security & Traffic Forensics',
    description:
      'Deep packet analysis using Wireshark and Zeek. Inspecting TCP/IP, DNS, and HTTP traffic to dissect anomalous protocol flows, detect malicious C2 beacons, and investigate network intrusion vectors.',
  },
  {
    number: '02',
    name: 'Vulnerability Assessment & Surface Auditing',
    description:
      'Automated and manual security auditing with Nessus, Nmap, and Burp Suite. Discovering misconfigurations, unpatched weaknesses, and exposed services to enforce hardened enterprise defense baselines.',
  },
  {
    number: '03',
    name: 'SIEM Monitoring & Threat Hunting',
    description:
      'Real-time log aggregation and correlation across Wazuh and Splunk environments. Mapping adversary behaviors directly against the MITRE ATT&CK matrix to uncover stealthy indicators of compromise (IOCs).',
  },
  {
    number: '04',
    name: 'Incident Response & Digital Forensics',
    description:
      'Executing end-to-end incident handling workflows — from initial detection and host containment to forensic triage of Windows Event Logs, authentication anomalies, and actionable incident documentation.',
  },
  {
    number: '05',
    name: 'Systems Hardening & Infrastructure Defense',
    description:
      'Securing enterprise Windows and Linux endpoints, implementing File Integrity Monitoring (FIM), configuring firewall technologies, EDR/XDR controls, and advancing IT infrastructure resilience (PGCP-ITISS).',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Expertise
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.number}
              delay={i * 0.1}
              y={30}
              className="py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 md:gap-16 group transition-colors duration-300 hover:bg-black/[0.02] px-2 sm:px-4 rounded-xl"
            >
              {/* Service Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none shrink-0 tracking-tight select-none w-24 sm:w-36 md:w-48"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>

              {/* Service Details */}
              <div className="flex flex-col gap-2 flex-1 justify-center">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
