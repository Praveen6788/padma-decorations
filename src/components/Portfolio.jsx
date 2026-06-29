import stageImg    from '../assets/hero_stage.png';
import mandapImg   from '../assets/mandap_decor.png';
import entranceImg from '../assets/entrance_decor.png';
import templeImg   from '../assets/temple_decor.png';
import eventImg    from '../assets/event_decor.png';

const works = [
  { img: stageImg,    label: 'Stage Decor' },
  { img: mandapImg,   label: 'Mandap Decor' },
  { img: entranceImg, label: 'Entrance Decor' },
  { img: templeImg,   label: 'Temple Decor' },
  { img: eventImg,    label: 'Event Decor' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-10 bg-[#031D12] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="ornament mb-3">
            <span className="text-gold text-lg">✦</span>
          </div>
          <p className="section-eyebrow mb-2">Our Work</p>
          <h2 className="section-title  text-white text-4xl md:text-5xl">
            <em className="italic text-gold-dark">Signature</em> Works
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {works.map((w, i) => (
            <div
              key={i}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <img
                src={w.img}
                alt={w.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col
                justify-end p-4">
                <p className="font-sans text-[11px] font-semibold tracking-[2px] uppercase text-white mb-1">
                  {w.label}
                </p>
                <div className="flex items-center gap-2">
                  <span className="h-px flex-1 bg-gold/60" />
                  <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center">
                    <svg className="w-3 h-3 text-gold" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom label strip */}
              <div className="absolute bottom-0 inset-x-0 bg-dark/60 backdrop-blur-sm py-2.5 px-3
                translate-y-0 group-hover:translate-y-full transition-transform duration-400 flex items-center justify-between">
                <span className="font-sans text-[10px] font-semibold tracking-[1.5px] uppercase text-white">
                  {w.label}
                </span>
                <svg className="w-3.5 h-3.5 text-gold" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#contact" className="btn-primary inline-flex">
            <span>VIEW ALL WORKS</span>
          </a>
        </div>
      </div>
    </section>
  );
}
