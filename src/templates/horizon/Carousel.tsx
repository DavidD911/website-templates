import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from "lucide-react";
import type { Product } from "../../types";
import { formatPrice } from "../../lib/format";
import { useCart } from "../../context/CartContext";

const AUTOPLAY_MS = 4000;
const CARD_SPACING = 280;
const CARD_DEPTH = 240;
const CARD_ROTATION = 42;

function circularOffset(index: number, active: number, length: number) {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

export default function ProductCarousel3D({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const navigate = useNavigate();
  const { addItem } = useCart();
  const length = products.length;

  const goTo = useCallback(
    (i: number) => setActive(((i % length) + length) % length),
    [length]
  );
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
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="perspective-1200 relative mx-auto flex h-[380px] items-center justify-center sm:h-[420px]"
        onPointerDown={(e) => (dragStartX.current = e.clientX)}
        onPointerUp={(e) => {
          if (dragStartX.current === null) return;
          const delta = e.clientX - dragStartX.current;
          if (delta > 60) prev();
          else if (delta < -60) next();
          dragStartX.current = null;
        }}
      >
        <div className="preserve-3d relative h-full w-full">
          {products.map((product, i) => {
            const offset = circularOffset(i, active, length);
            const abs = Math.abs(offset);
            const isActive = offset === 0;
            if (abs > 2) return null;

            return (
              <motion.button
                key={product.id}
                type="button"
                onClick={() => (isActive ? navigate(`/product/${product.slug}`) : goTo(i))}
                className="preserve-3d absolute left-1/2 top-1/2 flex w-56 -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl text-left shadow-lift ring-1 ring-black/5 sm:w-64"
                style={{ zIndex: length - abs }}
                animate={{
                  x: offset * CARD_SPACING,
                  z: -abs * CARD_DEPTH,
                  rotateY: -offset * CARD_ROTATION,
                  opacity: abs > 2 ? 0 : 1 - abs * 0.28,
                  scale: isActive ? 1 : 0.86,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              >
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{
                    background: `linear-gradient(150deg, ${product.gradient[0]}, ${product.gradient[1]})`,
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 mix-blend-multiply"
                    style={{
                      background: `linear-gradient(150deg, ${product.gradient[0]}99, ${product.gradient[1]}33)`,
                    }}
                  />
                </div>
                <div className="bg-surface p-4">
                  <p className="truncate font-display text-sm font-semibold text-ink sm:text-base">
                    {product.name}
                  </p>
                  <p className="text-sm text-ink/50">{formatPrice(product.price)}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-1 text-sun-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.round(activeProduct.rating) ? "fill-current" : "fill-transparent stroke-current opacity-40"}`}
            />
          ))}
          <span className="ml-1 text-sm text-ink/50">({activeProduct.reviewCount})</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-ink">{activeProduct.name}</h3>
        <p className="text-ink/60">{activeProduct.tagline}</p>
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl font-bold text-gradient">
            {formatPrice(activeProduct.price)}
          </span>
          <button
            type="button"
            onClick={() => addItem(activeProduct.id, activeProduct.colors[0], 1)}
            className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 active:scale-95"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to cart
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous product"
        onClick={prev}
        className="absolute left-0 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 p-3 text-ink shadow-soft ring-1 ring-black/5 backdrop-blur transition hover:bg-surface sm:flex md:-left-4"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next product"
        onClick={next}
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 p-3 text-ink shadow-soft ring-1 ring-black/5 backdrop-blur transition hover:bg-surface sm:flex md:-right-4"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        {products.map((p, i) => (
          <button
            key={p.id}
            type="button"
            aria-label={`Go to ${p.name}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-brand-600" : "w-2 bg-ink/15 hover:bg-ink/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
