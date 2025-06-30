"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Ingresos", href: "#ingresos" },
    { name: "Presupuestos", href: "#presupuestos" },
    { name: "Distribuidores", href: "#distribuidores" },
    { name: "Sucursales", href: "#sucursales" },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleLogoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()

    // Close the mobile menu immediately
    setIsMenuOpen(false)

    // Wait for the menu's closing animation (300ms) to complete before scrolling
    setTimeout(() => {
      const section = document.querySelector(href)
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 300)
  }

  return (
    <header id="inicio" className="relative h-[450px] md:h-[550px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/hero-bg.webp" alt="Industrial store interior" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-4 md:p-6">
        {/* Desktop Logo */}
        <button onClick={handleLogoClick} className="hidden md:flex items-center transition-opacity hover:opacity-80">
          <Image
            src="/images/logo.webp"
            alt="Implementos Industriales"
            width={200}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={(e) => scrollToSection(e, item.href)}
              className="relative text-white font-medium text-lg transition-colors hover:text-orange-300 group"
              style={{ fontFamily: "var(--font-figtree)" }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Logo & Menu */}
        <div className="flex-1 flex justify-end md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="lg"
                className="text-white p-2 h-12 w-12 hover:bg-white/10 transition-colors"
                aria-label="Abrir menú"
              >
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-all duration-200 text-left p-3 rounded-lg hover:bg-gray-100 w-full"
                    style={{ fontFamily: "var(--font-figtree)" }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center px-4 transition-all duration-1500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{
          marginTop: "clamp(2rem, 8vh, 4rem)",
          height: "calc(100% - 120px)",
        }}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-3">
            <button onClick={handleLogoClick} className="transition-opacity hover:opacity-80">
              <Image
                src="/images/logo.webp"
                alt="Implementos Industriales"
                width={400}
                height={120}
                className="h-20 md:h-24 w-auto"
                priority
              />
            </button>

            {/* Subtitle */}
            <p
              className={`text-white text-lg md:text-xl font-medium tracking-wide transition-all duration-1500 delay-150 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ fontFamily: "var(--font-figtree)" }}
            >
              Ferretería industrial
            </p>
          </div>

          <div
            className={`transition-all duration-1500 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <a
              href="https://wa.me/543875616225"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm md:text-base font-medium"
              style={{ fontFamily: "var(--font-figtree)" }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z" />
              </svg>
              <span>Solicitar presupuesto</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
