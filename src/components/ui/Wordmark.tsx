import Image from "next/image";

interface WordmarkProps { size?: number; light?: boolean; }

export default function Wordmark({ size = 20, light = false }: WordmarkProps) {
  const badge = Math.round(size * 1.85);
  return (
    <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "inherit" }}>
      <Image
        src="/logo.png"
        alt="Hamke Tours logo"
        width={badge}
        height={badge}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        }}
        priority
      />
      <span
        className="wm-text"
        style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: size, letterSpacing: "-0.01em" }}
      >
        Hamke{" "}
        <span style={{ color: light ? "#fff" : "var(--accent-fg)", opacity: light ? 0.85 : 1 }}>Tours</span>
      </span>
    </a>
  );
}
