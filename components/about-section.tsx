"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
      className={`text-center mb-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2
        className="text-2xl md:text-3xl font-bold text-blue-800 mb-8"
        style={{ fontFamily: "var(--font-bebas-neue)" }}
      >
        ¿QUIENES SOMOS?
      </h2>
      <div className="bg-gray-200 h-32 md:h-40 flex items-center justify-center rounded-lg mb-6">
        <span className="text-gray-600 text-xl md:text-2xl font-medium">TEXTO</span>
      </div>

      {/* Attention Message */}
      <div className="border-2 border-red-500 bg-red-50 p-4 md:p-6 rounded-lg max-w-2xl mx-auto">
        <p className="text-red-700 text-center" style={{ fontFamily: "var(--font-figtree)" }}>
          <span className="font-bold">¡ATENCIÓN!</span>
          <br />
          Implementos Industriales SRL no realiza ventas Online, por lo tanto no se responsabiliza por estafas a nombre
          de la empresa.
        </p>
      </div>
    </section>
  )
}
