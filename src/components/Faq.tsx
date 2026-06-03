"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { FAQ } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <div className="section-head reveal" style={{ textAlign: "center", margin: "0 auto" }}>
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="section-h">Antes de viajar</h2>
        </div>
        <div className="reveal" style={{ marginTop: 34 }}>
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%", textAlign: "left", background: "none", border: "none",
                    cursor: "pointer", padding: "20px 0",
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                    color: "var(--text)",
                  }}
                >
                  <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 19 }}>{item.q}</span>
                  <span style={{
                    flexShrink: 0, width: 30, height: 30, borderRadius: 999,
                    display: "grid", placeItems: "center",
                    background: isOpen ? "var(--accent)" : "var(--tint)",
                    color: isOpen ? "#fff" : "var(--muted)",
                    border: "1px solid var(--line-strong)",
                    transform: isOpen ? "rotate(180deg)" : "none",
                    transition: "transform .25s, background .2s",
                  }}>
                    <Icon name="chev" size={16} />
                  </span>
                </button>
                <div style={{ maxHeight: isOpen ? 260 : 0, overflow: "hidden", transition: "max-height .3s ease" }}>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)", paddingBottom: 20, paddingRight: 44 }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
