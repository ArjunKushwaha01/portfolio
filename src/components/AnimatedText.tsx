import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">
        {char === ' ' ? '\u00A0' : char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-none"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const total = text.length;
  const words = text.split(' ');
  let runningIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`font-medium text-center leading-relaxed max-w-[560px] text-[#D7E2EA] ${className}`}
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
      }}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const wordStartIndex = runningIndex;
        runningIndex += wordChars.length;

        // space after word if not the last word
        const hasSpace = wordIndex < words.length - 1;
        const spaceIndex = runningIndex;
        if (hasSpace) {
          runningIndex += 1;
        }

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char, i) => {
              const charGlobalIndex = wordStartIndex + i;
              const start = charGlobalIndex / total;
              const end = Math.min(1, (charGlobalIndex + 1) / total);
              return (
                <Character
                  key={i}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {hasSpace && (
              <Character
                char=" "
                progress={scrollYProgress}
                range={[spaceIndex / total, Math.min(1, (spaceIndex + 1) / total)]}
              />
            )}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
