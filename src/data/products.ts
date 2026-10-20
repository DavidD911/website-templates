import {
  Headphones,
  Watch,
  Camera,
  Backpack,
  Speaker,
  Glasses,
  LampDesk,
  Gamepad2,
  Footprints,
  Briefcase,
} from "lucide-react";
import type { Product } from "../types";

import haloImage from "../assets/products/halo-headphones.jpg";
import arcImage from "../assets/products/arc-watch.jpg";
import atlasImage from "../assets/products/atlas-backpack.jpg";
import pulseImage from "../assets/products/pulse-speaker.jpg";
import frameImage from "../assets/products/frame-camera.jpg";
import driftImage from "../assets/products/drift-sunglasses.jpg";
import glowImage from "../assets/products/glow-lamp.jpg";
import vectorImage from "../assets/products/vector-controller.jpg";
import strideImage from "../assets/products/stride-shoes.jpg";
import folioImage from "../assets/products/folio-briefcase.jpg";

export const products: Product[] = [
  {
    id: "p1",
    slug: "halo-wireless-headphones",
    name: "Halo Wireless Headphones",
    category: "Audio",
    price: 249,
    compareAtPrice: 299,
    tagline: "Studio-grade sound, all day comfort.",
    description:
      "Halo wraps immersive, studio-tuned sound in a featherlight aluminum frame. Adaptive noise cancellation reads your environment forty times a second, while 40-hour battery life means you charge on your schedule, not theirs.",
    features: [
      "Adaptive active noise cancellation",
      "40-hour battery, 5-minute quick charge = 6 hours",
      "Custom 40mm bio-cellulose drivers",
      "Multipoint Bluetooth 5.3 pairing",
    ],
    icon: Headphones,
    image: haloImage,
    gradient: ["#6f3bff", "#ae95ff"],
    rating: 4.8,
    reviewCount: 1204,
    isNew: true,
    colors: ["#14121f", "#e9e3ff", "#ff9d1f"],
    stock: 34,
  },
  {
    id: "p2",
    slug: "arc-smart-watch",
    name: "Arc Smart Watch",
    category: "Wearables",
    price: 329,
    tagline: "Time, tracked beautifully.",
    description:
      "Arc pairs a sapphire-crystal face with a health engine that quietly tracks heart rhythm, sleep stages, and recovery — surfacing only what's useful. Seven-day battery life means it disappears into your routine instead of interrupting it.",
    features: [
      "Always-on sapphire display",
      "7-day battery life",
      "ECG & blood-oxygen sensing",
      "5ATM water resistance",
    ],
    icon: Watch,
    image: arcImage,
    gradient: ["#ff9d1f", "#ffb84d"],
    rating: 4.6,
    reviewCount: 892,
    isNew: true,
    colors: ["#14121f", "#5a22f0", "#faf9f7"],
    stock: 51,
  },
  {
    id: "p3",
    slug: "atlas-travel-backpack",
    name: "Atlas Travel Backpack",
    category: "Bags",
    price: 189,
    tagline: "Built for the next flight out.",
    description:
      "Atlas carries a 15-inch laptop, a change of clothes, and everything else you swear you'll pack lighter next time — all in weatherproof recycled canvas with a hidden anti-theft pocket.",
    features: [
      "26L expandable main compartment",
      "Weatherproof recycled canvas shell",
      "Hidden anti-theft rear pocket",
      "Trolley strap for carry-on stacking",
    ],
    icon: Backpack,
    image: atlasImage,
    gradient: ["#2f157c", "#8b64ff"],
    rating: 4.9,
    reviewCount: 2033,
    isNew: true,
    colors: ["#14121f", "#3c179e", "#ffb84d"],
    stock: 18,
  },
  {
    id: "p4",
    slug: "pulse-portable-speaker",
    name: "Pulse Portable Speaker",
    category: "Audio",
    price: 129,
    tagline: "Room-filling sound, pocket-sized.",
    description:
      "Pulse throws 360-degree sound from a body small enough to clip to a bag strap. Fully submersible and built to survive the drop it will inevitably take.",
    features: [
      "360° dual-driver sound stage",
      "IP68 waterproof & dustproof",
      "24-hour battery life",
      "Pair two for true stereo",
    ],
    icon: Speaker,
    image: pulseImage,
    gradient: ["#5a22f0", "#ff9d1f"],
    rating: 4.5,
    reviewCount: 671,
    isNew: true,
    colors: ["#14121f", "#e9e3ff"],
    stock: 62,
  },
  {
    id: "p5",
    slug: "frame-mirrorless-camera",
    name: "Frame Mirrorless Camera",
    category: "Home",
    price: 899,
    tagline: "Every detail, exactly as you saw it.",
    description:
      "Frame's full-frame sensor and in-body stabilization make handheld low-light shots look tripod-steady. A fully articulating screen and dual card slots make it as comfortable on a film set as it is on a hiking trail.",
    features: [
      "33MP full-frame sensor",
      "5-axis in-body stabilization",
      "4K/60p video, 10-bit color",
      "Dual UHS-II card slots",
    ],
    icon: Camera,
    image: frameImage,
    gradient: ["#14121f", "#4a19c7"],
    rating: 4.7,
    reviewCount: 348,
    isNew: true,
    colors: ["#14121f", "#faf9f7"],
    stock: 9,
  },
  {
    id: "p6",
    slug: "drift-sunglasses",
    name: "Drift Polarized Sunglasses",
    category: "Eyewear",
    price: 159,
    tagline: "Handmade acetate, zero glare.",
    description:
      "Drift is cut from Italian bio-acetate and finished with polarized, scratch-resistant lenses that cut glare without dulling color — light enough to forget you're wearing them.",
    features: [
      "Polarized, UV400 lenses",
      "Hand-finished Italian bio-acetate",
      "Scratch-resistant coating",
      "Includes hard case & cloth",
    ],
    icon: Glasses,
    image: driftImage,
    gradient: ["#ffb84d", "#6f3bff"],
    rating: 4.4,
    reviewCount: 512,
    isNew: true,
    colors: ["#14121f", "#3c179e", "#ffb84d"],
    stock: 40,
  },
  {
    id: "p7",
    slug: "glow-desk-lamp",
    name: "Glow Adaptive Desk Lamp",
    category: "Home",
    price: 99,
    tagline: "Light that matches your day.",
    description:
      "Glow shifts color temperature through the day — brighter, cooler light for focus in the morning, warm and dim by evening — with a touch dimmer and USB-C passthrough for your other devices.",
    features: [
      "Circadian color temperature shift",
      "Touch dimmer, 10 brightness steps",
      "60W USB-C passthrough charging",
      "Aircraft-grade aluminum arm",
    ],
    icon: LampDesk,
    image: glowImage,
    gradient: ["#ff9d1f", "#5a22f0"],
    rating: 4.6,
    reviewCount: 289,
    colors: ["#14121f", "#faf9f7"],
    stock: 77,
  },
  {
    id: "p8",
    slug: "vector-gaming-controller",
    name: "Vector Pro Controller",
    category: "Home",
    price: 179,
    tagline: "Precision your thumbs will notice.",
    description:
      "Vector uses hall-effect sticks that never drift, swappable back paddles, and adjustable trigger stops — tuned with input from competitive players who don't tolerate lag.",
    features: [
      "Hall-effect analog sticks, drift-free",
      "4 swappable back paddles",
      "Adjustable trigger stops",
      "35-hour battery, USB-C",
    ],
    icon: Gamepad2,
    image: vectorImage,
    gradient: ["#4a19c7", "#ae95ff"],
    rating: 4.8,
    reviewCount: 964,
    colors: ["#14121f", "#5a22f0"],
    stock: 25,
  },
  {
    id: "p9",
    slug: "stride-running-shoes",
    name: "Stride Running Shoes",
    category: "Footwear",
    price: 149,
    compareAtPrice: 175,
    tagline: "Energy return, mile after mile.",
    description:
      "Stride's dual-density foam stack returns energy on every step, wrapped in a knit upper that breathes on long runs and molds to your foot within the first mile.",
    features: [
      "Dual-density responsive foam",
      "Breathable engineered knit upper",
      "Carbon-infused stability plate",
      "Recycled rubber outsole",
    ],
    icon: Footprints,
    image: strideImage,
    gradient: ["#6f3bff", "#ffb84d"],
    rating: 4.7,
    reviewCount: 1540,
    colors: ["#14121f", "#faf9f7", "#ff9d1f"],
    stock: 58,
  },
  {
    id: "p10",
    slug: "folio-leather-briefcase",
    name: "Folio Leather Briefcase",
    category: "Bags",
    price: 259,
    tagline: "Full-grain leather, built to age well.",
    description:
      "Folio is cut from full-grain leather that gets better with every year of use, structured enough for the office and soft enough to fold flat in a suitcase.",
    features: [
      "Full-grain vegetable-tanned leather",
      "Padded 14-inch laptop sleeve",
      "Brass hardware, cotton canvas lining",
      "Detachable, adjustable shoulder strap",
    ],
    icon: Briefcase,
    image: folioImage,
    gradient: ["#3c179e", "#ff9d1f"],
    rating: 4.9,
    reviewCount: 421,
    colors: ["#14121f", "#3c179e"],
    stock: 21,
  },
];

export const newArrivals = products.filter((p) => p.isNew);

export const categories = Array.from(new Set(products.map((p) => p.category)));

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);
}
