import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3D2]'
          : 'bg-[#FDFBF7] border-b border-[#EAE3D2]/70'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group text-left"
            id="navbar-brand"
          >
            <span className="w-9 h-9 rounded-full bg-[#2E5A44] text-[#F8F5EE] flex items-center justify-center font-serif-heading text-lg font-bold border border-[#C59A45]/40 shadow-xs transition-transform group-hover:scale-105">
              D
            </span>
            <div className="flex flex-col">
              <span className="font-serif-heading text-lg sm:text-xl font-bold tracking-tight text-[#28231D] leading-none">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#6C645A] uppercase mt-0.5">
                Rawalpindi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#4A433A] hover:text-[#2E5A44] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C59A45] hover:after:w-full after:transition-all after:duration-200"
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#2E5A44] text-[#FDFBF7] text-xs font-semibold hover:bg-[#244836] transition-colors shadow-xs"
              id="desktop-call-button"
            >
              <Phone className="w-3.5 h-3.5 text-[#E2D2A8]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu and mobile call button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              aria-label="Call Dampukh Restaurant"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#2E5A44] text-[#FDFBF7] hover:bg-[#244836] transition-colors"
              id="mobile-call-icon-button"
            >
              <Phone className="w-4 h-4 text-[#E2D2A8]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#28231D] hover:bg-[#F3EDE2] transition-colors focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#28231D]" />
              ) : (
                <Menu className="w-6 h-6 text-[#28231D]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-[#EAE3D2] bg-[#FDFBF7] px-4 pt-2 pb-5 space-y-2.5 shadow-sm animate-in fade-in slide-in-from-top-2 duration-150"
          id="mobile-navigation-drawer"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-[#28231D] hover:bg-[#F5EFE4] hover:text-[#2E5A44] transition-colors flex items-center justify-between"
                id={`mobile-nav-${link.label.toLowerCase()}`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#9E7728] opacity-70">›</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#EAE3D2] flex flex-col gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-[#2E5A44] text-white text-sm font-semibold hover:bg-[#244836] transition-colors text-center"
              id="mobile-drawer-call-btn"
            >
              <Phone className="w-4 h-4 text-[#E2D2A8]" />
              <span>Call Now: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
