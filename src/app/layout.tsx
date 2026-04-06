import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Resguardo Legal | Abogados en Mar del Plata",
    template: "%s | Resguardo Legal",
  },
  description:
    "Estudio jurídico en Mar del Plata especializado en Derecho Laboral, Familia, Civil y Amparos de Salud. Primera consulta gratuita. Protegemos tus derechos.",
  keywords: [
    "abogados mar del plata",
    "estudio juridico mar del plata",
    "abogado laboral mar del plata",
    "abogado despido mar del plata",
    "amparo salud mar del plata",
    "divorcio mar del plata",
    "derecho laboral",
    "despidos",
    "amparos de salud",
    "derecho de familia",
    "divorcios",
    "accidentes de trabajo",
    "ART",
    "sucesiones",
    "derecho civil",
  ],
  other: {
    "geo.region": "AR-B",
    "geo.placename": "Mar del Plata",
  },
  authors: [{ name: "Resguardo Legal" }],
  creator: "Resguardo Legal",
  publisher: "Resguardo Legal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://resguardolegal.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Resguardo Legal | Abogados en Mar del Plata",
    description:
      "Protegemos tus derechos. Asesoramiento legal personalizado en Derecho Laboral, Familia, Civil y Amparos de Salud.",
    url: "https://resguardolegal.com.ar",
    siteName: "Resguardo Legal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Resguardo Legal - Estudio Jurídico en Mar del Plata",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resguardo Legal | Abogados en Mar del Plata",
    description: "Protegemos tus derechos. Primera consulta gratuita.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
  manifest: "/site.webmanifest",
  category: "Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
