import { Briefcase, Check, LayoutTemplate, Palette } from "lucide-react";
import { useTemplate } from "./TemplateContext";
import { paletteList, templatesForVertical } from "./registry";
import { verticalList } from "../verticals/registry";

export default function TemplateSwitcher() {
  const { vertical, template, palette, setVertical, setTemplate, setPalette } = useTemplate();
  const availableTemplates = templatesForVertical(vertical);

  return (
    <div
      className="sticky top-0 z-[70] flex items-center gap-5 overflow-x-auto whitespace-nowrap bg-[#0f0f14] px-4 text-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ height: "var(--switcher-h)" }}
    >
      <div className="flex flex-shrink-0 items-center gap-2">
        <Briefcase className="h-3.5 w-3.5 text-white/40" />
        <div className="flex gap-1 rounded-full bg-white/10 p-1">
          {verticalList.map((v) => (
            <button
              key={v.id}
              type="button"
              title={v.tagline}
              onClick={() => setVertical(v.id)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                vertical === v.id ? "bg-white text-[#0f0f14]" : "text-white/60 hover:text-white"
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>
      </div>

      <div className="h-4 w-px flex-shrink-0 bg-white/15" />

      <div className="flex flex-shrink-0 items-center gap-2">
        <LayoutTemplate className="h-3.5 w-3.5 text-white/40" />
        <div className="flex gap-1 rounded-full bg-white/10 p-1">
          {availableTemplates.map((t) => (
            <button
              key={t.id}
              type="button"
              title={t.tagline}
              onClick={() => setTemplate(t.id)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                template === t.id ? "bg-white text-[#0f0f14]" : "text-white/60 hover:text-white"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div className="h-4 w-px flex-shrink-0 bg-white/15" />

      <div className="flex flex-shrink-0 items-center gap-2">
        <Palette className="h-3.5 w-3.5 text-white/40" />
        <div className="flex gap-1.5">
          {paletteList.map((p) => (
            <button
              key={p.id}
              type="button"
              title={p.name}
              aria-label={`Use ${p.name} palette`}
              onClick={() => setPalette(p.id)}
              className="relative flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-offset-2 ring-offset-[#0f0f14] transition-all"
              style={{
                backgroundColor: p.swatch,
                ["--tw-ring-color" as string]: palette === p.id ? "white" : "transparent",
              }}
            >
              {palette === p.id && <Check className="h-3 w-3 text-white drop-shadow" strokeWidth={3} />}
            </button>
          ))}
        </div>
      </div>

      <span className="ml-auto flex-shrink-0 text-[11px] font-medium uppercase tracking-wider text-white/30">
        Template preview
      </span>
    </div>
  );
}
