"use client";
import { useState } from "react";
import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Lightbox from "@/components/ui/Lightbox";
import { GALLERY } from "@/lib/data";
import type { InstagramPost } from "@/lib/instagram";

interface GalleryProps {
  images: InstagramPost[];
}

export default function Gallery({ images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const validIndices = GALLERY.map((_, i) => i).filter((i) => !!images[i]);

  return (
    <section id="galeria" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Momentos reales</span>
          <h2 className="section-h">La galería</h2>
          <p className="section-sub">Fotos reales de nuestros viajeros en Corea.</p>
        </div>
        <div className="grid-gallery reveal" style={{ marginTop: 40 }}>
          {GALLERY.map((g, i) => {
            const post = images[i];
            const style: React.CSSProperties = {
              width: "100%",
              height: "100%",
              borderRadius: 16,
              gridColumn: g.span === 2 ? "span 2" : "span 1",
              gridRow: i === 0 ? "span 2" : "span 1",
            };

            if (!post) {
              return (
                <ImagePlaceholder
                  key={g.id}
                  label={g.label}
                  style={style}
                />
              );
            }

            return (
              <div
                key={g.id}
                onClick={() => setActiveIndex(i)}
                style={{
                  ...style,
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={post.url}
                  alt={post.caption || g.label}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                  sizes={
                    g.span === 2
                      ? "(max-width: 680px) 100vw, 50vw"
                      : "(max-width: 680px) 50vw, 25vw"
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            );
          })}
        </div>
      </div>

      {activeIndex !== null && images[activeIndex] && (
        <Lightbox
          src={images[activeIndex].url}
          alt={images[activeIndex].caption || GALLERY[activeIndex]?.label || ""}
          onClose={() => setActiveIndex(null)}
          onPrev={validIndices.indexOf(activeIndex) > 0
            ? () => setActiveIndex(validIndices[validIndices.indexOf(activeIndex!) - 1])
            : undefined}
          onNext={validIndices.indexOf(activeIndex) < validIndices.length - 1
            ? () => setActiveIndex(validIndices[validIndices.indexOf(activeIndex!) + 1])
            : undefined}
        />
      )}
    </section>
  );
}
