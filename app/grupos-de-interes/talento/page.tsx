"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Users, Rocket, Heart, ChevronRight, Award, LucideIcon } from "lucide-react"

/* DEFINICIÓN DE TIPOS Y VARIANTES */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.2 
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1]
    },
  },
}

const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 0, -10],
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
}

interface Beneficio {
  title: string;
  icon: LucideIcon;
  desc: string;
  color: string;
  bg: string;
}

const BENEFICIOS: Beneficio[] = [
  { title: "Crecimiento", icon: Rocket, desc: "Planes de carrera y formación técnica continua.", color: "text-red-600", bg: "bg-red-50" },
  { title: "Bienestar", icon: Heart, desc: "Programas integrales para ti y tu familia.", color: "text-rose-600", bg: "bg-rose-50" },
  { title: "Excelencia", icon: Award, desc: "Trabaja bajo los más altos estándares globales.", color: "text-amber-600", bg: "bg-amber-50" },
]

export default function TalentoPage() {
  return (
    <motion.div 
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-20 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* HEADER EDITORIAL */}
      <motion.div variants={itemVariants} className="relative space-y-6">
        <div className="flex items-center gap-3">
          {/* 👇 Línea de acento en rojo 👇 */}
          <div className="h-[2px] w-12 bg-red-600" />
          <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em]">Cultura Corporativa</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-red-800 not-italic tracking-tighter leading-none">
          Trabaja con nosotros
        </h1>
        
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-normal not-italic border-l-4 border-red-50 pl-6">
          Valoramos el talento humano como motor de innovación. Buscamos mentes creativas.
        </p>
      </motion.div>

      {/* GRID DE BENEFICIOS */}
      <div className="grid md:grid-cols-3 gap-8">
        {BENEFICIOS.map((benefit, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            whileHover={{ y: -12, backgroundColor: "#ffffff" }}
            className="group p-10 rounded-[3rem] bg-red-50/30 border border-red-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-red-200"
          >
            <div className={`w-14 h-14 ${benefit.bg} ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <benefit.icon size={30} />
            </div>
            <h4 className="font-bold text-2xl text-red-800 mb-3 tracking-tight">{benefit.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* PORTAL DE BUK */}
      <motion.div 
        variants={itemVariants}
        // 👇 Fondo degradado a rojos 👇
        className="relative group bg-gradient-to-br from-red-900 to-red-950 rounded-[4rem] p-1 shadow-2xl overflow-hidden"
      >
        <div className="relative z-10 bg-red-900/40 backdrop-blur-sm rounded-[3.9rem] p-12 md:p-16 flex flex-col items-center text-center">
          <motion.div 
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl"
          >
            <Users size={40} className="text-white" />
          </motion.div>

          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight not-italic">Portal de Candidatos</h3>
          
          <a 
            href="https://castillaagricola.buk.co/trabaja-con-nosotros" 
            target="_blank"
            rel="noopener noreferrer"
            // 👇 Botón actualizado a blanco/rojo 👇
            className="group/btn flex items-center gap-4 px-10 py-5 bg-white text-red-900 font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-red-50 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Aplicar ahora <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* FOOTER DE CONFIANZA */}
      <motion.div variants={itemVariants} className="text-center opacity-60">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
          La Compañía garantiza la protección de tus datos personales.
        </p>
      </motion.div>
    </motion.div>
  )
}