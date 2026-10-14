import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';

export interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  onClick,
  className = '',
  label = 'Git Link',
}) => {
  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-medium uppercase tracking-widest
    px-6 py-2.5 sm:px-8 sm:py-3
    text-xs sm:text-sm md:text-base
    hover:bg-[#D7E2EA]/10 hover:border-cyan-400 hover:text-cyan-300 active:scale-95
    transition-all duration-200 cursor-pointer select-none whitespace-nowrap
    ${className}
  `;

  const content = (
    <>
      <GitBranch className="w-4 h-4 text-cyan-400" />
      <span>{label}</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-0.5" />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default LiveProjectButton;
