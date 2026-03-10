"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Factory, Sprout, Briefcase, Building2, Layers, ChevronRight } from "lucide-react"

const menuOperacion = [
  { name: "Cadena de Valor", href: "/Operacion/cadena-de-valor", icon: Factory, desc: "Eficiencia integrada" },
  { name: "Desarrollo Cultivos", href: "/Operacion/desarrollo-cultivos", icon: Sprout, desc: "Innovación agrícola" },
  { name: "Belagro", href: "/Operacion/belagro", icon: Briefcase, desc: "Insumos y servicios" },
  { name: "Proyectos Inmobiliarios", href: "/Operacion/proyectos-inmobiliarios", icon: Building2, desc: "Visión de territorio" },
  { name: "Otras Líneas", href: "/Operacion/otras-lineas", icon: Layers, desc: "Diversificación" },
]

export function OperacionSidebar() {
  const pathname = usePathname()

  return (
    <div 
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      // 👇 Fondo cambiado a rojo oscuro (red-800) 👇
      className="bg-red-800 rounded-3xl p-6 text-white shadow-xl sticky top-32"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold not-italic">Operación</h2>
        {/* 👇 Subtítulo en rojo claro (red-300) 👇 */}
        <p className="text-red-300 text-xs uppercase tracking-widest font-semibold opacity-80 mt-1">Navegación</p>
      </div>
      
      <nav className="space-y-3 max-h-[350px] overflow-y-auto pr-2 pb-2 
                      [&::-webkit-scrollbar]:w-1.5 
                      [&::-webkit-scrollbar-track]:bg-white/5 
                      [&::-webkit-scrollbar-track]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-white/20 
                      hover:[&::-webkit-scrollbar-thumb]:bg-white/30 
                      [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {menuOperacion.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between p-3 rounded-2xl transition-all duration-300 group",
                isActive 
                  // 👇 Botón activo con fondo blanco y texto rojo 👇
                  ? "bg-white text-red-800 shadow-lg" 
                  : "hover:bg-white/10 text-white/80 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2 rounded-xl transition-colors shrink-0",
                  // 👇 Fondo del icono activo en rojo claro transparente 👇
                  isActive ? "bg-red-800/10" : "bg-white/10 group-hover:bg-white/20"
                )}>
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="font-bold text-sm leading-none">{item.name}</p>
                  {/* 👇 Descripción activa en rojo principal (red-600) 👇 */}
                  <p className={cn("text-[10px] mt-1 line-clamp-1", isActive ? "text-red-600" : "text-white/50")}>
                    {item.desc}
                  </p>
                </div>
              </div>
              <ChevronRight className={cn("w-4 h-4 shrink-0 transition-transform", isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} />
            </Link>
          )
        })}
      </nav>
    </div>
  )
}