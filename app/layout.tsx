import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Analitiks | Soluciones de Medición de Fluidos",
  description:
    "Impulsa la eficiencia de tu negocio con Analitiks, expertos en instrumentos de medición de fluidos.",
  openGraph: {
    images: [
      {
        url: "https://www.google.com/maps/uv?viewerState=lb&pb=!1s0x11ae81c94242f451:0x2a6b0cac40414137!5sGlobstand+technologies&imagekey=!1e10!2sAF1QipPrTTNGxsOszQTXFD3b68e40o0V_LiVsTWwh-H6&cr=rp_35",
        width: 1200,
        height: 630,
        alt: "Logo de Analitiks",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
