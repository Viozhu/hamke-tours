import Icon from "@/components/ui/Icon";
import Wordmark from "@/components/ui/Wordmark";
import { BRAND } from "@/lib/data";

const NAV = [
  ["Tours", "tours"],
  ["Galería", "galeria"],
  ["Testimonios", "testimonios"],
  ["Nosotros", "nosotros"],
  ["FAQ", "faq"],
] as const;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)", paddingTop: 56, paddingBottom: 40 }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between" }}>
        <div style={{ maxWidth: 320 }}>
          <Wordmark size={22} />
          <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 16, lineHeight: 1.55 }}>
            {BRAND.ko} — {BRAND.tagline}. Grupos pequeños, 100% en español, todo incluido.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Explora</div>
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} style={{ color: "var(--muted)", textDecoration: "none", fontSize: 15 }}>
              {label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Síguenos</div>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--muted)", textDecoration: "none", fontSize: 15, display: "inline-flex", gap: 7, alignItems: "center" }}
          >
            <Icon name="ig" size={16} /> Instagram
          </a>
          <a
            href={BRAND.youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--muted)", textDecoration: "none", fontSize: 15, display: "inline-flex", gap: 7, alignItems: "center" }}
          >
            <Icon name="play" size={16} /> YouTube
          </a>
        </div>
      </div>
      <div className="container" style={{ marginTop: 36, paddingTop: 22, borderTop: "1px solid var(--line)" }}>
        <p style={{ fontSize: 13, color: "var(--faint)" }}>
          © {year} Hamke Tours · Tours en español por Corea del Sur 🇰🇷
        </p>
      </div>
    </footer>
  );
}
