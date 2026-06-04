import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hamketours.com"),
  title: "Hamke Tours — Tours en español por Corea del Sur",
  description:
    "Tours guiados en español por Corea del Sur. Grupos pequeños, todo incluido, guía local. Reserva tu tour de otoño, primavera o invierno 2026.",
  openGraph: {
    title: "Hamke Tours — Tours en español por Corea del Sur",
    description:
      "Tours guiados en español por Corea del Sur. Grupos pequeños, todo incluido, guía local.",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
