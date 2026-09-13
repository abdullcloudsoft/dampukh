import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" aria-label="Food Gallery" className="py-12 sm:py-16 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-9">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2E5A44] mb-2">
            <Camera className="w-3.5 h-3.5 text-[#C59A45]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#28231D]">
            Food Gallery
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6C645A]">
            A glimpse into traditional charcoal-grilled BBQ, karahi and desi specialties.
          </p>
        </div>

        {/* Compact 6-Image Grid (3 columns on desktop, 2 on mobile/tablet) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedPhoto(item);
              }}
              className="group relative h-40 sm:h-52 md:h-56 rounded-xl overflow-hidden cursor-pointer bg-[#F0EBE0] border border-[#EAE3D2] focus:outline-hidden focus:ring-2 focus:ring-[#C59A45]"
              id={`gallery-item-${item.id}`}
              aria-label={`View photo: ${item.title}`}
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1914]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3 sm:p-4">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-medium text-[#FDFBF7] drop-shadow-xs line-clamp-1">
                    {item.title}
                  </span>
                  <Maximize2 className="w-3.5 h-3.5 text-[#FDFBF7] shrink-0 ml-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14100C]/85 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#1F1914] rounded-xl overflow-hidden border border-[#524436] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#14100C]/80 text-[#FAF6EE] hover:bg-[#14100C] transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] flex items-center justify-center bg-[#0F0C09]">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-4 bg-[#1F1914] border-t border-[#3A3025]">
              <p className="text-sm font-medium text-[#EDE5D8]">
                {selectedPhoto.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
