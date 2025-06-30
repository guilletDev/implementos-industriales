"use client"

import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { PresupuestosSection } from "@/components/presupuestos-section"
import { NuevosIngresosSection } from "@/components/nuevos-ingresos-section"
import { BuloneriaSection } from "@/components/buloneria-section"
import { SucursalesSection } from "@/components/sucursales-section"
import { DistribuidoresSection } from "@/components/distribuidores-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <AboutSection />
        <PresupuestosSection />
        <NuevosIngresosSection />
        <BuloneriaSection />
        <SucursalesSection />
        <DistribuidoresSection />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  )
}
