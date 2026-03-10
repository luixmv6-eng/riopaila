"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { KPICard } from "./KPICard"

// --- DATOS DE LOS INDICADORES ---
const kpiData = [
  { value: 6217, suffix: "+", label: "Hectáreas", description: "De tierra productiva en operación constante." },
  { value: 269, suffix: "+", label: "Colaboradores", description: "Trabajando por el desarrollo rural integral." },
  { value: 108, suffix: "", label: "Años", description: "Construyendo historia agrícola en Colombia." },
  { value: 95, suffix: "%", label: "Eficiencia", description: "En procesos de producción y tecnología." },
]

export function KPISection() {
  const containerRef = useRef(null)
  
  // Usamos 'once: true' para que la animación se dispare solo la primera vez que se ve
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  // Rastreamos el scroll para el efecto Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Movimiento sutil de la imagen de fondo
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden bg-black font-[Tahoma,Verdana,sans-serif]">
      
      {/* 1. IMAGEN DE FONDO PARALLAX */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0 will-change-[transform,opacity]"
      >
        <img 
          src="/Imagenes/DSC_0279.jpg" 
          alt="Cifras Castilla Agrícola"
          loading="lazy"
          className="w-full h-full object-cover scale-110"
        />
        {/* Capas oscuras para que el texto resalte siempre, sin importar qué tan clara sea la foto */}
        <div className="absolute inset-0 bg-[#002b18]/85 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      </motion.div>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <header className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            
            {/* ======================================================================
                AJUSTE DE CONTRASTE: ETIQUETA "IMPACTO REAL"
                Le dimos un fondo blanco muy sutil, un borde claro y forzamos el color amarillo
                para que no se pierda contra el fondo oscuro.
                ====================================================================== */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-[#a3c74a] text-xs font-black uppercase tracking-[0.4em] mb-8 will-change-[transform,opacity]"
            >
              <div className="w-2 h-2 bg-[#a3c74a] rounded-full animate-pulse shadow-[0_0_8px_#a3c74a]" />
              Impacto Real
            </motion.div>
            {/* ====================================================================== */}
            
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Cifras que <br /> <span className="text-[#a3c74a]">trascienden.</span>
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:max-w-xs will-change-[transform,opacity]"
          >
            <p className="text-white/70 text-xl font-normal border-l-4 border-[#a3c74a] pl-6 leading-relaxed">
              Nuestra operación se mide en resultados, pero se vive en el bienestar de nuestra gente.
            </p>
          </motion.div>
        </header>

        {/* 3. GRID DE TARJETAS (Donde se inyecta el KPICard que me mostraste antes) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpiData.map((kpi, index) => (
            <KPICard
              key={kpi.label}
              value={kpi.value}
              suffix={kpi.suffix}
              label={kpi.label}
              description={kpi.description}
              delay={index * 0.15} 
            />
          ))}
        </div>
      </div>

      {/* 4. LÍNEA DE LUZ DECORATIVA EN EL FONDO */}
      <motion.div 
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent will-change-transform pointer-events-none"
      />
    </section>
  )
}