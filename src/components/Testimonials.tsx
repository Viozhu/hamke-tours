import Icon from "@/components/ui/Icon";
import { Testimonial, TESTIMONIALS } from "@/lib/data";

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

function Avatar({ name, photoUrl }: { name: string; photoUrl: string }) {
  if (photoUrl) {
    return (
      <img
        src={photoUrl}
        alt={name}
        style={{ width: 46, height: 46, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      />
    );
  }
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div
      style={{
        width: 46, height: 46, borderRadius: "50%", flexShrink: 0,
        background: "var(--tint)", border: "1px solid var(--line)",
        display: "grid", placeItems: "center",
        fontWeight: 700, fontSize: 14, color: "var(--accent-fg)",
      }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials({ testimonials = [...TESTIMONIALS] }: TestimonialsProps) {
  return (
    <section id="testimonios" className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Lo que dicen los viajeros</span>
          <h2 className="section-h">
            Historias que se quedan <span className="grad-text">para siempre.</span>
          </h2>
        </div>
        <div className="grid-test reveal" style={{ marginTop: 44 }}>
          {testimonials.map((t, idx) => (
            <figure
              key={t.id || idx}
              className="card"
              style={{ margin: 0, padding: 26, display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div style={{ color: "var(--accent-fg)", display: "flex", gap: 2 }}>
                {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={16} />)}
              </div>
              <blockquote style={{ margin: 0, fontFamily: "var(--display)", fontWeight: 600, fontSize: 20, lineHeight: 1.35 }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12 }}>
                <Avatar name={t.name} photoUrl={t.photoUrl} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{t.place}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="reveal" style={{ fontSize: 13, color: "var(--faint)", marginTop: 16 }}>
          Testimonios adaptados de mensajes reales de viajeros en Instagram.
        </p>
      </div>
    </section>
  );
}
