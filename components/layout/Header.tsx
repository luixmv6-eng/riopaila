"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

// 1. Submenús definidos
const companySubmenu = [
  { name: "Quienes Somos", href: "/compania/quienes-somos" },
  { name: "Historia y Evolución", href: "/compania/historia" },
  { name: "Gobierno Corporativo", href: "/compania/gobierno-corporativo" },
  { name: "Políticas y Cumplimiento", href: "/compania/politicasycumplimiento" },
  { name: "Línea Transparente", href: "/compania/linea-transparente" },
]

const operationSubmenu = [
  { name: "Cadena de Valor", href: "/Operacion/cadena-de-valor" },
  { name: "Desarrollo Cultivos", href: "/Operacion/desarrollo-cultivos" },
  { name: "Belagro", href: "/Operacion/belagro" },
  { name: "Proyectos Inmobiliarios", href: "/Operacion/proyectos-inmobiliarios" },
  { name: "Otras Líneas", href: "/Operacion/otras-lineas" },
]

const sustainabilitySubmenu = [
  { name: "Gestión Ambiental", href: "/sostenibilidad/gestion-ambiental" },
  { name: "Gestión Social", href: "/sostenibilidad/gestion-social" },
  { name: "Gestión Económica", href: "/sostenibilidad/gestion-economica" },
  { name: "Informes", href: "/sostenibilidad/informes" },
]

const groupsSubmenu = [
  { name: "Proveedores / Clientes", href: "/grupos-de-interes/proveedores-clientes" },
  { name: "Talento (Trabaje con nosotros)", href: "/grupos-de-interes/talento" },
  { name: "Portal de Autogestión Buk", href: "https://castillaagricola.buk.co", isExternal: true },
]


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isSolid = !isHome || isScrolled

  const renderLink = (item: any) => {
    if (item.isExternal) {
      return (
        <a 
          href={item.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-700 transition-colors"
        >
          {item.name} <ExternalLink size={14} className="ml-2 opacity-50" />
        </a>
      )
    }
    return (
      <Link 
        href={item.href} 
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          "block px-4 py-3 text-sm transition-colors", 
          pathname === item.href 
            ? "bg-red-700 text-white font-bold" 
            : "text-gray-600 hover:bg-red-50 hover:text-red-700"
        )}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500", 
      // 👇 AQUÍ CAMBIA EL GRADIENTE A ROJO 👇
      isSolid ? "bg-gradient-to-r from-red-800/95 to-red-600/90 backdrop-blur-md shadow-lg py-2 border-b border-white/10" : "bg-transparent py-5"
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/Imagenes/LOGO-RIO-POS.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain transition-all duration-300" 
            />
            <div className="hidden sm:block transition-colors text-white">
              {/* Ajusta este texto al de la nueva empresa si es necesario */}
              <p className="font-bold text-lg leading-tight tracking-tight">Riopaila Agricola</p> 
              <p className="text-[10px] font-black opacity-80 uppercase tracking-widest">S.A.</p>
            </div>
          </Link>

          {/* MENÚ DESKTOP */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-sm font-semibold transition-colors text-white/80 hover:text-white"
            >
              Inicio
            </Link>
            
            {[
              { label: "Compañía", menu: companySubmenu, id: "compania" },
              { label: "Operación", menu: operationSubmenu, id: "Operacion" },
              { label: "Sostenibilidad", menu: sustainabilitySubmenu, id: "sostenibilidad" },
              { label: "Grupos de Interés", menu: groupsSubmenu, id: "grupos-de-interes" },
            ].map((d) => {
              const isActive = pathname.startsWith(`/${d.id}`);
              
              return (
                <div 
                  key={d.id} 
                  className="relative" 
                  onMouseEnter={() => setOpenDropdown(d.id)} 
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className={cn(
                    "flex items-center space-x-1 text-sm font-semibold py-2 transition-colors outline-none", 
                    isActive ? "text-red-300 font-bold" : "text-white/80 hover:text-white"
                  )}>
                    <span>{d.label}</span>
                    <ChevronDown size={14} className={cn("transition-transform duration-300", openDropdown === d.id && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === d.id && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 10 }} 
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        <div className="py-2">
                          {d.menu.map((item, i) => (
                            <div key={i}>{renderLink(item)}</div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* BOTÓN INVERSIONISTAS (DESKTOP) */}
            <Link 
              href="/inversionistas" 
              className="text-sm font-bold py-2 px-6 rounded-full border-2 transition-all border-white text-white hover:bg-white hover:text-red-700"
            >
              Inversionistas
            </Link>
          </div>

          {/* BOTÓN MÓVIL */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 transition-colors text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            className="lg:hidden bg-white border-t border-gray-100 shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <div className="px-6 py-8 space-y-8 text-left">
              {[
                { label: "Compañía", menu: companySubmenu },
                { label: "Operación", menu: operationSubmenu },
                { label: "Sostenibilidad", menu: sustainabilitySubmenu },
                { label: "Grupos de Interés", menu: groupsSubmenu },
              ].map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">{section.label}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {section.menu.map((item, i) => (
                      <div key={i}>{renderLink(item)}</div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-6 border-t border-gray-100">
                <Link 
                  href="/inversionistas" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-4 border-2 border-red-700 text-red-700 rounded-2xl font-bold hover:bg-red-700 hover:text-white transition-all"
                >
                  Inversionistas
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}