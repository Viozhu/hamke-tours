import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { GALLERY } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="galeria" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Momentos reales</span>
          <h2 className="section-h">La galería</h2>
          <p className="section-sub">Fotos reales de nuestros viajeros en Corea.</p>
        </div>
        <div className="grid-gallery reveal" style={{ marginTop: 40 }}>
          {GALLERY.map((g, i) => (
            <ImagePlaceholder
              key={g.id}
              label={g.label}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 16,
                gridColumn: g.span === 2 ? "span 2" : "span 1",
                gridRow: i === 0 ? "span 2" : "span 1",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
