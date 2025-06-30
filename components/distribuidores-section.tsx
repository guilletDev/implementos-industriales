"use client"

import { useEffect, useRef, useState } from "react"

export function DistribuidoresSection() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const brands = [
    { name: "ALEBA", logo: "/placeholder.svg?height=60&width=120&text=ALEBA" },
    { name: "BAHCO", logo: "/placeholder.svg?height=60&width=120&text=BAHCO" },
    { name: "BARBERO", logo: "/placeholder.svg?height=60&width=120&text=BARBERO" },
    { name: "BOSCH", logo: "/placeholder.svg?height=60&width=120&text=BOSCH" },
    { name: "brassoni", logo: "/placeholder.svg?height=60&width=120&text=brassoni" },
    { name: "CONARCO", logo: "/placeholder.svg?height=60&width=120&text=CONARCO" },
    { name: "De Pascale", logo: "/placeholder.svg?height=60&width=120&text=De+Pascale" },
    { name: "DEWALT", logo: "/placeholder.svg?height=60&width=120&text=DEWALT" },
    { name: "FMT", logo: "/placeholder.svg?height=60&width=120&text=FMT" },
    { name: "TGM", logo: "/placeholder.svg?height=60&width=120&text=TGM" },
    { name: "Libus", logo: "/placeholder.svg?height=60&width=120&text=Libus" },
    { name: "SORRENTO", logo: "/placeholder.svg?height=60&width=120&text=SORRENTO" },
    { name: "Toolcraft", logo: "/placeholder.svg?height=60&width=120&text=Toolcraft" },
    { name: "TYROLIT", logo: "/placeholder.svg?height=60&width=120&text=TYROLIT" },
    { name: "VULCANO", logo: "/placeholder.svg?height=60&width=120&text=VULCANO" },
    { name: "BREMEN", logo: "/placeholder.svg?height=60&width=120&text=BREMEN" },
  ]

  return (
    <section
      ref={sectionRef}
      id="distribuidores"
      className={`mb-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center mb-8">
        <h2
          className="text-2xl md:text-3xl font-bold text-blue-800 mb-4"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          DISTRIBUIDORES
        </h2>
        <p className="text-gray-700" style={{ fontFamily: "var(--font-figtree)" }}>
          Marcas reconocidas del mercado con las que trabajamos
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img
              src={brand.logo || "/placeholder.svg"}
              alt={`${brand.name} logo`}
              className="max-w-full max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
