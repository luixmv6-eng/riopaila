"use client"

import { useState, useEffect, useCallback } from "react"
// 1. IMPORTAMOS EL OPTIMIZADOR DE IMÁGENES DE NEXT.JS
import Image from "next/image"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

// --- GALERÍA DE IMÁGENES ---
const carouselItems = [
  {
    id: 1,
    title: "Campos de Caña",
    description: "Extensas hectáreas cultivadas con las mejores prácticas agrícolas.",
    image: "/Imagenes/IMG_5870.JPG", 
  },
  {
    id: 2,
    title: "Comunidades",
    description: "Desarrollo social y bienestar constante para nuestra gente.",
    image: "/Imagenes/Exportado 2.jpg",
  },
  {
    id: 3,
    title: "Innovación Agrícola",
    description: "Tecnología de punta aplicada al campo colombiano.",
    image: "/Imagenes/IMG_6260.jpg", 
  },
  {
    id: 4,
    title: "Sostenibilidad",
    description: "Un compromiso real y tangible con el medio ambiente.",
    image: "/Imagenes/DSC_0265.jpg", 
  },
]

export function ImageCarousel() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const currentIndex = Math.abs(page % carouselItems.length)

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }, [page])

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => paginate(1), 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, paginate])

  // --- ANIMACIONES ELEGANTES ---
  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
      scale: 1.02
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    })
  }

  const currentItem = carouselItems[currentIndex]

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden font-[Tahoma,Verdana,sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- ENCABEZADO --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#006437]/5 border border-[#006437]/10 rounded-full mb-4">
            <Sparkles size={14} className="text-[#006437]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#006437] uppercase">En Terreno</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1a2b3c] tracking-tight">
            Nuestra Operación
          </h2>
        </motion.div>

        {/* --- CARRUSEL PRINCIPAL --- */}
        <div
          className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] bg-[#111] h-[500px] md:h-[600px] group border border-gray-200"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }} 
              className="absolute inset-0"
            >
              {/* AQUÍ ESTÁ LA OPTIMIZACIÓN:
                 Envolvemos el componente Image de Next.js en un motion.div 
                 para seguir teniendo la animación de zoom, pero cargando la imagen súper rápido. 
              */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                animate={{ scale: [1, 1.05] }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
              >
                <Image 
                  src={currentItem.image} 
                  alt={currentItem.title}
                  fill // Ocupa todo el contenedor
                  className="object-cover" // Se comporta igual que object-fit: cover
                  // Le decimos que la primera imagen es prioridad absoluta
                  priority={currentIndex === 0}
                  // Le decimos cómo cargar según el tamaño de la pantalla para ahorrar datos
                  sizes="(max-width: 768px) 100vw, 1200px" 
                />
              </motion.div>
              
              {/* DEGRADADO SOBRIO */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />

              {/* CONTENIDO DE TEXTO */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-20 max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="block text-[#a3c74a] text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4">
                    Riopaila Agrícola
                  </span>
                  
                  <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight tracking-tight drop-shadow-sm">
                    {currentItem.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-gray-300 font-light border-l-[3px] border-[#a3c74a] pl-5 leading-relaxed">
                    {currentItem.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* --- CONTROLES --- */}
          <div className="absolute bottom-8 right-8 md:bottom-10 md:right-12 z-30 flex items-center gap-6 px-6 py-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
            
            <button 
              onClick={() => paginate(-1)} 
              className="text-white/60 hover:text-white transition-colors active:scale-90 p-1"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Puntos de navegación */}
            <div className="flex items-center gap-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const dir = index > currentIndex ? 1 : -1;
                    setPage([index, dir]);
                  }}
                  className={`transition-all duration-500 rounded-full ${
                    currentIndex === index 
                    ? "w-8 h-1.5 bg-white" 
                    : "w-2 h-1.5 bg-white/30 hover:bg-white/60" 
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={() => paginate(1)} 
              className="text-white/60 hover:text-white transition-colors active:scale-90 p-1"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}