import React, { useState, useEffect } from 'react';
import cta_image from "../assets/cta_image.png";
import mobile_cta from "../assets/mobile_cta.png"; // Ensure this matches your file paths setup

const CtaBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Fallback state handler to detect small screen layouts
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check on mount
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full bg-[#FAF6F0] py-8 md:py-12 px-4 flex justify-center items-center">
      {/* Outer Banner Box with traditional double-border accent */}
      <div 
        className="relative w-full max-w-6xl rounded-xl p-6 md:p-8 lg:p-12 overflow-hidden border border-[#C5A880] shadow-2xl bg-cover bg-center transition-all duration-300" 
        style={{ 
          backgroundImage: `url(${isMobile ? mobile_cta : cta_image})`,
          backgroundPosition: isMobile ? 'center bottom' : 'center 20%' 
        }}
      >
        
        {/* Inner thin border frame typical of elegant Indian decor styling */}
        <div className="absolute inset-2 md:inset-3 border border-[#C5A880]/30 rounded-lg pointer-events-none z-0"></div>

        {/* Banner Layout Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-4 min-h-[340px] md:min-h-0">
          
          {/* Left Element: Traditional Diya / Lamp (Hidden on mobile because mobile_cta.png embeds it natively) */}
          <div className="hidden md:col-span-3 md:flex justify-center md:justify-start transform md:-translate-x-4">
            <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
              <img 
                src="image_a2c356.jpg" 
                alt="Traditional Diya Element" 
                className="w-full h-full object-contain object-left drop-shadow-[0_0_15px_rgba(197,168,128,0.4)]"
                style={{ clipPath: 'inset(0% 65% 0% 0%)', transform: 'scale(2.5) translateX(20%)' }} 
              />
            </div>
          </div>

          {/* Center Element: Content & Call to Action (Centered and spaced cleanly for thumb clicks) */}
          <div className="col-span-1 md:col-span-6 text-center text-white font-serif px-2 py-8 md:py-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-wide mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Let's Create Something
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#D4AF37] font-normal tracking-wide mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Beautiful Together
            </h3>
            
            <p className="text-xs md:text-sm text-gray-200 font-sans tracking-wide max-w-md mx-auto mb-6 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              Share your event details and get a customized decoration plan.
            </p>

            {/* Premium Gold Button with WhatsApp-style Icon integration */}
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B89254] via-[#D4AF37] to-[#B89254] text-white font-sans text-xs md:text-sm font-semibold tracking-wider uppercase px-6 py-3.5 rounded-md shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200">
              Book a Consultation
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.06 1.053 11.43 1.053c-5.44 0-9.866 4.372-9.87 9.802 0 1.677.448 3.315 1.3 4.757l-.989 3.615 3.748-.973zm11.534-6.611c-.303-.151-1.791-.88-2.068-.98-.277-.101-.478-.151-.68.151-.202.303-.781.98-.956 1.181-.176.202-.352.227-.655.076-1.72-.86-2.875-1.516-4.027-3.483-.303-.518.303-.481.867-1.605.093-.186.046-.349-.023-.5-.069-.151-.68-1.636-.931-2.24-.246-.59-.496-.51-.68-.52-.176-.009-.377-.01-.578-.01s-.528.076-.804.377c-.277.303-1.056 1.031-1.056 2.516s1.08 2.917 1.231 3.118c.151.202 2.126 3.245 5.15 4.553.719.311 1.28.497 1.717.636.722.23 1.38.197 1.9.12.579-.087 1.791-.73 2.043-1.433.251-.704.251-1.308.176-1.433-.075-.127-.277-.202-.579-.354z"/>
              </svg>
            </button>
          </div>

          {/* Right Element: Floral Arrangement Basket (Hidden on mobile to prioritize the vertical portrait background format) */}
          <div className="hidden md:col-span-3 md:flex justify-center md:justify-end transform md:translate-x-4">
            <div className="relative w-44 h-44 md:w-56 md:h-56 flex items-center justify-center">
              <img 
                src="image_a2c356.jpg" 
                alt="Flower Basket Element" 
                className="w-full h-full object-contain object-right"
                style={{ clipPath: 'inset(0% 0% 0% 60%)', transform: 'scale(2.5) translateX(-20%)' }} 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CtaBanner;