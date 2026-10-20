import type { VerticalId } from "../verticals/types";

export type TemplateId = "horizon" | "pulse" | "atelier" | "meadow" | "foreman" | "haven" | "keystone";
export type PaletteId = "violet" | "emerald" | "sunset" | "midnight";

export interface TemplateMeta {
  id: TemplateId;
  vertical: VerticalId;
  name: string;
  tagline: string;
}

export interface PaletteMeta {
  id: PaletteId;
  name: string;
  swatch: string;
}
