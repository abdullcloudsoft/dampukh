import React from 'react';
import { Phone, ArrowDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Welcome to Dampukh Restaurant"
      className="relative overflow-hidden w-full bg-[#2C241B]"
    >
      {/* Hero Single Image Background - Carefully selected authentic Pakistani grilled skewers and BBQ platter */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=82"
          alt="Authentic Peshawari charcoal-grilled meats, tikka and seekh kababs at Dampukh Restaurant"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center sm:object-[center_35%] scale-100 transition-transform duration-700"
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle, natural lighting gradient to ensure WCAG AA text legibility without turning the screen dark */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1F1914]/85 via-[#1F1914]/50 to-[#1F1914]/30 sm:bg-gradient-to-r sm:from-[#1F1914]/85 sm:via-[#1F1914]/55 sm:to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Container - Compact & Direct */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 flex flex-col justify-center min-h-[380px] sm:min-h-[440px] md:min-h-[480px]">
        <div className="max-w-xl text-left">
          {/* Subtle gold location badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FDFBF7]/15 backdrop-blur-xs border border-[#C59A45]/40 text-[#F4E8D0] text-xs font-medium mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59A45]"></span>
            <span>Liaquat Bagh, Murree Rd, Rawalpindi</span>
          </div>

          {/* Strict Hero Heading */}
          <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] drop-shadow-xs leading-tight">
            {RESTAURANT_INFO.name}
          </h1>

          {/* Strict Hero Tagline */}
          <p className="mt-2.5 text-base sm:text-lg md:text-xl font-medium text-[#EDE4D5] leading-relaxed max-w-lg">
            {RESTAURANT_INFO.tagline}
          </p>

          {/* Two Compact Buttons as requested */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              onClick={handleScrollToMenu}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#C59A45] hover:bg-[#B38734] text-[#1F1A14] text-sm font-semibold transition-colors shadow-xs"
              id="hero-explore-menu-btn"
            >
              <span>Explore Menu</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#FDFBF7]/90 hover:bg-[#FFFFFF] text-[#28231D] text-sm font-semibold transition-colors shadow-xs"
              id="hero-call-now-btn"
            >
              <Phone className="w-4 h-4 text-[#2E5A44]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
