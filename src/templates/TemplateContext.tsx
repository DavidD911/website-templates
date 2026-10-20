import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { PaletteId, TemplateId } from "./types";
import type { VerticalId } from "../verticals/types";
import { templateList, templatesForVertical } from "./registry";

const VERTICAL_KEY = "showcase-vertical";
const TEMPLATE_KEY = "showcase-template";
const PALETTE_KEY = "showcase-palette";

function readStored<T extends string>(key: string, fallback: T, valid: readonly T[]): T {
  try {
    const value = localStorage.getItem(key) as T | null;
    return value && valid.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

interface TemplateContextValue {
  vertical: VerticalId;
  template: TemplateId;
  palette: PaletteId;
  setVertical: (id: VerticalId) => void;
  setTemplate: (id: TemplateId) => void;
  setPalette: (id: PaletteId) => void;
}

const VERTICAL_IDS = ["storefront", "services", "realestate"] as const;
const TEMPLATE_IDS = ["horizon", "pulse", "atelier", "meadow", "foreman", "haven", "keystone"] as const;
const PALETTE_IDS = ["violet", "emerald", "sunset", "midnight"] as const;

const TemplateContext = createContext<TemplateContextValue | null>(null);

export function TemplateProvider({ children }: { children: ReactNode }) {
  const [vertical, setVerticalState] = useState<VerticalId>(() =>
    readStored(VERTICAL_KEY, "storefront", VERTICAL_IDS)
  );
  const [template, setTemplate] = useState<TemplateId>(() => {
    const stored = readStored(TEMPLATE_KEY, "horizon", TEMPLATE_IDS);
    const initialVertical = readStored(VERTICAL_KEY, "storefront", VERTICAL_IDS);
    const storedMeta = templateList.find((t) => t.id === stored);
    return storedMeta && storedMeta.vertical === initialVertical
      ? stored
      : templatesForVertical(initialVertical)[0].id;
  });
  const [palette, setPalette] = useState<PaletteId>(() =>
    readStored(PALETTE_KEY, "violet", PALETTE_IDS)
  );

  useEffect(() => {
    try {
      localStorage.setItem(VERTICAL_KEY, vertical);
    } catch {
      // ignore
    }
  }, [vertical]);

  useEffect(() => {
    try {
      localStorage.setItem(TEMPLATE_KEY, template);
    } catch {
      // ignore
    }
  }, [template]);

  useEffect(() => {
    try {
      localStorage.setItem(PALETTE_KEY, palette);
    } catch {
      // ignore
    }
  }, [palette]);

  function setVertical(id: VerticalId) {
    setVerticalState(id);
    const validForVertical = templatesForVertical(id);
    if (!validForVertical.some((t) => t.id === template)) {
      setTemplate(validForVertical[0].id);
    }
  }

  return (
    <TemplateContext.Provider
      value={{ vertical, template, palette, setVertical, setTemplate, setPalette }}
    >
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const ctx = useContext(TemplateContext);
  if (!ctx) throw new Error("useTemplate must be used within a TemplateProvider");
  return ctx;
}
