"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function NuevosIngresosSection() {
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
      id="ingresos"
      className={`mb-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2
        className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-8"
        style={{ fontFamily: "var(--font-bebas-neue)" }}
      >
        NUEVOS INGRESOS
      </h2>
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/3tn-product.webp"
          alt="Crique hidráulico 3TN - Nuevos ingresos"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  )
}
