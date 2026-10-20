import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "../../types";
import { formatPrice } from "../../lib/format";

const AUTOPLAY_MS = 4500;

function circularOffset(index: number, active: number, length: number) {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

export default function Carousel({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();
  const length = products.length;

  const goTo = useCallback((i: number) => setActive(((i % length) + length) % length), [length]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || length <= 1) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % length), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, length]);

  const activeProduct = products[active];

  return (
    <div
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative order-2 lg:order-1">
        <span className="mb-4 block font-display text-xs uppercase tracking-[0.2em] text-ink/40">
          {String(active + 1).padStart(2, "0")} / {String(length).padStart(2, "0")}
        </span>
        <h3 className="font-display text-3xl text-ink sm:text-4xl">{activeProduct.name}</h3>
        <p className="mt-3 max-w-sm text-ink/60">{activeProduct.tagline}</p>
        <p className="mt-5 font-display text-2xl text-ink">{formatPrice(activeProduct.price)}</p>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => navigate(`/product/${activeProduct.slug}`)}
            className="ml-2 text-xs font-medium uppercase tracking-[0.15em] text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
          >
            View piece
          </button>
        </div>

        <div className="mt-10 flex gap-3">
          {products.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`Show ${p.name}`}
              onClick={() => goTo(i)}
              className={`relative h-14 w-14 overflow-hidden border transition-all ${
                i === active ? "border-ink" : "border-ink/10 opacity-50 hover:opacity-100"
              }`}
            >
              <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="relative order-1 mx-auto h-[360px] w-full max-w-sm lg:order-2 lg:h-[420px]">
        {products.map((product, i) => {
          const offset = circularOffset(i, active, length);
          const abs = Math.abs(offset);
          if (abs > 2) return null;
          return (
            <motion.button
              key={product.id}
              type="button"
              onClick={() => (offset === 0 ? navigate(`/product/${product.slug}`) : goTo(i))}
              className="absolute inset-0 flex flex-col overflow-hidden border border-ink/10 bg-surface text-left shadow-lift"
              style={{ zIndex: length - abs }}
              animate={{
                x: offset * 34,
                y: abs * 22,
                rotate: offset * 5,
                scale: offset === 0 ? 1 : 0.92 - abs * 0.04,
                opacity: abs > 2 ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
            >
              <div
                className="relative flex-1 overflow-hidden"
                style={{ background: `linear-gradient(160deg, ${product.gradient[0]}, ${product.gradient[1]})` }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 mix-blend-soft-light"
                  style={{
                    background: `linear-gradient(160deg, ${product.gradient[0]}, ${product.gradient[1]})`,
                    opacity: 0.5,
                  }}
                />
              </div>
              <div className="border-t border-ink/10 bg-surface px-5 py-3">
                <p className="truncate font-display text-sm text-ink">{product.name}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
