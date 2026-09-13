import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#28231D] selection:bg-[#EAE3D2] selection:text-[#1F1914] overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Compact Hero Section */}
        <Hero />

        {/* 2. Compact Highlights Section */}
        <Highlights />

        {/* 3. Small Menu Section (7-8 items max, compact cards) */}
        <MenuSection />

        {/* 4. Elegant, concise About Section */}
        <AboutSection />

        {/* 5. Food Gallery (6 distinct photos, no duplicates) */}
        <GallerySection />

        {/* 6. Contact & Map Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Unobtrusive Floating WhatsApp Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
