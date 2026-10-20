import type { PaletteMeta, TemplateMeta } from "./types";

export const templateList: TemplateMeta[] = [
  { id: "horizon", vertical: "storefront", name: "Horizon", tagline: "Warm, airy, 3D coverflow" },
  { id: "pulse", vertical: "storefront", name: "Pulse", tagline: "Bold, dark, full-bleed marquee" },
  { id: "atelier", vertical: "storefront", name: "Atelier", tagline: "Editorial, serif, stacked cards" },
  { id: "meadow", vertical: "services", name: "Meadow", tagline: "Warm, photo-led, approachable" },
  { id: "foreman", vertical: "services", name: "Foreman", tagline: "Bold, trust-forward, before/after slider" },
  { id: "haven", vertical: "realestate", name: "Haven", tagline: "Personal agent brand, portfolio-style" },
  { id: "keystone", vertical: "realestate", name: "Keystone", tagline: "Search-first brokerage tool" },
];

export const paletteList: PaletteMeta[] = [
  { id: "violet", name: "Violet", swatch: "#6f3bff" },
  { id: "emerald", name: "Emerald", swatch: "#10b981" },
  { id: "sunset", name: "Sunset", swatch: "#f43f5e" },
  { id: "midnight", name: "Midnight", swatch: "#6366f1" },
];

export function templatesForVertical(vertical: string) {
  return templateList.filter((t) => t.vertical === vertical);
}
