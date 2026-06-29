
const SERVICES = [
  {
    name: "Stage Decor",
    desc: "Elegant stage setups that become the highlight of your celebration.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="28" width="36" height="14" rx="2" />
        <path d="M6 28 L24 10 L42 28" />
        <path d="M14 28 L14 18 M34 28 L34 18" />
        <path d="M18 42 L18 34 M30 42 L30 34" />
        <circle cx="24" cy="18" r="3" />
      </svg>
    ),
  },
  {
    name: "Mandap Decor",
    desc: "Traditional & modern mandaps crafted with perfection.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 42 L12 20 Q12 10 24 8 Q36 10 36 20 L36 42" />
        <path d="M12 20 Q18 16 24 16 Q30 16 36 20" />
        <path d="M18 42 L18 28 M30 42 L30 28" />
        <path d="M6 42 L42 42" />
        <path d="M24 8 L24 4 M20 4 L28 4" />
      </svg>
    ),
  },
  {
    name: "Entrance Decor",
    desc: "Grand entrances that welcome your guests in style.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 42 L8 12 Q8 6 16 6 L32 6 Q40 6 40 12 L40 42" />
        <path d="M8 12 Q16 18 24 18 Q32 18 40 12" />
        <path d="M4 42 L44 42" />
        <path d="M18 42 L18 30 Q18 26 24 26 Q30 26 30 30 L30 42" />
        <path d="M14 6 L14 2 M34 6 L34 2" />
      </svg>
    ),
  },
  {
    name: "Pelli Pandiri",
    desc: "Beautifully designed pelli pandiri for your special moments.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6 L28 18 L40 18 L30 26 L34 38 L24 30 L14 38 L18 26 L8 18 L20 18 Z" />
        <circle cx="24" cy="22" r="4" />
        <path d="M16 42 L32 42 M20 38 L20 42 M28 38 L28 42" />
      </svg>
    ),
  },
  {
    name: "Housewarming Decor",
    desc: "Make your new beginning more beautiful.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 42 L10 20 L24 10 L38 20 L38 42" />
        <path d="M4 22 L24 10 L44 22" />
        <path d="M18 42 L18 30 M30 42 L30 30" />
        <path d="M16 24 L32 24" />
        <path d="M24 10 L24 6" />
        <circle cx="24" cy="4" r="3" />
      </svg>
    ),
  },
  {
    name: "Temple Decor",
    desc: "Divine decorations for temples & religious events.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 42 L14 18 Q14 8 24 6 Q34 8 34 18 L34 42" />
        <path d="M10 42 L38 42" />
        <path d="M14 18 Q19 14 24 14 Q29 14 34 18" />
        <path d="M20 6 Q18 2 24 2 Q30 2 28 6" />
        <path d="M20 28 Q24 24 28 28 M20 34 Q24 30 28 34" />
      </svg>
    ),
  },
];

function ServiceCard({ name, desc, icon }) {
  return (
    <div className="group flex flex-col items-center text-center gap-3 bg-[#FFFDF5] border border-[#D4AF6A] rounded-md p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(184,134,11,0.18)]">
      <div className="w-12 h-12 flex items-center justify-center text-[#B8860B] shrink-0">
        {icon}
      </div>
      <p
        className="text-[9px] sm:text-[10px] font-semibold tracking-[0.12em] uppercase text-[#1a1208] m-0 leading-snug"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {name}
      </p>
      <p className="text-[12px] sm:text-[13px] text-[#5a4a2a] leading-relaxed m-0">
        {desc}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Cinzel:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <section
        className="bg-[#F5EFE0] py-14 px-5 text-center"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        {/* Eyebrow */}
        <p
          className="text-[11px] tracking-[0.25em] uppercase text-[#B8860B] m-0 mb-2"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Our Services
        </p>

        {/* Ornament divider */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="block w-14 h-px bg-gradient-to-r from-transparent to-[#B8860B]" />
          <span className="text-[#B8860B] text-base">✦</span>
          <span className="block w-14 h-px bg-gradient-to-l from-transparent to-[#B8860B]" />
        </div>

        {/* Heading */}
        <h2
          className="text-[clamp(20px,4vw,30px)] font-normal text-[#1a1208] mt-0 mb-10 tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Beautiful Concepts. Timeless Celebrations.
        </h2>

        {/* Cards — 2 cols mobile, 3 cols sm, 6 cols lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto mb-9">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.name} {...svc} />
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="inline-flex items-center gap-2 bg-[#1a1208] text-[#D4AF6A] border-none px-8 py-3.5 text-[11px] tracking-[0.15em] uppercase rounded-sm cursor-pointer transition-colors duration-200 hover:bg-[#2d2010]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          View All Services <span>→</span>
        </button>
      </section>
    </>
  );
}