import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * items: [{ src, alt, caption }]
 * Scales to any number of slides - built for "for now 3/2 items" but adding
 * a 4th, 10th, etc. just means adding to the data array.
 */
export default function Carousel({ items, className }) {
  const [index, setIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const go = (delta) => {
    setIndex((prev) => (prev + delta + items.length) % items.length);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-ink-line bg-ink">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="h-full w-full shrink-0 relative">
              <img
                src={item.src}
                alt={item.alt || item.caption || ""}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pt-8 pb-3">
                <p className="text-xs text-paper/85 leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {items.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 border border-ink-line text-paper hover:border-brass-bright hover:text-brass-bright transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 border border-ink-line text-paper hover:border-brass-bright hover:text-brass-bright transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-5 bg-brass-bright" : "w-1.5 bg-ink-line"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
