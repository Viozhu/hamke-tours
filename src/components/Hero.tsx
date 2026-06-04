'use client';

import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { BRAND } from "@/lib/data";
import { motion } from "framer-motion";

const PLACES = ["Seúl", "DMZ", "Nami Island", "Suwon", "Gyeongju", "Busan"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, ease: "easeOut", delay },
});

export default function Hero() {
  return (
    <section id="top" className="web-hero">
      {/* Background with subtle scale-in */}
      <motion.div
        className="bg"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/hero.avif"
          alt="Paisaje icónico de Corea"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </motion.div>

      <div className="scrim" />
      <div className="scrim2" />

      <div className="hero-content container">
        <motion.span className="kicker" style={{ color: "#fff" }} {...fadeUp(0.2)}>
          {BRAND.ko} · juntos en Corea
        </motion.span>

        <motion.h1 className="hero-h1" style={{ marginTop: 20 }} {...fadeUp(0.35)}>
          Tu viaje a Corea,{" "}
          <span className="grad-text">en español.</span>
        </motion.h1>

        <motion.p className="hero-lede" {...fadeUp(0.5)}>
          Tours guiados con grupos pequeños y todo incluido. Tú llegas con la maleta; del resto nos encargamos nosotros.
        </motion.p>

        <motion.div
          style={{ display: "flex", gap: 13, flexWrap: "wrap", marginTop: 30 }}
          {...fadeUp(0.65)}
        >
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
        </motion.div>

        <motion.div
          style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 28 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        >
          {PLACES.map((p, i) => (
            <motion.span
              key={p}
              className="chip"
              style={{
                background: "rgba(255,255,255,0.13)",
                borderColor: "rgba(255,255,255,0.22)",
                color: "#fff",
                backdropFilter: "blur(8px)",
              }}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.85 + i * 0.07 }}
            >
              <Icon name="pin" size={14} /> {p}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div className="hero-stats" {...fadeIn(1.0)}>
        <div className="container">
          {[
            { n: BRAND.followers, l: "viajeros nos siguen" },
            { n: "100%",          l: "en español" },
            { n: "5.0★",          l: "cientos de reseñas" },
            { n: "+3",            l: "años de tours" },
          ].map(({ n, l }, i) => (
            <motion.div
              key={l}
              className="stat"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 1.05 + i * 0.08 }}
            >
              <div className="n">{n}</div>
              <div className="l">{l}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
