"use client"

import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion"
import { useRef, useEffect } from "react"

interface KPICardProps {
  value: number
  suffix?: string
  label: string
  description: string
  delay?: number
}

export function KPICard({ value, suffix = "", label, description, delay = 0 }: KPICardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Lógica de conteo fluido
  const springValue = useSpring(0, { stiffness: 40, damping: 20 })
  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString()
  )

  // Mouse interactivo dentro de la tarjeta
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => springValue.set(value), delay * 1000)
    }
  }, [isInView, value, springValue, delay])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50, rotateY: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 1, delay: delay * 0.2, ease: "easeOut" }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="relative group perspective-1000 bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl overflow-hidden"
    >
      {/* Luz que sigue al mouse dentro de la tarjeta */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(300px circle at ${x}px ${y}px, rgba(250, 204, 21, 0.15), transparent 80%)`
          )
        }}
      />

      <div className="relative z-10">
        <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter flex items-baseline gap-1">
          <motion.span>{displayValue}</motion.span>
          <span className="text-castilla-yellow text-4xl group-hover:scale-125 transition-transform duration-500">{suffix}</span>
        </div>
        
        <h3 className="text-xl font-black text-white uppercase tracking-[0.2em] mb-3">
          {label}
        </h3>
        
        <div className="w-12 h-1 bg-castilla-yellow rounded-full mb-6 group-hover:w-full transition-all duration-1000" />
        
        <p className="text-base text-white/60 leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Efecto de borde brillante lateral */}
      <div className="absolute top-0 left-0 w-[2px] h-0 group-hover:h-full bg-gradient-to-b from-transparent via-castilla-yellow to-transparent transition-all duration-700" />
    </motion.div>
  )
}