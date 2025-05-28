
import React, { useRef, useEffect } from 'react';
import { Dna, AudioWaveform, Users, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CapabilityCardProps {
  title: string;
  description: string;
  icon: 'pattern' | 'anomaly' | 'behavior' | 'predictive';
  index: number;
  position: 'left' | 'right';
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, description, icon, index, position }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const renderIcon = () => {
    switch (icon) {
      case 'pattern':
        return <Dna className="h-10 w-10 text-ck-blue" />;
      case 'anomaly':
        return <AudioWaveform className="h-10 w-10 text-ck-blue" />;
      case 'behavior':
        return <Users className="h-10 w-10 text-ck-blue" />;
      case 'predictive':
        return <Star className="h-10 w-10 text-ck-blue" />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "capability-card relative backdrop-blur-sm bg-white/70 p-8 rounded-xl border border-transparent",
        "before:absolute before:inset-0 before:rounded-xl before:p-[1.5px] before:bg-gradient-ck before:opacity-70 before:-z-10",
        "shadow-lg hover:shadow-xl transition-all duration-500",
        "opacity-0 transform",
        position === 'left' ? 'translate-x-[-20px]' : 'translate-x-[20px]',
        "hover:scale-[1.02] hover:translate-y-[-5px]"
      )}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" // Spring-like easing
      }}
    >
      <div className="mb-5 relative z-10">
        <div className="bg-gradient-to-r from-ck-blue to-ck-violet rounded-full p-4 inline-flex items-center justify-center">
          {renderIcon()}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
      
      {/* Pulsing border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-ck opacity-20 blur-md animate-pulse-glow -z-20"></div>
    </div>
  );
};

export default CapabilityCard;
