import logo from "../assets/padma_logo.png"
const Footer = () => {
  return (
    <footer className="w-full bg-[#031D12] text-white pt-16 pb-6 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle traditional overlay pattern hint */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Logo & Socials */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              {/* Replace with your logo image asset */}
              <div className="w-16 h-16 rounded-full bg-[#0A2E20] border border-[#C5A880]/40 flex items-center justify-center p-1">
                <img 
                  src={logo} 
                  alt="Padma Decorations Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              </div>
              <div>
                <h2 className="text-xl font-serif tracking-widest text-[#C5A880] font-bold">PADMA</h2>
                <p className="text-[10px] tracking-[0.25em] text-white/60 uppercase -mt-1">Decorations</p>
              </div>
            </div>
            
            <p className="text-xs tracking-widest text-white/50 uppercase font-sans mb-6">
              Traditional Indian<br/>Wedding Decoration
            </p>

            {/* Social Media Circular Outline Icons (Native SVGs) */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-[#C5A880] hover:border-[#C5A880] transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-[#C5A880] hover:border-[#C5A880] transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Pinterest Alternative */}
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-[#C5A880] hover:border-[#C5A880] transition-colors duration-200">
                <span className="text-xs font-bold font-serif -mt-0.5">P</span>
              </a>
              {/* YouTube Alternative */}
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-[#C5A880] hover:border-[#C5A880] transition-colors duration-200">
                <span className="text-[10px] font-bold tracking-tighter">YT</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-[#C5A880] mb-5 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs text-white/70 font-sans">
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Services</a></li>
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Portfolio</a></li>
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Process</a></li>
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-span-1 md:col-span-3 text-center md:text-left">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-[#C5A880] mb-5 font-sans">
              Services
            </h4>
            <ul className="space-y-3 text-xs text-white/70 font-sans">
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Stage Decor</a></li>
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Mandap Decor</a></li>
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Entrance Decor</a></li>
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Pelli Pandiri</a></li>
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Housewarming Decor</a></li>
              <li><a href="#" className="hover:text-[#C5A880] transition-colors duration-200">Temple Decor</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-[#C5A880] mb-5 font-sans">
              Contact Us
            </h4>
            <ul className="space-y-4 text-xs text-white/70 font-sans">
              {/* Phone Icon SVG */}
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-4 h-4 text-[#C5A880] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+919123456789" className="hover:text-[#C5A880] transition-colors duration-200">
                  +91 91234 56789
                </a>
              </li>
              {/* Mail Icon SVG */}
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-4 h-4 text-[#C5A880] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@padmadecorations.com" className="hover:text-[#C5A880] transition-colors duration-200 break-all">
                  hello@padmadecorations.com
                </a>
              </li>
              {/* Map Marker Icon SVG */}
              <li className="flex items-start justify-center md:justify-start gap-3">
                <svg className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/40 font-sans tracking-wide">
          <p>© 2026 Padma Decorations. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/60 transition-colors duration-200">Privacy Policy</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-white/60 transition-colors duration-200">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;