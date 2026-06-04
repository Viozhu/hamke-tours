import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { BRAND } from "@/lib/data";

export default function About() {
  return (
    <section id="nosotros" className="section">
      <div className="container two-col reveal">
        <div className="card" style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", width: "100%", height: 440 }}>
            <Image
              src="/profile.jpg"
              alt="Chang - Tu guía en Corea"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 680px) 100vw, 50vw"
            />
          </div>
          <div style={{ position: "absolute", bottom: 16, left: 16 }}>
            <span
              className="chip"
              style={{
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(6px)",
              }}
            >
              <Icon name="ig" size={14} /> {BRAND.guide}
            </span>
          </div>
        </div>
        <div>
          <span className="eyebrow">Sobre nosotros</span>
          <h2 className="section-h">Tu guía en Corea</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, marginTop: 18 }}>
            Hola, soy <strong>Chang</strong>. Vivo en Corea del Sur y desde aquí comparto el país que amo
            con miles de personas que hablan mi idioma. <strong>Hamke</strong> significa &ldquo;juntos&rdquo;, y esa es
            justo la idea: que conozcas el Corea real acompañado, sin estrés y en español.
          </p>
          <div style={{ display: "flex", gap: 36, marginTop: 26 }}>
            <div>
              <div className="grad-text" style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 34 }}>
                {BRAND.followers}
              </div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>seguidores</div>
            </div>
            <div>
              <div className="grad-text" style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 34 }}>+3</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>años de tours</div>
            </div>
            <div>
              <div className="grad-text" style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 34 }}>100%</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>en español</div>
            </div>
          </div>
          <a
            className="btn btn-ghost btn-lg"
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 26 }}
          >
            <Icon name="ig" size={18} /> Conóceme en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
