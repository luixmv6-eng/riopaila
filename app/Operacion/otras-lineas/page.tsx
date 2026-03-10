"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Beef, Share2, Trees, Wheat, Sprout } from "lucide-react"
import { cn } from "@/lib/utils"

const lineasNegocio = [
  {
    id: "ganaderia",
    icon: Beef,
    title: "Ganadería Sostenible",
    short: "Crianza de levante y ceba con altos estándares genéticos.",
    details: "Implementamos sistemas silvopastoriles que integran árboles con pasturas, mejorando el bienestar animal y capturando carbono de manera eficiente. Nuestra genética está enfocada en la adaptabilidad y el rendimiento.",
    image: "/Imagenes/imagen.jpg", // <--- Solo esta sección conserva la imagen
    color: "from-red-500/10 to-red-600/5" // Ajustado a tonos rojos
  },
  {
    id: "limon",
    icon: Sprout,
    title: "Cultivo de Limón",
    short: "Producción citrícola tecnificada y de alta calidad.",
    details: "Manejamos huertos citrícolas bajo estrictos estándares agronómicos y ambientales. Optimizamos el uso del agua mediante riego tecnificado y aplicamos un manejo integrado para garantizar frutos con calidad de exportación.",
    // Sin imagen
    color: "from-rose-500/10 to-rose-600/5" // Ajustado a tonos cálidos
  },
  {
    id: "mango",
    icon: Trees,
    title: "Cultivo de Mango",
    short: "Variedades seleccionadas con manejo agronómico óptimo.",
    details: "Producimos mangos con excelentes características organolépticas. Nuestras prácticas agrícolas respetan los ciclos naturales, promoviendo la conservación del suelo y la biodiversidad en nuestros campos de cultivo.",
    // Sin imagen
    color: "from-amber-500/10 to-amber-600/5" // Ajustado a tonos cálidos
  },
  {
    id: "arroz",
    icon: Wheat,
    title: "Cultivo de Arroz",
    short: "Producción eficiente con manejo responsable del recurso hídrico.",
    details: "Desarrollamos cultivos de arroz implementando tecnologías de precisión para optimizar el riego y el manejo de suelos. Producimos granos de alta calidad nutricional e industrial reduciendo nuestra huella ambiental.",
    // Sin imagen
    color: "from-orange-500/10 to-orange-600/5" // Ajustado a tonos cálidos
  }
]

export default function OtrasLineasPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="space-y-16 pb-12" style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}>
      
      {/* HEADER DINÁMICO */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }}
        className="max-w-3xl border-l-4 border-red-600 pl-6"
      >
        <span className="text-red-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
          Diversificación Estratégica
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4 tracking-tight not-italic">
          Otras Líneas de Negocio
        </h1>
        <p className="text-lg text-gray-600 font-normal leading-relaxed">
          Nuestra capacidad operativa se extiende a diversos sectores clave, 
          optimizando recursos mediante la <span className="text-red-800 font-bold">economía circular</span> y la excelencia.
        </p>
      </motion.div>

      {/* LISTA INTERACTIVA (ACORDEÓN PREMIUM) */}
      <div className="space-y-6">
        {lineasNegocio.map((linea, index) => (
          <motion.div
            key={linea.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden",
              expanded === linea.id 
                // Borde activo y sombra con tinte rojo
                ? "border-red-800 shadow-[0_20px_50px_rgba(153,27,27,0.08)] scale-[1.01]" 
                : "border-gray-100 shadow-sm hover:border-red-300"
            )}
          >
            {/* Cabecera del Item */}
            <div 
              className="p-6 md:p-10 flex items-center justify-between cursor-pointer relative"
              onClick={() => setExpanded(expanded === linea.id ? null : linea.id)}
            >
              <div className="flex items-center gap-8 relative z-10">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner shrink-0",
                  expanded === linea.id 
                    ? "bg-red-800 text-white rotate-6" 
                    : "bg-red-50 text-red-800 group-hover:bg-red-100"
                )}>
                  <linea.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-800 tracking-tight">{linea.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base font-normal">{linea.short}</p>
                </div>
              </div>

              <div className="relative z-10 shrink-0 ml-4">
                <div className={cn(
                  "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                  expanded === linea.id 
                    ? "border-red-800 bg-red-800 text-white rotate-180" 
                    : "border-gray-200 text-gray-400 group-hover:border-red-600 group-hover:text-red-600"
                )}>
                  {expanded === linea.id ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
              
              {/* Decoración sutil de fondo al expandir */}
              {expanded === linea.id && (
                <motion.div 
                  layoutId="glow"
                  className={cn("absolute inset-0 opacity-20 bg-gradient-to-r", linea.color)} 
                />
              )}
            </div>

            {/* Contenido Expandible */}
            <AnimatePresence>
              {expanded === linea.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-8 md:px-12 pb-10 pt-4 border-t border-gray-50">
                    
                    {/* 👇 El contenedor se adapta: Si hay imagen usa 2 columnas, si no, usa 1 👇 */}
                    <div className={cn(
                      "grid gap-12 items-center mt-6",
                      linea.image ? "md:grid-cols-2" : "grid-cols-1"
                    )}>
                      
                      {/* Textos */}
                      <div className={cn("space-y-6", linea.image ? "order-2 md:order-1" : "")}>
                        <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-red-400 pl-6 py-2">
                          {linea.details}
                        </p>
                        <div className="flex items-center gap-4 text-xs font-bold text-red-800 uppercase tracking-widest">
                          <Share2 size={16} className="text-red-600" />
                          Certificación en Proceso de Calidad
                        </div>
                      </div>
                      
                      {/* Imagen (Renderizado Condicional) */}
                      {linea.image && (
                        <motion.div 
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2"
                        >
                          <img 
                            src={linea.image} 
                            alt={linea.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-500" />
                        </motion.div>
                      )}

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}