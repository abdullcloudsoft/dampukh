import React, { useState } from 'react';
import { MessageCircle, Phone, Sparkles, X } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  const [selectedItemForOrder, setSelectedItemForOrder] = useState<MenuItem | null>(null);

  const handleQuickWhatsAppOrder = (dish: MenuItem) => {
    const text = encodeURIComponent(
      `Hello Dampukh Restaurant, I would like to order: ${dish.name}. Please confirm availability and pricing.`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="menu" aria-label="Restaurant Menu" className="py-12 sm:py-16 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-9">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2E5A44] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A45]" />
            <span>Desi & BBQ Selection</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#28231D]">
            Featured Menu
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6C645A] leading-relaxed">
            Authentic Peshawari dishes and charcoal-grilled desi favorites.
          </p>
        </div>

        {/* 8-Item Menu Grid: Desktop: 3-column, Tablet: 2-column, Mobile: 1-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {MENU_ITEMS.map((dish) => (
            <article
              key={dish.id}
              className="group bg-[#FFFFFF] rounded-xl border border-[#EAE3D2] p-3.5 sm:p-4 flex flex-col justify-between hover:border-[#C59A45]/60 hover:shadow-xs transition-all duration-200"
              id={`menu-item-${dish.id}`}
            >
              <div>
                {/* Compact Food Image Container - Small as strictly mandated */}
                <div className="relative w-full h-36 sm:h-40 rounded-lg overflow-hidden bg-[#F2EDE2] mb-3 shrink-0">
                  <img
                    src={dish.imageUrl}
                    alt={dish.imageAlt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#1F1914]/80 text-[#FAF6EE] backdrop-blur-xs">
                      {dish.price}
                    </span>
                  </div>
                </div>

                {/* Dish Name */}
                <h3 className="font-serif-heading text-base sm:text-lg font-bold text-[#28231D] leading-snug group-hover:text-[#2E5A44] transition-colors">
                  {dish.name}
                </h3>

                {/* One Short Description */}
                <p className="mt-1 text-xs text-[#6C645A] leading-relaxed line-clamp-2">
                  {dish.description}
                </p>
              </div>

              {/* Bottom Card Footer with Price & Small Order Button */}
              <div className="mt-3.5 pt-3 border-t border-[#F0EBE0] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8B6B23]">
                  {dish.price}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedItemForOrder(dish)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#2E5A44] hover:bg-[#234836] text-[#FAF7F2] text-xs font-semibold transition-colors shadow-2xs"
                  aria-label={`Order ${dish.name}`}
                  id={`order-btn-${dish.id}`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#E0D2A8]" />
                  <span>Order</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Informational disclaimer as required */}
        <div className="mt-7 text-center">
          <p className="text-[11px] sm:text-xs text-[#8A8175] italic">
            * Suggested website menu items. Exact daily availability and prices confirmed on order.
          </p>
        </div>
      </div>

      {/* Small Compact Order Dialog */}
      {selectedItemForOrder && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1914]/60 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-sm bg-[#FFFFFF] rounded-xl border border-[#EAE3D2] p-5 shadow-lg">
            <button
              type="button"
              onClick={() => setSelectedItemForOrder(null)}
              className="absolute top-3 right-3 p-1.5 rounded-md text-[#786F64] hover:bg-[#F2ECE1] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <img
                src={selectedItemForOrder.imageUrl}
                alt={selectedItemForOrder.imageAlt}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h4 id="order-modal-title" className="font-serif-heading text-sm font-bold text-[#28231D]">
                  {selectedItemForOrder.name}
                </h4>
                <p className="text-xs text-[#8B6B23] font-medium">{selectedItemForOrder.price}</p>
              </div>
            </div>

            <p className="text-xs text-[#6C645A] mb-4">
              Place your order directly with Dampukh Restaurant via WhatsApp or phone call.
            </p>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  handleQuickWhatsAppOrder(selectedItemForOrder);
                  setSelectedItemForOrder(null);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#2E5A44] hover:bg-[#234836] text-[#FAF7F2] text-xs font-semibold transition-colors"
                id="modal-order-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-[#DDC89A]" />
                <span>Order via WhatsApp</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#FAF6EE] hover:bg-[#F2ECE1] border border-[#E3DAC9] text-[#28231D] text-xs font-semibold transition-colors text-center"
                id="modal-order-call-btn"
              >
                <Phone className="w-4 h-4 text-[#2E5A44]" />
                <span>Call +92 333 3030248</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
