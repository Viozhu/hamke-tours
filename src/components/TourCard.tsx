import Image from "next/image";
import Icon from "@/components/ui/Icon";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { Tour, TourStatus } from "@/lib/data";

function statusMeta(s: TourStatus) {
  if (s === "open") return { cls: "badge-open", label: "Reservando",      dot: true };
  if (s === "wait") return { cls: "badge-wait", label: "Lista de espera", dot: true };
  return              { cls: "badge-soon", label: "Próximamente",    dot: false };
}

export default function TourCard({ t }: { t: Tour }) {
  const m = statusMeta(t.status);
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative" }}>
        {t.placeholder?.startsWith("http") ? (
          <div style={{ position: "relative", width: "100%", height: 230 }}>
            <Image
              src={t.placeholder}
              alt={t.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 680px) 100vw, 33vw"
            />
          </div>
        ) : (
          <ImagePlaceholder
            label={t.placeholder}
            style={{ width: "100%", height: 230, borderRadius: 0 }}
          />
        )}
        <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {t.popular && (
            <span className="badge badge-pop">
              <Icon name="star" size={12} /> Más popular
            </span>
          )}
          <span className={`badge ${m.cls}`}>
            {m.dot && <span className="dot" />}
            {m.label}
          </span>
        </div>
      </div>
      <div style={{ padding: "20px 20px 22px", display: "flex", flexDirection: "column", gap: 13, flex: 1 }}>
        <div>
          <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 24, lineHeight: 1.05 }}>
            {t.title}
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 8, color: "var(--muted)", fontSize: 14 }}>
            <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}>
              <Icon name="cal" size={15} /> {t.dates}
            </span>
            <span style={{ display: "inline-flex", gap: 5, alignItems: "center", whiteSpace: "nowrap", flexShrink: 0 }}>
              <Icon name="clock" size={15} /> {t.days} días
            </span>
          </div>
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.5, color: "var(--muted)" }}>{t.blurb}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {t.places.map((p) => (
            <span
              key={p}
              style={{
                fontSize: 12.5, fontWeight: 600, color: "var(--text)",
                padding: "5px 10px", borderRadius: 8,
                background: "var(--tint)", border: "1px solid var(--line)",
                display: "inline-flex", gap: 4, alignItems: "center",
              }}
            >
              <Icon name="pin" size={12} /> {p}
            </span>
          ))}
        </div>
        <hr className="hr" style={{ marginTop: 4 }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: "auto" }}>
          <div>
            <div style={{ fontSize: 11, color: "var(--faint)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
              Precio
            </div>
            <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 15 }}>{t.priceLabel}</div>
          </div>
          <a className="btn btn-primary" href="#reservar">
            {t.status === "soon" ? "Avísame" : "Reservar"} <Icon name="arrow" size={17} />
          </a>
        </div>
      </div>
    </div>
  );
}
