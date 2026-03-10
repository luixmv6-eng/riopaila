"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Building2, History, Users2, ChevronRight, ShieldCheck, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    name: "Quiénes Somos",
    href: "/compania/quienes-somos",
    icon: Building2,
    description: "Misión, visión y valores",
  },
  {
    name: "Historia y Evolución",
    href: "/compania/historia",
    icon: History,
    description: "Nuestra trayectoria",
  },
  {
    name: "Gobierno Corporativo",
    href: "/compania/gobierno-corporativo",
    icon: Users2,
    description: "Estructura organizacional",
  },
  {
    name: "Políticas y Cumplimiento",
    href: "/compania/politicasycumplimiento", 
    icon: ShieldCheck,
    description: "Transparencia y ética",
  },
  {
    name: "Línea Transparente",
    href: "/compania/linea-transparente",
    icon: ShieldAlert,
    description: "Canal de denuncias éticas",
  },
]

export function CompanySidebar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-28 font-[Tahoma,Verdana,sans-serif]">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* 👇 Header del Sidebar forzado a ROJO OSCURO 👇 */}
        <div className="bg-red-800 p-4">
          <h3 className="text-white font-bold text-lg">Compañía</h3>
          <p className="text-white/70 text-sm">Navegación</p>
        </div>
        
        <div className="p-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href
            
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group",
                    isActive
                      // 👇 Enlace activo en ROJO OSCURO 👇
                      ? "bg-red-800 text-white shadow-md"
                      // 👇 Hover sutil en rojo claro 👇
                      : "hover:bg-red-50 text-gray-600"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                      isActive
                        ? "bg-white/20"
                        // 👇 Fondo del icono en rojo transparente 👇
                        : "bg-red-800/10 group-hover:bg-red-800/20"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "w-5 h-5",
                        // 👇 Icono inactivo en rojo oscuro 👇
                        isActive ? "text-white" : "text-red-800"
                      )}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={cn(
                        "font-semibold text-sm",
                        isActive ? "text-white" : "text-red-800"
                      )}
                    >
                      {item.name}
                    </p>
                    <p
                      className={cn(
                        "text-xs truncate font-normal",
                        isActive ? "text-white/70" : "text-gray-500"
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isActive
                        ? "text-white"
                        : "text-red-800/50 group-hover:text-red-800 group-hover:translate-x-1"
                    )}
                  />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}