import React from 'react';
import { MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Quick WhatsApp Contact"
      className="fixed bottom-5 right-5 z-40 print:hidden"
    >
      <a
        href={RESTAURANT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-[#0A2613] hover:bg-[#20BE5B] shadow-md hover:shadow-lg transition-all duration-200 border border-[#1BA84E]"
        aria-label={`Chat with Dampukh Restaurant on WhatsApp (${RESTAURANT_INFO.phone})`}
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-5 h-5 fill-[#0A2613] text-[#0A2613]" />
        <span className="hidden sm:inline text-xs font-bold tracking-tight text-[#0A2613]">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
};
