import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Figtree } from "next/font/google"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
})

const figtree = Figtree({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  title: "Implementos Industriales SRL – Ferretería Industrial en Salta & Jujuy",
  description:
    "Implementos Industriales SRL: venta mayorista y minorista de herramientas, bulonería y maquinaria industrial en Salta (Av. Chile 1290) y Jujuy (Luis Burela Este 91). Atención lunes a viernes 09‑18, sábados 09‑13.",
  keywords:
    "Implementos Industriales, ferretería industrial, bulonería, herramientas, Salta, Jujuy, maquinaria, presupuestos",
  authors: [{ name: "Implementos Industriales SRL" }],
  openGraph: {
    title: "Implementos Industriales SRL – Ferretería Industrial en Salta & Jujuy",
    description:
      "Implementos Industriales SRL: venta mayorista y minorista de herramientas, bulonería y maquinaria industrial en Salta (Av. Chile 1290) y Jujuy (Luis Burela Este 91). Atención lunes a viernes 09‑18, sábados 09‑13.",
    url: "https://implementosind.com.ar",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        width: 400,
        height: 120,
        alt: "Implementos Industriales SRL Logo",
      },
    ],
    locale: "es_AR",
    siteName: "Implementos Industriales SRL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Implementos Industriales SRL – Ferretería Industrial en Salta & Jujuy",
    description:
      "Implementos Industriales SRL: venta mayorista y minorista de herramientas, bulonería y maquinaria industrial en Salta (Av. Chile 1290) y Jujuy (Luis Burela Este 91). Atención lunes a viernes 09‑18, sábados 09‑13.",
    images: ["/images/logo.webp"],
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
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
  alternates: {
    canonical: "https://implementosind.com.ar",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${figtree.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="theme-color" content="#0066cc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
