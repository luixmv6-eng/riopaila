"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Building2, Map, Landmark, CheckCircle2, MapPin } from "lucide-react"

/* --------------------------------------------------------------------------
   COMPONENTE AUXILIAR: CONTADOR NUMÉRICO ANIMADO
   -------------------------------------------------------------------------- */
const AnimatedNumber = ({ end, decimals = 0, duration = 2000, prefix = "", suffix = "" }: { end: number, decimals?: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      setValue(end * easeProgress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter)
      } else {
        setValue(end)
      }
    }

    animationFrame = requestAnimationFrame(updateCounter)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{prefix}{value.toLocaleString('es-CO', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>
}

export default function ProyectosInmobiliariosPage() {
  return (
    // Forzamos Tahoma en toda la vista y un fondo súper limpio
    <div className="space-y-12 pb-16 bg-[#fafbfc] min-h-screen" style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}>
      
      {/* AQUÍ AGREGAMOS LA ANIMACIÓN CSS NATIVA PARA EL RADAR DEL MAPA. 
        Esto evita que se trabe, garantizando 60fps constantes.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes smoothRadar {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(3.5); opacity: 0; }
        }
      `}} />

      {/* ================= HERO SECTION ================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] md:h-[500px] rounded-b-[3rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center text-center shadow-2xl mx-0 md:mx-4 lg:mx-8 mt-0 md:mt-8"
      >
        <img 
          src="/Imagenes/Exportado 2.jpg" 
          alt="Terrenos y Proyectos Riopaila"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Degradado rojo oscuro característico de Riopaila */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(127,29,29,0.8), rgba(127,29,29,1))' }} 
        />
        
        <div className="relative z-10 text-white px-6 mt-12">
          <motion.span 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#fca5a5] text-[#7f1d1d] px-5 py-1.5 rounded-full text-xs font-black mb-6 uppercase tracking-[0.2em] shadow-lg"
          >
            Proyectos Especiales
          </motion.span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight drop-shadow-md">
            Desarrollo Inmobiliario
          </h1>
        </div>
      </motion.section>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        
        {/* 1. ESTRATEGIA (Texto Introductorio) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 text-center relative overflow-hidden"
        >
          {/* Detalle decorativo superior */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-[#dc2626] rounded-b-full" />
          
          <p className="text-lg md:text-2xl text-[#475569] font-normal leading-relaxed">
            Los proyectos especiales de tipo inmobiliario forman parte de la <strong className="text-[#7f1d1d]">estrategia de diversificación y optimización de activos</strong>, contribuyendo a la generación de ingresos complementarios y al fortalecimiento del desempeño económico de la organización.
          </p>
        </motion.div>

        {/* 2. HITO 2025: LOTE COOPERATIVA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-white to-[#fef2f2] rounded-[3rem] p-1 md:p-2 shadow-[0_20px_50px_-15px_rgba(220,38,38,0.1)] border border-[#fee2e2]"
        >
          <div className="bg-white rounded-[2.8rem] p-6 md:p-12 h-full flex flex-col">
            
            {/* --- PARTE SUPERIOR: TEXTOS Y CIFRAS --- */}
            <div>
              {/* Encabezado */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-[#fef2f2] rounded-2xl flex items-center justify-center border border-[#fca5a5] shrink-0">
                    <Building2 className="w-8 h-8 text-[#dc2626]" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#7f1d1d] tracking-tight">Lote Cooperativa</h2>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Venta Finalizada</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#dc2626] text-white px-5 py-2 rounded-full shadow-md w-fit shrink-0">
                  <CheckCircle2 size={18} />
                  <span className="text-xs font-black uppercase tracking-widest">Año 2025</span>
                </div>
              </div>

              {/* Texto Principal */}
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
                Durante el año 2025 se concretó y finalizó la venta y transferencia del <strong>lote Cooperativa</strong>, al proyecto inmobiliario <strong className="text-[#7f1d1d]">Prados de la Merced</strong> de constructora sudamericana, por un valor de <strong>$ 4.935.200.000</strong>.
              </p>

              {/* Indicadores Numéricos Animados */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {/* Indicador de Área */}
                <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 flex items-center gap-6 group hover:border-[#fca5a5] transition-colors">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-[#dc2626] group-hover:scale-110 transition-transform shrink-0">
                    <Map size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">Área</p>
                    <p className="text-4xl md:text-5xl font-black text-[#7f1d1d]">
                      <AnimatedNumber end={3.54} decimals={2} /> <span className="text-lg font-bold text-gray-400 ml-1">Has</span>
                    </p>
                  </div>
                </div>

                {/* Indicador de Valor */}
                <div className="bg-[#fef2f2] rounded-[2rem] p-8 border border-[#fee2e2] flex items-center gap-6 group hover:border-[#dc2626] transition-colors">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-[#dc2626] group-hover:scale-110 transition-transform shrink-0">
                    <Landmark size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#dc2626] uppercase tracking-[0.2em] mb-1">Valor</p>
                    <p className="text-4xl md:text-5xl font-black text-[#dc2626]">
                      <AnimatedNumber end={4935} decimals={0} prefix="$" /> <span className="text-lg font-bold text-[#fca5a5] ml-1">(MM)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- PARTE INFERIOR: MAPA ANIMADO CON HOVER --- */}
            <div className="relative w-full h-[400px] bg-[#f8fafc] rounded-[2rem] border border-gray-200 overflow-hidden shadow-inner flex items-center justify-center">
              
              {/* Fondo vectorial abstracto (Simula geografía/cuadrícula) */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cbd5e1" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridPattern)" />
                {/* Líneas simulando el relieve o vías */}
                <path d="M-100,100 Q300,250 400,450 T900,550" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" opacity="0.4"/>
                <path d="M0,500 Q400,300 600,200 T1200,150" fill="none" stroke="#e2e8f0" strokeWidth="16" strokeLinecap="round" opacity="0.3"/>
              </svg>

              {/* Contenedor Interactivo del Pin (Group para el hover) */}
              <div className="relative z-10 flex flex-col items-center justify-center group cursor-pointer w-48 h-48">
                
                {/* Ondas expansivas CSS NATIVO (Mucho más fluido que Framer Motion) */}
                <div className="absolute w-12 h-12 bg-[#dc2626] rounded-full animate-[smoothRadar_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute w-12 h-12 bg-[#fca5a5] rounded-full animate-[smoothRadar_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }} />
                
                {/* Icono del Pin (Fijo en el centro, sube un poquito en hover) */}
                <div className="relative z-20 text-[#dc2626] drop-shadow-lg pb-2 transition-transform duration-300 group-hover:-translate-y-2">
                  <MapPin size={56} fill="white" strokeWidth={1.5} />
                </div>
                
                {/* Etiqueta de la Ubicación (Oculta por defecto, aparece en Hover) 
                  Aparece desde abajo hacia arriba suavemente
                */}
                <div className="absolute top-[65%] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-30 mt-2 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-[#fee2e2] text-center pointer-events-none min-w-[220px]">
                  <p className="text-[10px] font-black text-[#dc2626] uppercase tracking-[0.2em] mb-1">Prados de la Merced</p>
                  <p className="text-xl font-black text-[#7f1d1d] uppercase tracking-wider leading-none">La Paila, Zarzal</p>
                  <p className="text-xs font-bold text-gray-500 mt-2">Valle del Cauca</p>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}