"use client"

import { useEffect, useRef, useState } from "react"

export function SucursalesSection() {
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

  return (
    <section
      ref={sectionRef}
      id="sucursales"
      className={`mb-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center mb-8">
        <h2
          className="text-2xl md:text-3xl font-bold text-blue-800 mb-4"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          SUCURSALES
        </h2>
        <p className="text-gray-700" style={{ fontFamily: "var(--font-figtree)" }}>
          Horarios de atención: Lunes a Viernes 9hs. a 18hs.
          <br />
          Sábados 9hs. a 13hs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Salta Location */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-4" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Salta, Capital
          </h3>
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.6234567890123!2d-65.4196783!3d-24.8046107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35151bd2b%3A0x7b1b5b5b5b5b5b5b!2sImplementos%20Industriales%20SRL!5e0!3m2!1ses!2sar!4v1234567890123&hl=es"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
              title="Mapa de Implementos Industriales SRL - Salta"
            ></iframe>
          </div>
          <p className="text-gray-700 font-medium" style={{ fontFamily: "var(--font-figtree)" }}>
            AV. CHILE 1290 - SALTA
          </p>
        </div>

        {/* Jujuy Location */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-4" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            San Salvador de Jujuy
          </h3>
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d-65.2795958!3d-24.215215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0e0e0e0e0e0e%3A0x1a1a1a1a1a1a1a1a!2sImplementos%20Industriales!5e0!3m2!1ses!2sar!4v1234567890123&hl=es"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
              title="Mapa de Implementos Industriales - San Salvador de Jujuy"
            ></iframe>
          </div>
          <p className="text-gray-700 font-medium" style={{ fontFamily: "var(--font-figtree)" }}>
            LUIS BURELA ESTE 91 - S. S. DE JUJUY
          </p>
        </div>
      </div>
    </section>
  )
}
