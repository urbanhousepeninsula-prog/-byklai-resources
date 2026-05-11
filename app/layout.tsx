import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Resources · Byklai",
  description:
    "Accede a promociones activas, materiales visuales y enlaces oficiales para compartir servicios y oportunidades de colaboración de Byklai.",
  openGraph: {
    title: "Resources · Byklai",
    description:
      "Centro de recursos oficiales para colaboradores, afiliados y aliados estratégicos de Byklai.",
    url: "https://resources.byklai.com",
    siteName: "Byklai",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${dmSerifDisplay.variable} ${outfit.variable} ${dmMono.variable}`}
    >
      <body className="bg-surface text-ink font-outfit antialiased">{children}</body>
    </html>
  );
}
