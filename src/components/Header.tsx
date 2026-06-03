"use client";
import { useState } from "react";
import Wordmark from "@/components/ui/Wordmark";
import Icon from "@/components/ui/Icon";

const NAV = [
  ["Tours", "tours"],
  ["Galería", "galeria"],
  ["Testimonios", "testimonios"],
  ["Nosotros", "nosotros"],
  ["FAQ", "faq"],
] as const;

interface HeaderProps { solid: boolean; overHero: boolean; }

export default function Header({ solid, overHero }: HeaderProps) {
  const [menu, setMenu] = useState(false);
  const light = overHero && !solid;

  return (
    <header className={`web-header${solid ? " solid" : ""}${light ? " hdr-light" : ""}`}>
      <div className="container web-header-inner">
        <Wordmark light={light} />
        <nav className="web-nav">
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a className="btn btn-primary" href="#reservar" style={{ fontSize: 14 }}>Reservar</a>
          <button
            className="btn btn-ghost"
            aria-label="Menú"
            onClick={() => setMenu(true)}
            style={{ width: 46, height: 46, padding: 0, display: "grid", placeItems: "center" }}
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      {menu && (
        <div className="web-menu">
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0 }}>
            <Wordmark />
            <button
              className="btn btn-ghost"
              aria-label="Cerrar"
              onClick={() => setMenu(false)}
              style={{ width: 46, height: 46, padding: 0, display: "grid", placeItems: "center" }}
            >
              <Icon name="close" size={22} />
            </button>
          </div>
          <nav style={{ marginTop: 30, display: "flex", flexDirection: "column" }}>
            {NAV.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenu(false)}
                style={{
                  color: "var(--text)", textDecoration: "none", padding: "16px 0",
                  borderBottom: "1px solid var(--line)",
                  fontFamily: "var(--display)", fontWeight: 700, fontSize: 30,
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}
              >
                {label}
                <span style={{ color: "var(--accent-fg)" }}><Icon name="arrow" size={22} /></span>
              </a>
            ))}
          </nav>
          <a
            className="btn btn-primary btn-lg"
            href="#reservar"
            onClick={() => setMenu(false)}
            style={{ marginTop: "auto" }}
          >
            Unirme a la lista de espera
          </a>
        </div>
      )}
    </header>
  );
}
