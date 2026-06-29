// import React from 'react';
import { MessageSquare, Compass, Calendar, Settings, Flower2 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'CONSULTATION',
      description: 'Share your ideas, venue & requirements',
      icon: <MessageSquare className="w-8 h-8 text-[#D4AF37]" />,
    },
    {
      number: '02',
      title: 'CONCEPT & DESIGN',
      description: 'We create a custom concept just for you',
      icon: <Compass className="w-8 h-8 text-[#D4AF37]" />,
    },
    {
      number: '03',
      title: 'PLANNING',
      description: 'We plan every detail with perfection',
      icon: <Calendar className="w-8 h-8 text-[#D4AF37]" />,
    },
    {
      number: '04',
      title: 'EXECUTION',
      description: 'Our expert team brings the magic to life',
      icon: <Settings className="w-8 h-8 text-[#D4AF37]" />,
    },
    {
      number: '05',
      title: 'CELEBRATION',
      description: 'You celebrate, we make it unforgettable',
      icon: <Flower2 className="w-8 h-8 text-[#D4AF37]" />,
    },
  ];

  return (
    <section className="w-full bg-[#FAF6F0] py-16 px-4 font-serif text-center relative overflow-hidden">
      {/* Decorative background hints */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <span className="text-xs uppercase tracking-[0.2em] text-[#A67C43] font-sans font-semibold block mb-1">
          OUR PROCESS
        </span>
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
          <span className="text-[#D4AF37] text-xs">◆</span>
          <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
        </div>
        <h2 className="text-3xl md:text-4xl text-[#1E2522] mb-16 font-light">
          From Concept to Celebration
        </h2>

        {/* Timeline Component */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4">
          
          {/* Horizontal connecting line (hidden on mobile, visible on desktop) */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#030200] opacity-60 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center max-w-[200px] w-full relative z-10 group"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-full bg-[#123204] flex items-center justify-center border-2 border-transparent group-hover:border-[#D4AF37] transition-all duration-300 shadow-xl mb-4 relative">
                {step.icon}
                
                {/* Micro-dot connectors between steps on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-25 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0B1511]"></div>
                )}
              </div>

              {/* Step Number */}
              <span className="text-lg font-sans font-medium text-[#D4AF37] mb-2">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-sm font-sans font-bold tracking-wider text-[#1E2522] mb-2 uppercase">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#555] font-sans leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Process;