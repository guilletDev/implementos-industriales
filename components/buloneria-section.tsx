"use client"

import { useEffect, useRef, useState } from "react"

export function BuloneriaSection() {
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
      className={`bg-blue-900 text-white rounded-lg p-6 md:p-8 mb-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ fontFamily: "var(--font-bebas-neue)" }}>
        BULONERÍA
      </h2>

      <div className="md:grid md:grid-cols-2 md:gap-8">
        {/* Left Column - Introduction and Bulones en Pulgadas */}
        <div className="space-y-6">
          {/* Introduction */}
          <div className="text-sm md:text-base" style={{ fontFamily: "var(--font-figtree)" }}>
            <p className="mb-4">
              La empresa cuenta con un <span className="font-bold">stock permanente</span> en bulonería. 🔧⚙️
            </p>
            <p className="mb-4">
              Los <span className="font-bold">bulones</span> son piezas que se caracterizan por:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Medida</li>
              <li>Resistencia</li>
              <li>Tipo de rosca</li>
              <li>Tipo de material (Zincados, Acerados, etc.)</li>
            </ul>
          </div>

          {/* Bulones en Pulgadas */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              🔧 Bulones en Pulgadas
            </h3>
            <p className="text-sm mb-4" style={{ fontFamily: "var(--font-figtree)" }}>
              Las medidas de los bulones en pulgadas se describen de la siguiente manera: ¼" x 2", donde la primera
              expresión define su diámetro y la segunda terminación su largo
            </p>

            <div className="bg-white text-black rounded-lg p-4">
              <h4 className="font-bold text-center mb-3 text-gray-700" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                ROSCAS EN PULGADAS
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs" style={{ fontFamily: "var(--font-figtree)" }}>
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-1">PULG.</th>
                      <th className="text-left p-1">mm.</th>
                      <th className="text-left p-1">Mecha p/roscar</th>
                      <th className="text-left p-1">USS UNC-NC</th>
                      <th className="text-left p-1">SAE UNF-NF</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr>
                      <td className="p-1">1/8</td>
                      <td className="p-1">3,17</td>
                      <td className="p-1">2,50</td>
                      <td className="p-1">40</td>
                      <td className="p-1">44</td>
                    </tr>
                    <tr>
                      <td className="p-1">5/32</td>
                      <td className="p-1">3,97</td>
                      <td className="p-1">3,25</td>
                      <td className="p-1">32</td>
                      <td className="p-1">36</td>
                    </tr>
                    <tr>
                      <td className="p-1">3/16</td>
                      <td className="p-1">4,76</td>
                      <td className="p-1">3,75</td>
                      <td className="p-1">24</td>
                      <td className="p-1">32</td>
                    </tr>
                    <tr>
                      <td className="p-1">1/4</td>
                      <td className="p-1">6,35</td>
                      <td className="p-1">5,25</td>
                      <td className="p-1">20</td>
                      <td className="p-1">28</td>
                    </tr>
                    <tr>
                      <td className="p-1">5/16</td>
                      <td className="p-1">7,94</td>
                      <td className="p-1">6,50</td>
                      <td className="p-1">18</td>
                      <td className="p-1">24</td>
                    </tr>
                    <tr>
                      <td className="p-1">3/8</td>
                      <td className="p-1">9,52</td>
                      <td className="p-1">8,00</td>
                      <td className="p-1">16</td>
                      <td className="p-1">24</td>
                    </tr>
                    <tr>
                      <td className="p-1">7/16</td>
                      <td className="p-1">11,11</td>
                      <td className="p-1">9,50</td>
                      <td className="p-1">14</td>
                      <td className="p-1">20</td>
                    </tr>
                    <tr>
                      <td className="p-1">1/2</td>
                      <td className="p-1">12,70</td>
                      <td className="p-1">10,50</td>
                      <td className="p-1">13(1)</td>
                      <td className="p-1">20</td>
                    </tr>
                    <tr>
                      <td className="p-1">9/16</td>
                      <td className="p-1">14,29</td>
                      <td className="p-1">12,00</td>
                      <td className="p-1">12</td>
                      <td className="p-1">18</td>
                    </tr>
                    <tr>
                      <td className="p-1">5/8</td>
                      <td className="p-1">15,87</td>
                      <td className="p-1">13,50</td>
                      <td className="p-1">11</td>
                      <td className="p-1">18</td>
                    </tr>
                    <tr>
                      <td className="p-1">3/4</td>
                      <td className="p-1">19,05</td>
                      <td className="p-1">16,50</td>
                      <td className="p-1">10</td>
                      <td className="p-1">16</td>
                    </tr>
                    <tr>
                      <td className="p-1">7/8</td>
                      <td className="p-1">22,22</td>
                      <td className="p-1">19,50</td>
                      <td className="p-1">9</td>
                      <td className="p-1">14</td>
                    </tr>
                    <tr>
                      <td className="p-1">1</td>
                      <td className="p-1">25,40</td>
                      <td className="p-1">22,50</td>
                      <td className="p-1">8</td>
                      <td className="p-1">12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-2 text-gray-600" style={{ fontFamily: "var(--font-figtree)" }}>
                (1) W 12 hilos por pulgada
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Bulones Milimétricos */}
        <div className="mt-8 md:mt-0">
          <h3 className="text-lg font-bold mb-3 flex items-center" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            🔧 Bulones Milimétricos (mm)
          </h3>
          <p className="text-sm mb-4" style={{ fontFamily: "var(--font-figtree)" }}>
            Se miden en milímetros, y se designa con la letra M y un número que indica el diámetro exterior nominal.
          </p>

          <div className="bg-white text-black rounded-lg p-4">
            <h4 className="font-bold text-center mb-3 text-gray-700" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              ROSCAS MÉTRICAS
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs" style={{ fontFamily: "var(--font-figtree)" }}>
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-1">mm.</th>
                    <th className="text-left p-1">Mecha p/roscar</th>
                    <th className="text-left p-1">Grueso MA</th>
                    <th className="text-left p-1">Fino MB</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr>
                    <td className="p-1">4</td>
                    <td className="p-1">3,50</td>
                    <td className="p-1">0,70</td>
                    <td className="p-1">0,50</td>
                  </tr>
                  <tr>
                    <td className="p-1">5</td>
                    <td className="p-1">4,25</td>
                    <td className="p-1">0,80</td>
                    <td className="p-1">0,50</td>
                  </tr>
                  <tr>
                    <td className="p-1">6</td>
                    <td className="p-1">5,00</td>
                    <td className="p-1">1,00</td>
                    <td className="p-1">0,50</td>
                  </tr>
                  <tr>
                    <td className="p-1">7</td>
                    <td className="p-1">6,00</td>
                    <td className="p-1">1,00</td>
                    <td className="p-1">0,75</td>
                  </tr>
                  <tr>
                    <td className="p-1">8</td>
                    <td className="p-1">6,75</td>
                    <td className="p-1">1,25</td>
                    <td className="p-1">1,00</td>
                  </tr>
                  <tr>
                    <td className="p-1">9</td>
                    <td className="p-1">7,75</td>
                    <td className="p-1">1,25</td>
                    <td className="p-1">1,00</td>
                  </tr>
                  <tr>
                    <td className="p-1">10</td>
                    <td className="p-1">8,50</td>
                    <td className="p-1">1,50</td>
                    <td className="p-1">1,00(2)</td>
                  </tr>
                  <tr>
                    <td className="p-1">12</td>
                    <td className="p-1">10,50</td>
                    <td className="p-1">1,75</td>
                    <td className="p-1">1,00(3)</td>
                  </tr>
                  <tr>
                    <td className="p-1">14</td>
                    <td className="p-1">12,25</td>
                    <td className="p-1">2,00</td>
                    <td className="p-1">1,50</td>
                  </tr>
                  <tr>
                    <td className="p-1">16</td>
                    <td className="p-1">14,25</td>
                    <td className="p-1">2,00</td>
                    <td className="p-1">1,50</td>
                  </tr>
                  <tr>
                    <td className="p-1">18</td>
                    <td className="p-1">16,00</td>
                    <td className="p-1">2,50</td>
                    <td className="p-1">1,50</td>
                  </tr>
                  <tr>
                    <td className="p-1">20</td>
                    <td className="p-1">18,00</td>
                    <td className="p-1">2,50</td>
                    <td className="p-1">1,50</td>
                  </tr>
                  <tr>
                    <td className="p-1">22</td>
                    <td className="p-1">20,00</td>
                    <td className="p-1">2,50</td>
                    <td className="p-1">1,50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2 text-gray-600" style={{ fontFamily: "var(--font-figtree)" }}>
              (2) y (3) paso FIAT p 1 25
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
