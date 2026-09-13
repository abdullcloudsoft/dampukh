import React from 'react';
import { Phone, Mail, MapPin, Navigation, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" aria-label="Contact Dampukh Restaurant" className="py-12 sm:py-16 bg-[#F7F3EB] border-t border-[#EAE3D2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-9">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2E5A44] mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#C59A45]" />
            <span>Visit Us in Rawalpindi</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#28231D]">
            Contact & Location
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6C645A]">
            Reach out directly for orders, inquiries, or table reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-xl border border-[#EAE3D2] p-5 sm:p-7 flex flex-col justify-between shadow-2xs">
            <div>
              <h3 className="font-serif-heading text-xl font-bold text-[#28231D]">
                {RESTAURANT_INFO.name}
              </h3>
              <p className="text-xs text-[#8A8175] mt-0.5 mb-6">
                Liaquat Bagh, Murree Road, Rawalpindi
              </p>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-[#F5EFE3] border border-[#E5DAC6] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#2E5A44]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8B6B23] uppercase tracking-wider block">
                      Address
                    </span>
                    <p className="text-sm text-[#28231D] mt-0.5 leading-relaxed">
                      {RESTAURANT_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-[#F5EFE3] border border-[#E5DAC6] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#2E5A44]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8B6B23] uppercase tracking-wider block">
                      Phone
                    </span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="text-sm font-semibold text-[#28231D] hover:text-[#2E5A44] transition-colors mt-0.5 inline-block"
                      id="contact-phone-link"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-[#F5EFE3] border border-[#E5DAC6] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#2E5A44]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8B6B23] uppercase tracking-wider block">
                      Email
                    </span>
                    <a
                      href={`mailto:${RESTAURANT_INFO.email}`}
                      className="text-sm text-[#28231D] hover:text-[#2E5A44] transition-colors mt-0.5 inline-block break-all"
                      id="contact-email-link"
                    >
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Action Buttons */}
            <div className="mt-8 pt-5 border-t border-[#F0EBE0] grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#2E5A44] hover:bg-[#224634] text-[#FAF7F2] text-xs font-semibold transition-colors text-center shadow-xs"
                id="contact-btn-call"
              >
                <Phone className="w-3.5 h-3.5 text-[#DFD0AA]" />
                <span>Call Now</span>
              </a>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5A] text-[#0C2413] text-xs font-semibold transition-colors text-center shadow-xs"
                id="contact-btn-whatsapp"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#0C2413] text-[#0C2413]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#F3EDE2] hover:bg-[#EAE1D2] border border-[#DFD5C3] text-[#28231D] text-xs font-semibold transition-colors text-center"
                id="contact-btn-directions"
              >
                <Navigation className="w-3.5 h-3.5 text-[#2E5A44]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual / Location Container */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-xl border border-[#EAE3D2] overflow-hidden flex flex-col shadow-2xs min-h-[300px]">
            <div className="p-4 bg-[#FAF7F1] border-b border-[#EAE3D2] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2E5A44]" />
                <span className="text-xs font-semibold text-[#28231D]">
                  Murree Road & Liaquat Bagh Map View
                </span>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#2E5A44] hover:underline"
              >
                Open Google Maps ↗
              </a>
            </div>

            <div className="relative flex-1 w-full min-h-[260px] bg-[#EAE5DA]">
              {/* Google Maps Embed iframe with exact location */}
              <iframe
                title="Dampukh Restaurant Location Map"
                src="https://maps.google.com/maps?q=Liaquat%20Bagh%20Murree%20Road%20Rawalpindi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer"
                aria-label="Map showing location of Dampukh Restaurant at Liaquat Bagh, Rawalpindi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
