import { MenuItem, FoodHighlight, GalleryItem, RestaurantDetails } from '../types';

export const RESTAURANT_INFO: RestaurantDetails = {
  name: 'Dampukh Restaurant',
  tagline: 'Authentic Peshawari Taste, Served Fresh',
  address: 'Shop # J-256/B, Liaquat Bagh, Murree Rd, Rawalpindi, Pakistan',
  phone: '+92 333 3030248',
  phoneRaw: '+923333030248',
  email: 'dampukhrestaurent@gmail.com',
  whatsappNumber: '923333030248',
  whatsappUrl: 'https://wa.me/923333030248',
  facebookUrl: 'https://www.facebook.com/peshawarinamkmanditikkahouse/',
  instagramUrl: 'https://www.instagram.com/dampukh_restaurant/',
  googleMapsUrl: 'https://maps.google.com/?q=Shop+%23+J-256%2FB,+Liaquat+Bagh,+Murree+Rd,+Rawalpindi,+Pakistan',
};

// 8 Items Maximum as strictly required
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'chapli-kabab',
    name: 'Peshawari Chapli Kabab',
    description: 'Traditional Peshawari-style spiced minced-meat kabab.',
    price: 'Price on Order',
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=480&q=80',
    imageAlt: 'Authentic Peshawari Chapli Kabab with aromatic herbs and spices',
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    description: 'Charcoal-grilled chicken with traditional spices.',
    price: 'Price on Order',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=480&q=80',
    imageAlt: 'Succulent charcoal-grilled Chicken Tikka seasoned with desi spices',
  },
  {
    id: 'seekh-kabab',
    name: 'Seekh Kabab',
    description: 'Juicy seasoned meat grilled over charcoal.',
    price: 'Price on Order',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=480&q=80',
    imageAlt: 'Freshly grilled juicy Seekh Kababs over live coals',
  },
  {
    id: 'mutton-karahi',
    name: 'Mutton Karahi',
    description: 'Rich and flavorful traditional mutton karahi.',
    price: 'Price on Order',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=480&q=80',
    imageAlt: 'Traditional simmering Mutton Karahi cooked in an authentic wok',
  },
  {
    id: 'chicken-karahi',
    name: 'Chicken Karahi',
    description: 'Classic Pakistani chicken karahi with aromatic spices.',
    price: 'Price on Order',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=480&q=80',
    imageAlt: 'Classic Pakistani Chicken Karahi with fresh ginger and coriander garnish',
  },
  {
    id: 'namkeen-gosht',
    name: 'Peshawari Namkeen Gosht',
    description: 'Traditional-style meat dish with a simple savory flavor profile.',
    price: 'Price on Order',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=480&q=80',
    imageAlt: 'Tender slow-simmered Peshawari Namkeen Gosht in its natural savory juices',
  },
  {
    id: 'bbq-platter',
    name: 'BBQ Platter',
    description: 'A selection of grilled BBQ favorites.',
    price: 'Price on Order',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=480&q=80',
    imageAlt: 'Assorted sizzling Pakistani BBQ platter with fresh chutneys',
  },
  {
    id: 'fresh-naan',
    name: 'Fresh Naan',
    description: 'Soft traditional naan served with desi dishes.',
    price: 'Price on Order',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=480&q=80',
    imageAlt: 'Hot traditional tandoori baked naan fresh from the clay oven',
  },
];

// Compact Food Highlights
export const FOOD_HIGHLIGHTS: FoodHighlight[] = [
  {
    id: 'flv',
    title: 'Peshawari-Inspired Flavors',
    iconName: 'sparkles',
  },
  {
    id: 'bbq',
    title: 'Traditional BBQ',
    iconName: 'flame',
  },
  {
    id: 'desi',
    title: 'Desi Food',
    iconName: 'utensils',
  },
  {
    id: 'exp',
    title: 'Warm Dining Experience',
    iconName: 'heart',
  },
];

// Compact Gallery (6 distinct photos, no duplicates)
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Traditional Peshawari BBQ Skewers',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    alt: 'Authentic charcoal skewered BBQ prepared in traditional Peshawari style',
  },
  {
    id: 'gal-2',
    title: 'Fresh Charcoal Chicken Tikka',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    alt: 'Tikka pieces grilled fresh on open charcoal fire with lemon garnish',
  },
  {
    id: 'gal-3',
    title: 'Aromatic Desi Karahi',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    alt: 'Rich authentic karahi curry served in traditional metallic dish',
  },
  {
    id: 'gal-4',
    title: 'Tender Peshawari Meat Special',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    alt: 'Slow-cooked traditional meat specialty with rich desi flavors',
  },
  {
    id: 'gal-5',
    title: 'Fresh Tandoori Naan',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    alt: 'Fluffy golden naan straight out of the clay tandoor oven',
  },
  {
    id: 'gal-6',
    title: 'Traditional Desi Dining Atmosphere',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    alt: 'Warm and inviting dining setting ready for fresh family meals',
  },
];
