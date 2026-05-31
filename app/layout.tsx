import type { Metadata } from "next";
import { Inter, Sora, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

// Fallback for Surgena until the licensed font file is dropped into
// public/fonts/. See @font-face in globals.css.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  variable: "--font-elegant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Óptica y Audiología Ibiza · Benidorm",
  description:
    "Óptica y centro auditivo especializado en Benidorm desde 1997. Revisiones visuales, terapia visual, lentes de contacto y audiología con trato cercano. Las primeras marcas.",
  openGraph: {
    title: "Óptica y Audiología Ibiza · Benidorm",
    description:
      "Casi 30 años cuidando tu visión y tu audición en Benidorm. La óptica que de verdad se preocupa por ti.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable} ${playfair.variable}`}
    >
      <body className="grain font-sans">{children}</body>
    </html>
  );
}
