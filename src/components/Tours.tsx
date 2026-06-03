import TourCard from "@/components/TourCard";
import Icon from "@/components/ui/Icon";
import { TOURS, DAY_TOURS } from "@/lib/data";

export default function Tours() {
  return (
    <section id="tours" className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Salidas 2026</span>
          <h2 className="section-h">Tours disponibles</h2>
          <p className="section-sub">Cupos limitados por salida. Asegura tu lugar antes de que se llene.</p>
        </div>
        <div className="grid-tours reveal" style={{ marginTop: 44 }}>
          {TOURS.map((t) => <TourCard key={t.id} t={t} />)}
        </div>
        <div className="reveal" style={{ marginTop: 50 }}>
          <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 22, marginBottom: 4 }}>
            Experiencias de un día
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 18 }}>
            ¿Ya estás en Corea? También armamos salidas de un día.
          </p>
          <div className="grid-day">
            {DAY_TOURS.map((d) => (
              <a
                key={d.id}
                href="#reservar"
                style={{
                  textDecoration: "none", padding: "18px",
                  borderRadius: "var(--r)", background: "var(--surface)",
                  border: "1px solid var(--line)", color: "var(--text)",
                  display: "flex", flexDirection: "column", gap: 4,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--display)", fontWeight: 700, fontSize: 17 }}>
                  <span style={{ color: "var(--accent-fg)" }}><Icon name="pin" size={16} /></span> {d.name}
                </span>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{d.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
