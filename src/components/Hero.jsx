import { useState, useEffect, useCallback } from 'react';
import heroMain   from "../assets/hero_main.png"
import heroStage  from "../assets/hero_slide.png"
import mandapDecor from '../assets/mandap_decor.png';

const slides = [
  {
    image:   heroMain,
    tagline: 'Where',
    heading: ['TRADITION', 'BECOMES ART'],
    sub:     'Premium Coconut Leaf & Floral Decorations for Weddings & Events',
  },
  {
    image:   heroStage,
    tagline: 'Crafting',
    heading: ['TIMELESS', 'MOMENTS'],
    sub:     "Every ceremony adorned with nature's finest — from mandap to stage",
  },
  {
    image:   mandapDecor,
    tagline: 'Creating',
    heading: ['SACRED', 'SPACES'],
    sub:     'Traditional setups that honour heritage and elevate your celebration',
  },
];

export default function Hero() {
  const [cur,    setCur]    = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx) => {
    setFading(true);
    setTimeout(() => { setCur(idx); setFading(false); }, 450);
  }, []);

  const next = useCallback(() => goTo((cur + 1) % slides.length), [cur, goTo]);
  const prev = () => goTo((cur - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 5800);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[cur];

  return (
    /* ─── Hero sits directly BELOW the 80px navbar (pt-20) ─── */
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: 'calc(100vh - 80px)', marginTop: '80px' }}
    >
      {/* ── Background images ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700
            ${i === cur ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}



     {/* ── Content ── */}
<div className={`absolute inset-0 flex items-center justify-start transition-opacity duration-450
  ${fading ? 'opacity-0' : 'opacity-100'}`}>
  
  {/* Changed: Placed max-w-7xl along with a definitive left-margin offset (md:ml-16 lg:ml-28) to nudge it rightward */}
  <div className="max-w-7xl mx-auto px-10 sm:px-16 md:pl-20 lg:pl-32 w-full">

    {/* Italic script tagline */}
    <p className="font-serif italic text-[#D4AF37] text-2xl md:text-3xl mb-2
      [animation:fadeUp_0.8s_ease_0.1s_both]"
      style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
      {slide.tagline}
    </p>

    {/* Main heading */}
    <h1 className="font-serif font-medium text-white leading-none mb-5
      text-5xl sm:text-6xl md:text-7xl lg:text-[88px] tracking-wide
      [animation:fadeUp_0.8s_ease_0.2s_both]"
      style={{ textShadow: '0 4px 20px rgba(0,0,0,0.7)' }}>
      {slide.heading[0]}<br />
      <span className={slide.heading[1] === 'BECOMES ART' ? 'text-[#D4AF37]' : ''}>
        {slide.heading[1]}
      </span>
    </h1>

    {/* Ornamental divider */}
    <div className="flex items-center gap-3 mb-5 [animation:fadeUp_0.8s_ease_0.3s_both]">
      <span className="h-px w-12 bg-[#D4AF37]/60" />
      <span className="text-[#D4AF37]">✦</span>
      <span className="h-px w-12 bg-[#D4AF37]/60" />
    </div>

    {/* Subtitle */}
    <p className="font-sans text-gray-200 text-sm md:text-base max-w-md mb-10 leading-relaxed
      [animation:fadeUp_0.8s_ease_0.4s_both]"
      style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
      {slide.sub}
    </p>

    {/* CTA buttons */}
    <div className="flex flex-wrap gap-4 [animation:fadeUp_0.8s_ease_0.5s_both]">
      <a href="#portfolio" className="btn-primary">
        <span>VIEW PORTFOLIO</span>
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </a>
      <a href="#contact" className="btn-outline">BOOK CONSULTATION</a>
    </div>
  </div>
</div>

      {/* ── Arrow navigation ── */}
      {[
        { fn: prev, label: 'Previous', side: 'left-4 lg:left-8',   path: 'M19 12H5M12 19l-7-7 7-7' },
        { fn: next, label: 'Next',     side: 'right-4 lg:right-8', path: 'M5 12h14M12 5l7 7-7 7' },
      ].map(({ fn, label, side, path }) => (
        <button
          key={label}
          onClick={fn}
          aria-label={`${label} slide`}
          className={`absolute top-1/2 -translate-y-1/2 ${side}
            w-11 h-11 border border-white/40 text-white/80 flex items-center justify-center
            hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm bg-black/20`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      ))}

      {/* ── Slide dots ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-400 rounded-full
              ${i === cur ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2">
        <span className="font-sans text-[9px] tracking-[3px] uppercase text-white/50 rotate-90 mb-4">
          SCROLL
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-white/50 to-transparent
          [animation:scrollPulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
