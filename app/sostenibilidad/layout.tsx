import React from "react"
import { SostenibilidadSidebar } from "@/components/sostenibilidad/SostenibilidadSidebar"

export default function SostenibilidadLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50/50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1">
            <SostenibilidadSidebar />
          </aside>
          <main className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-gray-100 min-h-[700px]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}