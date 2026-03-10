"use client"

import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion"
import { useRef, useEffect } from "react"
import { Leaf, Droplets, Sun, Users, ArrowUpRight, Sparkles } from "lucide-react"

// --- DATOS DE LAS INICIATIVAS (DATA) ---
// Aquí definimos las tarjetas. Cada una tiene su ícono, título, descripción y color de acento.
const items = [
  { icon: Leaf, title: "Agricultura Responsable", desc: "Prácticas que regeneran el ecosistema mediante nutrición orgánica.", col: "#a3c74a" },
  { icon: Droplets, title: "Gestión del Agua", desc: "Riego por goteo y monitoreo en tiempo real para preservar acuíferos.", col: "#60a5fa" },
  { icon: Sun, title: "Energía Limpia", desc: "Paneles solares y biomasa para reducir nuestra huella de carbono.", col: "#fbbf24" },
  { icon: Users, title: "Impacto Social", desc: "Fortalecemos el tejido social mediante educación y empleo digno.", col: "#f87171" },
]

export function SustainabilitySection() {
  const sectionRef = useRef(null)
  
  // Usamos useInView para saber cuándo el usuario ha scrolleado hasta esta sección.
  // Con 'once: true', la animación de entrada se dispara solo la primera vez que se ve.
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" })
  
  // Configuramos el scroll para el efecto Parallax del fondo (que la foto se mueva lento).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  // === EFECTO DE LINTERNA (SPOTLIGHT) DETRÁS DEL MOUSE ===
  // Rastreamos la posición X e Y del mouse para crear un brillo verde que lo siga.
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Usamos 'spring' (resorte) para que el movimiento de la luz sea suave, no robótico.
  const spotlightX = useSpring(mouseX, { stiffness: 40, damping: 25, mass: 0.8 })
  const spotlightY = useSpring(mouseY, { stiffness: 40, damping: 25, mass: 0.8 })

  // Armamos el gradiente dinámico de la linterna verde.
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(0, 100, 55, 0.35), transparent 85%)`

  useEffect(() => {
    // Escuchamos el mouse, pero usamos requestAnimationFrame para no estresar la página.
    let frameId: number
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      })
    }
    
    // Solo activamos el tracker de mouse si estamos en PC (no en móvil).
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true })
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [mouseX, mouseY])

  return (
    // Forzamos la tipografía Tahoma y fondo negro absoluto para que resalte la luz.
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-black min-h-screen flex items-center font-[Tahoma,Verdana,sans-serif]">
      
      {/* --- EL ESPACIO PARA LA IMAGEN DE FONDO PARALLAX Y LA LUZ --- */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 scale-110 will-change-transform"
      >
        {/* ======================================================================
            🖼️ AQUÍ ES DONDE CAMBIAS LA IMAGEN DE FONDO.
            ====================================================================== */}
        <img 
          src="/Imagenes/DSC_0279.jpg" 
          alt="Sostenibilidad Castilla Agrícola" 
          loading="lazy"
          className="w-full h-full object-cover opacity-40" 
        />
        {/* ====================================================================== */}
        
        {/* Capa de la linterna verde que sigue al mouse (Spotlight) */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none will-change-[background]"
          style={{ background: spotlightBackground }}
        />
        
        {/* Degradados oscuros arriba y abajo para que la sección se fusione bien con el resto de la web */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a0e] via-transparent to-[#001a0e] z-20" />
      </motion.div>

      {/* --- EL CONTENIDO DEL FRENTE (Z-30) --- */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="mb-24 flex flex-col items-center text-center">
          
          {/* ======================================================================
              AQUÍ ESTÁ EL CAMBIO DEL TEXTO "SOSTENIBILIDAD"
              Le puse "text-white" para que sea blanco brillante y legible.
              ====================================================================== */}
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={isInView ? { rotate: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 px-5 py-1.5 border border-castilla-yellow/40 bg-castilla-yellow/10 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.4em] mb-8 will-change-transform"
          >
            <Sparkles size={14} className="animate-pulse text-castilla-yellow" /> SOSTENIBILIDAD
          </motion.div>
          {/* ====================================================================== */}

          {/* El título principal. Animamos letra por letra para un efecto súper premium y secuencial */}
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
            {"Comprometidos con el ".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                // Retraso secuencial por letra para el efecto "ola"
                transition={{ delay: i * 0.02, duration: 0.3 }}
                className="inline-block will-change-[opacity,transform]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            {/* La palabra 'futuro' tiene su propia animación de resorte amarillo */}
            <motion.span 
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={isInView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
              className="text-castilla-yellow inline-block ml-2 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] will-change-transform"
            >
              futuro
            </motion.span>
          </h2>
        </div>

        {/* --- GRID DE LAS 4 TARJETAS --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              // Entrada suave y secuencial de cada tarjeta desde abajo
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              // Al pasar el mouse, la tarjeta flota sutilmente
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              // Efecto de cristal esmerilado (Glassmorphism)
              className="group relative h-[340px] bg-white/[0.05] backdrop-blur-md rounded-[2.5rem] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 shadow-2xl overflow-hidden will-change-transform"
            >
              {/* Un destello de luz blanca que cruza la tarjeta rápido cuando haces hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </div>

              <div>
                {/* Ícono dinámico que flota repetidamente. Toma el color definido en 'items'. */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-lg will-change-transform"
                >
                  <item.icon size={32} style={{ color: item.col }} />
                </motion.div>
                
                {/* Título de la tarjeta en PC y Móvil */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-100 leading-relaxed font-normal group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Footer de la tarjeta con firma y flecha */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Castilla 2026</span>
                {/* La flechita gira 45 grados en hover */}
                <motion.div
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>

              {/* Barra de color de acento inferior que crece en hover */}
              <div 
                className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                style={{ backgroundColor: item.col }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}