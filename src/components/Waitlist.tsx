"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { TOURS, BRAND } from "@/lib/data";

interface FormState { name: string; email: string; tour: string; }

export default function Waitlist() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", tour: TOURS[0].id });
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    try { localStorage.setItem("hamke_waitlist", JSON.stringify({ ...form, at: Date.now() })); } catch { /* */ }
    setSent(true);
  };

  return (
    <section id="reservar" className="section">
      <div className="container">
        <div
          className="reveal"
          style={{
            borderRadius: "var(--r-xl)", overflow: "hidden",
            border: "1px solid var(--line-strong)",
            background: "linear-gradient(150deg, color-mix(in oklch, var(--brand) 20%, var(--surface)) 0%, var(--surface) 58%)",
          }}
        >
          <div className="two-col" style={{ gap: 48, alignItems: "center", padding: "clamp(28px,4vw,56px)" }}>
            <div>
              <span className="eyebrow" style={{ color: "var(--accent-fg)" }}>Cupos limitados</span>
              <h2 className="section-h" style={{ marginTop: 10 }}>Asegura tu lugar</h2>
              <p className="section-sub">
                Únete a la lista de espera. Te contactamos con fechas, itinerario y precio, y aseguras tu cupo con un depósito.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                <a className="btn btn-ghost" href={BRAND.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon name="ig" size={18} /> Instagram
                </a>
                <a className="btn btn-ghost" href={BRAND.youtube} target="_blank" rel="noopener noreferrer">
                  <Icon name="play" size={18} /> Video
                </a>
              </div>
            </div>

            {!sent ? (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input
                  className="form-field"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={set("name")}
                  required
                />
                <input
                  className="form-field"
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={form.email}
                  onChange={set("email")}
                  required
                />
                <select className="form-field" value={form.tour} onChange={set("tour")}>
                  {TOURS.map((t) => (
                    <option key={t.id} value={t.id}>{t.title} · {t.dates}</option>
                  ))}
                </select>
                <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ marginTop: 4 }}>
                  Unirme a la lista de espera
                </button>
              </form>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 999,
                  display: "grid", placeItems: "center",
                  background: "var(--accent)", color: "#fff",
                }}>
                  <Icon name="check" size={28} />
                </div>
                <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 24 }}>
                  ¡Estás en la lista, {form.name.split(" ")[0]}! 🎉
                </div>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--muted)" }}>
                  Te contactaremos muy pronto con todos los detalles de tu tour.
                </p>
                <a className="btn btn-primary btn-lg" href={BRAND.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon name="ig" size={18} /> Seguir a Hamke Tours
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
