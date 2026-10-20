import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "../../types";
import { formatPrice } from "../../lib/format";

export default function Carousel({ products }: { products: Product[] }) {
  const loop = [...products, ...products];

  return (
    <div className="group relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#1a140f] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#1a140f] to-transparent sm:w-32" />

      <div className="flex w-max animate-marquee gap-5 px-5 py-2 group-hover:[animation-play-state:paused]">
        {loop.map((product, i) => {
          return (
            <Link
              key={`${product.id}-${i}`}
              to={`/product/${product.slug}`}
              className="relative flex w-64 flex-shrink-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors hover:border-brand-400/60 sm:w-80"
            >
              <div
                className="relative aspect-[5/4] overflow-hidden"
                style={{
                  background: `linear-gradient(140deg, ${product.gradient[0]}, ${product.gradient[1]})`,
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
                    background: `linear-gradient(140deg, ${product.gradient[0]}b3, ${product.gradient[1]}40)`,
                  }}
                />
                <div className="photo-fade-bottom absolute inset-0" />
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400">
                    {product.category}
                  </p>
                  <p className="font-display text-sm font-semibold text-white sm:text-base">
                    {product.name}
                  </p>
                </div>
                <span className="font-display text-sm font-bold text-white sm:text-base">
                  {formatPrice(product.price)}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
