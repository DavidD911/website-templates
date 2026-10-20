import type { LucideIcon } from "lucide-react";

export type Category = "Audio" | "Wearables" | "Bags" | "Footwear" | "Home" | "Eyewear";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  tagline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image: string;
  gradient: [string, string];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  colors: string[];
  stock: number;
}

export interface CartLine {
  productId: string;
  quantity: number;
  color: string;
}

export type ServiceCategory = "Lawn Care" | "Design" | "Planting" | "Hardscaping" | "Tree Care" | "Lighting";

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: LucideIcon;
  image: string;
  tagline: string;
  description: string;
  features: string[];
  priceFrom: number;
  gradient: [string, string];
}

export interface Project {
  id: string;
  title: string;
  category: ServiceCategory;
  location: string;
  image: string;
  beforeImage?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  service: ServiceCategory;
}

export type ListingStatus = "For Sale" | "Pending" | "Sold";
export type PropertyType = "House" | "Condo" | "Townhome";

export interface Listing {
  id: string;
  slug: string;
  title: string;
  address: string;
  neighborhood: string;
  price: number;
  status: ListingStatus;
  propertyType: PropertyType;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  description: string;
  features: string[];
  images: string[];
  isFeatured?: boolean;
}

export interface Agent {
  name: string;
  title: string;
  photo: string;
  phone: string;
  email: string;
  bio: string;
  yearsExperience: number;
  totalSales: string;
  credentials: string[];
}

export interface RealEstateTestimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  context: string;
}
