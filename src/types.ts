export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FoodHighlight {
  id: string;
  title: string;
  iconName: 'flame' | 'utensils' | 'heart' | 'sparkles';
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
}

export interface RestaurantDetails {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  phoneRaw: string;
  email: string;
  whatsappNumber: string;
  whatsappUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  googleMapsUrl: string;
}
