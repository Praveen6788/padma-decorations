import { useState, useEffect } from 'react';
import padmaLogo from '../assets/padma_logo.png';

const navLinks = [
  { label: 'Home',          href: '#home' },
  { label: 'About Us',     href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Process',      href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500
        ${scrolled
          ? 'bg-cream/98 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.10)]'
          : 'bg-cream shadow-[0_1px_12px_rgba(0,0,0,0.07)]'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center h-20 gap-8">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center shrink-0 group">
          <img
            src={padmaLogo}
            alt="Padma Decorations Logo"
            className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            style={{ mixBlendMode: 'multiply' }}
          />
        </a>

        {/* ── Desktop Links ── */}
        <ul className="hidden lg:flex items-center gap-1 mx-auto list-none">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setActive(label)}
                className={`relative px-3 py-1.5 font-sans text-[11px] font-medium tracking-[1.5px] uppercase
                  transition-colors duration-250 after:absolute after:bottom-0 after:left-3 after:right-3
                  after:h-[2px] after:bg-gold after:transition-transform after:duration-250 after:origin-center
                  ${active === label
                    ? 'text-gold-dark after:scale-x-100'
                    : 'text-ink-mid hover:text-gold-dark after:scale-x-0 hover:after:scale-x-100'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 shrink-0 bg-forest text-white
            px-5 py-2.5 font-sans text-[11px] font-semibold tracking-[2px] uppercase
            transition-all duration-300 hover:bg-gold hover:text-white"
        >
          ENQUIRE NOW
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>

        {/* ── Hamburger ── */}
        <button
          className="lg:hidden ml-auto w-9 h-9 flex flex-col justify-center gap-[5px]"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] bg-ink rounded transition-all duration-300
            ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[2px] bg-ink rounded transition-all duration-300
            ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] bg-ink rounded transition-all duration-300
            ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`lg:hidden flex flex-col items-center bg-cream border-t border-gold/20
        overflow-hidden transition-[max-height] duration-500 ease-in-out
        ${menuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => { setMenuOpen(false); setActive(label); }}
            className="w-full text-center py-3.5 border-b border-ink/8 font-sans text-[12px]
              font-medium tracking-[2px] uppercase text-ink-mid hover:text-gold-dark transition-colors duration-250"
          >
            {label}
          </a>
        ))}
        <a href="#contact" className="btn-primary mt-5 mb-6">
          ENQUIRE NOW
        </a>
      </div>
    </nav>
  );
}
