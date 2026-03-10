"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Leaf, Users, LineChart, FileText, ChevronRight } from "lucide-react"

const menuSostenibilidad = [
  { name: "Gestión Ambiental", href: "/sostenibilidad/gestion-ambiental", icon: Leaf, desc: "Cuidado del entorno" },
  { name: "Gestión Social", href: "/sostenibilidad/gestion-social", icon: Users, desc: "Compromiso humano" },
  { name: "Gestión Económica", href: "/sostenibilidad/gestion-economica", icon: LineChart, desc: "Valor compartido" },
  { name: "Informes", href: "/sostenibilidad/informes", icon: FileText, desc: "Transparencia" },
]

export function SostenibilidadSidebar() {
  const pathname = usePathname()

  return (
    <div 
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      // 👇 Fondo actualizado a rojo oscuro (red-800) 👇
      className="bg-red-800 rounded-3xl p-6 text-white shadow-xl sticky top-32"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold not-italic">Sostenibilidad</h2>
        {/* 👇 Subtítulo en rojo claro (red-300) 👇 */}
        <p className="text-red-300 text-xs uppercase tracking-widest font-semibold opacity-80 mt-1">Nuestro Legado</p>
      </div>
      
      <nav className="space-y-3">
        {menuSostenibilidad.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between p-3 rounded-2xl transition-all duration-300 group",
                // 👇 Activo: fondo blanco, texto rojo oscuro 👇
                isActive ? "bg-white text-red-800 shadow-lg" : "hover:bg-white/10 text-white/80 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2 rounded-xl transition-colors shrink-0", 
                  // 👇 Fondo del ícono activo en rojo transparente 👇
                  isActive ? "bg-red-800/10" : "bg-white/10 group-hover:bg-white/20"
                )}>
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="font-bold text-sm leading-none">{item.name}</p>
                  {/* 👇 Descripción activa en rojo (red-600) 👇 */}
                  <p className={cn("text-[10px] mt-1", isActive ? "text-red-600" : "text-white/40")}>
                    {item.desc}
                  </p>
                </div>
              </div>
              {/* Animación de la flecha homologada con el resto del sitio */}
              <ChevronRight className={cn(
                "w-4 h-4 shrink-0 transition-transform", 
                isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              )} />
            </Link>
          )
        })}
      </nav>
    </div>
  )
}