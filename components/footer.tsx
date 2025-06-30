import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white w-full">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              WhatsApp
            </h3>
            <div className="space-y-2 mb-6" style={{ fontFamily: "var(--font-figtree)" }}>
              <a
                href="https://wa.me/543875616225"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-green-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z" />
                </svg>
                <span>+54 387 5616225</span>
              </a>
              <a
                href="https://wa.me/543875616217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-green-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z" />
                </svg>
                <span>+54 387 5616217</span>
              </a>
            </div>

            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              Email
            </h3>
            <a
              href="mailto:ventas@implementosind.com.ar"
              className="flex items-center space-x-2 hover:text-blue-300 transition-colors mb-6"
              style={{ fontFamily: "var(--font-figtree)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>ventas@implementosind.com.ar</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              Inicio
            </h3>
            <nav className="space-y-2" style={{ fontFamily: "var(--font-figtree)" }}>
              <a href="#ingresos" className="block hover:text-orange-300 transition-colors">
                Ingresos
              </a>
              <a href="#presupuestos" className="block hover:text-orange-300 transition-colors">
                Presupuestos
              </a>
              <a href="#distribuidores" className="block hover:text-orange-300 transition-colors">
                Distribuidores
              </a>
              <a href="#sucursales" className="block hover:text-orange-300 transition-colors">
                Sucursales
              </a>
            </nav>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              Horarios de Atención:
            </h3>
            <div className="space-y-1 text-sm" style={{ fontFamily: "var(--font-figtree)" }}>
              <p>Lunes a Viernes de 9hs. a 18hs.</p>
              <p>Sábados de 9hs. a 13hs.</p>
            </div>

            {/* Social Media Icons - Properly aligned */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://wa.me/543875616225"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z" />
                </svg>
              </a>
              <a
                href="mailto:ventas@implementosind.com.ar"
                className="hover:text-blue-300 transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              {/* FEMAT Icon - Properly aligned and decorative only */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/femat-logo.png"
                  alt="FEMAT"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="border-t border-blue-800 mt-8 pt-6 text-center text-sm"
          style={{ fontFamily: "var(--font-figtree)" }}
        >
          <p>Todos los derechos reservados - 2025</p>
        </div>
      </div>
    </footer>
  )
}
