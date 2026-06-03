import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { BRAND } from "@/lib/data";

const PLACES = ["Seúl", "DMZ", "Nami Island", "Suwon", "Gyeongju", "Busan"];

export default function Hero() {
  return (
    <section id="top" className="web-hero">
      <div className="bg">
        <Image src="/hero.avif" alt="Paisaje icónico de Corea" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
      </div>
      <div className="scrim" />
      <div className="scrim2" />

      <div className="hero-content container">
        <span className="kicker" style={{ color: "#fff" }}>{BRAND.ko} · juntos en Corea</span>
        <h1 className="hero-h1" style={{ marginTop: 20 }}>
          Tu viaje a Corea,{" "}
          <span className="grad-text">en español.</span>
        </h1>
        <p className="hero-lede">
          Tours guiados con grupos pequeños y todo incluido. Tú llegas con la maleta; del resto nos encargamos nosotros.
        </p>
        <div style={{ display: "flex", gap: 13, flexWrap: "wrap", marginTop: 30 }}>
          <a className="btn btn-primary btn-lg" href="#tours">
            Ver tours 2026 <Icon name="arrow" size={18} />
          </a>
          <a
            className="btn btn-ghost btn-lg"
            href={BRAND.youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "rgba(255,255,255,0.14)", borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
          >
            <Icon name="play" size={18} /> Ver video
          </a>
        </div>
        <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 28 }}>
          {PLACES.map((p) => (
            <span
              key={p}
              className="chip"
              style={{
                background: "rgba(255,255,255,0.13)",
                borderColor: "rgba(255,255,255,0.22)",
                color: "#fff",
                backdropFilter: "blur(8px)",
              }}
            >
              <Icon name="pin" size={14} /> {p}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-stats">
        <div className="container">
          <div className="stat"><div className="n">{BRAND.followers}</div><div className="l">viajeros nos siguen</div></div>
          <div className="stat"><div className="n">100%</div><div className="l">en español</div></div>
          <div className="stat"><div className="n">5.0★</div><div className="l">cientos de reseñas</div></div>
          <div className="stat"><div className="n">+3</div><div className="l">años de tours</div></div>
        </div>
      </div>
    </section>
  );
}
