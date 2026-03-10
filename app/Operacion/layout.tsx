import React from "react"
import { OperacionSidebar } from "@/components/operacion/OperacionSidebar"

export default function OperacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // bg-gray-50/50 da el fondo gris de la imagen. pt-32 evita que el Header tape el título.
    <div className="min-h-screen bg-gray-50/50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Columna del Menú (1/4 del ancho) */}
          <aside className="lg:col-span-1">
            <OperacionSidebar />
          </aside>

          {/* Columna del Contenido (3/4 del ancho) */}
          <main className="lg:col-span-3">
            {/* El cuadro blanco redondeado con sombra suave */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-gray-100 min-h-[700px]">
              {children}
            </div>
          </main>
          
        </div>
      </div>
    </div>
  )
}