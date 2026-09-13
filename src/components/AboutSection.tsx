import React from 'react';
import { MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" aria-label="About Dampukh Restaurant" className="py-12 sm:py-16 bg-[#F7F3EB] border-t border-b border-[#EAE3D2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE9DC] text-xs font-semibold uppercase tracking-wider text-[#2E5A44] mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#C59A45]" />
          <span>Rawalpindi, Pakistan</span>
        </div>

        <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#28231D] mb-4">
          About Dampukh Restaurant
        </h2>

        {/* Concise copy strictly respecting prompt bounds */}
        <p className="text-base sm:text-lg text-[#554D43] leading-relaxed max-w-2xl mx-auto font-normal">
          Dampukh Restaurant is located at Liaquat Bagh on Murree Road, Rawalpindi, offering a place to enjoy traditional Pakistani and Peshawari-inspired flavors.
        </p>

        {/* Direct Address Badge */}
        <div className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm text-[#736A5E] bg-[#FFFFFF] px-4 py-2 rounded-lg border border-[#E5DDCD] shadow-2xs">
          <span className="font-medium text-[#28231D]">Location:</span>
          <span>{RESTAURANT_INFO.address}</span>
        </div>
      </div>
    </section>
  );
};
