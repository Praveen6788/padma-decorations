import { useState } from 'react';
import t1 from '../assets/testimonial1.png';
import t2 from '../assets/testimonial2.png';
import t3 from '../assets/testimonial3.png';

const testimonials = [
  {
    img:    t1,
    name:   'Srujana & Karthik',
    quote:  'Padma team turned our dream wedding into reality. The coconut leaf decor was beyond beautiful and unique!',
    rating: 5,
  },
  {
    img:    t2,
    name:   'Priya & Rohan',
    quote:  'The best choice we made for our big day. Every detail was perfect and received so many compliments!',
    rating: 5,
  },
  {
    img:    t3,
    name:   'Anusha Family',
    quote:  'Highly professional, creative and dedicated team. Thank you for making our event so special!',
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 justify-center mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const prev = () => setCur((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCur((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="ornament mb-3">
            <span className="text-gold text-lg">✦</span>
          </div>
          <p className="section-eyebrow mb-2">Kind Words</p>
          <h2 className="section-title text-4xl md:text-5xl">
            Client <em className="italic text-gold-dark">Love</em>
          </h2>
        </div>

        {/* Desktop: all 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-cream rounded-sm p-8 flex flex-col items-center text-center
              border border-cream-dark hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(200,151,74,0.1)]
              transition-all duration-350 card-lift">

              <img src={t.img} alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gold/30 mb-4"/>

              <StarRating count={t.rating} />

              <p className="font-serif italic text-ink-mid text-base leading-relaxed mb-5">
                "{t.quote}"
              </p>

              <div className="mt-auto">
                <span className="h-px w-8 bg-gold/40 block mx-auto mb-3" />
                <p className="font-sans text-[11px] font-semibold tracking-[2px] uppercase text-ink">
                  – {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single card slider */}
        <div className="md:hidden">
          <div className="bg-cream rounded-sm p-8 flex flex-col items-center text-center
            border border-cream-dark">
            <img src={testimonials[cur].img} alt={testimonials[cur].name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gold/30 mb-4"/>
            <StarRating count={testimonials[cur].rating} />
            <p className="font-serif italic text-ink-mid text-base leading-relaxed mb-5">
              "{testimonials[cur].quote}"
            </p>
            <span className="h-px w-8 bg-gold/40 block mx-auto mb-3" />
            <p className="font-sans text-[11px] font-semibold tracking-[2px] uppercase text-ink">
              – {testimonials[cur].name}
            </p>
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            {[prev, next].map((fn, i) => (
              <button key={i} onClick={fn}
                className="w-10 h-10 border border-gold/40 text-gold flex items-center justify-center
                  hover:bg-gold hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d={i === 0 ? 'M19 12H5M12 19l-7-7 7-7' : 'M5 12h14M12 5l7 7-7 7'}
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
