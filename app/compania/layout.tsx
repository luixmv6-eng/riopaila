import React from "react"
// Borramos los imports de Header y Footer ya que vendrán del Root Layout
import { CompanySidebar } from "@/components/company/CompanySidebar"

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Quitamos el div flex-col y min-h-screen porque ya están en el Root
    // Usamos bg-gray-50/50 para que el fondo sea igual al de tus imágenes
    <div className="bg-gray-50/50 pt-28 pb-12"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <CompanySidebar />
          </aside>
          {/* Añadimos estilos al div del contenido para que se vea como una tarjeta blanca */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
