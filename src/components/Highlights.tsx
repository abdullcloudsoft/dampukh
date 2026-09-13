import React from 'react';
import { Flame, Sparkles, Utensils, Heart } from 'lucide-react';
import { FOOD_HIGHLIGHTS } from '../data/restaurantData';

export const Highlights: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#C59A45]" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-[#C59A45]" />;
      case 'utensils':
        return <Utensils className="w-5 h-5 text-[#C59A45]" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-[#C59A45]" />;
      default:
        return <Utensils className="w-5 h-5 text-[#C59A45]" />;
    }
  };

  return (
    <section aria-label="Restaurant Highlights" className="border-b border-[#EAE3D2] bg-[#F7F3EB] py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {FOOD_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 sm:p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E8E1D4] shadow-xs hover:border-[#D6CAAF] transition-colors"
              id={`highlight-${item.id}`}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF6EE] border border-[#E5DBCA] flex items-center justify-center shrink-0">
                {getIcon(item.iconName)}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#28231D] leading-snug">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
