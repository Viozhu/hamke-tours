import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { VALUE_PROPS } from "@/lib/data";

export default function ValueProps() {
  return (
    <section id="porque" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Por qué Hamke Tours</span>
          <h2 className="section-h">
            No es un tour más.<br />
            Es viajar <span className="grad-text">acompañado.</span>
          </h2>
        </div>
        <div className="grid-props reveal" style={{ marginTop: 44 }}>
          {VALUE_PROPS.map((v) => (
            <div
              key={v.title}
              className="card"
              style={{ padding: "26px 24px", display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div style={{
                width: 50, height: 50, borderRadius: 14,
                display: "grid", placeItems: "center",
                color: "var(--accent-fg)",
                background: "color-mix(in oklch, var(--accent) 14%, transparent)",
                border: "1px solid color-mix(in oklch, var(--accent) 28%, transparent)",
              }}>
                <Icon name={v.icon as IconName} size={26} />
              </div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 20 }}>{v.title}</div>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: "var(--muted)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
