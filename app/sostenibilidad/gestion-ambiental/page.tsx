"use client"

import React, { useState, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import { Leaf, Droplets, Sun, Waves, TreePine, Cloud, ShieldCheck } from "lucide-react"
import Link from "next/link"

/* --------------------------------------------------------------------------
   COMPONENTE AUXILIAR: CONTADOR NUMÉRICO ANIMADO
   -------------------------------------------------------------------------- */
const AnimatedNumber = ({ end, decimals = 0, duration = 2000 }: { end: number, decimals?: number, duration?: number }) => {
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

  return <span>{value.toLocaleString('es-CO', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>
}

/* --------------------------------------------------------------------------
   ANIMACIONES PRINCIPALES
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function GestionAmbiental() {
  
  // Acciones Clave de Riopaila
  const accionesClaves = [
    "Evaluar y formular proyectos de sistemas de riego que utilicen energías renovables.",
    "Aumentar el número de sistemas de riego eficiente.",
    "Continuar con la participación activa en las diferentes asociaciones de los ríos.",
    "Aumentar las áreas forestales en predios propios.",
    "Aumentar el área de adecuación con labranza reducida."
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dropFall {
          0% { top: -10%; opacity: 0; transform: scaleY(0.5); }
          20% { opacity: 1; transform: scaleY(1); }
          80% { opacity: 1; transform: scaleY(1); }
          100% { top: 90%; opacity: 0; transform: scaleY(0.5); }
        }
        @keyframes waveMove {
          0% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-25%) scaleY(0.8); }
          100% { transform: translateX(-50%) scaleY(1); }
        }
      `}} />

      {/* Forzamos Tahoma estrictamente y usamos un fondo súper limpio */}
      <motion.div
        style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
        className="space-y-16 pb-16 bg-[#fafbfc]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* ================= SECCIÓN 1: HEADER (COLORES RIOPAILA) ================= */}
        <motion.div variants={itemVariants} className="relative px-6 max-w-7xl mx-auto pt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#dc2626]" /> {/* Rojo vibrante */}
            <span className="text-[#dc2626] font-bold text-xs uppercase tracking-[0.3em]">
              Comprometidos con el Medio Ambiente
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-[#7f1d1d] tracking-tight">
            Gestión Ambiental
          </h1>
          
          <p className="text-gray-600 mt-8 text-xl leading-relaxed max-w-3xl font-normal">
            El fortalecimiento de una cultura de preservación hace parte de nuestra filosofía empresarial. Propiciamos la participación e implementación de acciones que contribuyen a mitigar el cambio climático y los impactos ambientales.
          </p>
        </motion.div>

        <div className="px-6 max-w-7xl mx-auto space-y-10">
          
          {/* ================= EJE 1: GESTIÓN HÍDRICA ================= */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-white rounded-[3rem] p-1 md:p-2 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden"
          >
            <div className="bg-slate-50/50 rounded-[2.8rem] p-8 md:p-12 flex flex-col gap-10">
              
              <div className="w-full">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-sm border border-blue-100">
                  <Waves size={16} className="animate-pulse" /> Elemento Esencial de Vida
                </div>
                <h3 className="text-[#7f1d1d] font-black text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-5">
                  Gestión del Recurso Hídrico
                </h3>
                <p className="text-[#64748b] leading-relaxed font-normal text-[17px] max-w-3xl">
                  Implementamos sistemas de riego más eficientes y herramientas de programación basadas en balance hídrico. Además, apoyamos el cuidado de las cuencas de los ríos <strong>Bugalagrande y La Paila</strong> a través de ASORIBU y AURPA.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                
                {/* Balde 1: Eficiencia de Riego (Mantenemos azul por el agua) */}
                <div className="flex items-center gap-6 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:border-blue-200 transition-all">
                  <div className="relative w-16 h-24 border-[3px] border-gray-200 rounded-b-xl rounded-t-[4px] overflow-hidden shrink-0 bg-gray-50 shadow-inner">
                    <div className="absolute top-0 left-0 w-full h-full z-10">
                      <div className="absolute left-[30%] w-1 h-3 bg-blue-400 rounded-full animate-[dropFall_1.2s_linear_infinite]" style={{ animationDelay: '0.1s' }}></div>
                      <div className="absolute left-[60%] w-1.5 h-4 bg-blue-300 rounded-full animate-[dropFall_1.5s_linear_infinite]" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                    <motion.div
                      initial={{ height: "0%" }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-300 absolute bottom-0 left-0 rounded-b-[8px]"
                    >
                      <div className="absolute -top-1 left-0 w-[200%] h-2 bg-blue-200 rounded-full opacity-60 animate-[waveMove_3s_ease-in-out_infinite]"></div>
                    </motion.div>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 text-[14px] font-bold text-[#7f1d1d] mb-1">
                      <Droplets size={16} className="shrink-0"/> <span className="truncate">Riego por Ventanas</span>
                    </div>
                    <p className="text-3xl font-black text-blue-600 leading-none mb-2">
                      +<AnimatedNumber end={10} decimals={0} />%
                    </p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest break-words leading-tight">
                      Incremento de área cubierta, reduciendo uso de sifones.
                    </p>
                  </div>
                </div>

                {/* Balde 2: Consumo Específico (Tonos Rojos Riopaila) */}
                <div className="flex items-center gap-6 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:border-[#dc2626] transition-all">
                  <div className="relative w-16 h-24 border-[3px] border-gray-200 rounded-b-xl rounded-t-[4px] overflow-hidden shrink-0 bg-gray-50 shadow-inner">
                    <div className="absolute top-0 left-0 w-full h-full z-10">
                      <div className="absolute left-[30%] w-1 h-3 bg-[#dc2626] rounded-full animate-[dropFall_1.2s_linear_infinite]" style={{ animationDelay: '0.2s' }}></div>
                      <div className="absolute left-[60%] w-1.5 h-4 bg-[#f87171] rounded-full animate-[dropFall_1.6s_linear_infinite]" style={{ animationDelay: '0.7s' }}></div>
                    </div>
                    <motion.div
                      initial={{ height: "0%" }}
                      whileInView={{ height: "70%" }}
                      transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
                      className="w-full bg-gradient-to-t from-[#991b1b] to-[#dc2626] absolute bottom-0 left-0 rounded-b-[8px]"
                    >
                      <div className="absolute -top-1 left-0 w-[200%] h-2 bg-[#fca5a5] rounded-full opacity-60 animate-[waveMove_3s_ease-in-out_infinite]"></div>
                    </motion.div>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 text-[14px] font-bold text-[#7f1d1d] mb-1">
                      <Leaf size={16} className="shrink-0"/> <span className="truncate">Consumo Específico</span>
                    </div>
                    <p className="text-3xl font-black text-[#dc2626] leading-none mb-2">
                      <AnimatedNumber end={1070} decimals={0} /> <span className="text-sm">m³/Ha</span>
                    </p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest break-words leading-tight">
                      Compromiso de reducción de huella hídrica (Meta).
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* ================= EJES 2 y 3: TARJETAS INTERACTIVAS ================= */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* EJE 2: Control y Corredores Biológicos */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col justify-between gap-6 p-10 bg-white rounded-[3rem] border border-gray-100 hover:border-[#dc2626]/50 transition-all shadow-sm hover:shadow-xl overflow-hidden"
            >
              <div>
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-[#7f1d1d] group-hover:text-white">
                  <TreePine size={32} />
                </div>
                <h4 className="font-bold text-2xl text-[#7f1d1d] mb-3">Control y Corredores Biológicos</h4>
                <p className="text-gray-500 font-normal leading-relaxed mb-8">
                  Estrategia sectorial con cero aplicaciones de insecticidas. Mantenemos el equilibrio del ecosistema mediante fauna benéfica y vegetación natural.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center text-center">
                    <p className="text-3xl font-black text-[#7f1d1d]">
                      <AnimatedNumber end={211} decimals={0} />
                    </p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight mt-1">Hectáreas<br/>Conservadas</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center text-center">
                    <p className="text-3xl font-black text-[#dc2626]">
                      <AnimatedNumber end={1.1} decimals={1} />%
                    </p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight mt-1">Infestación<br/>Diatraea</p>
                  </div>
                </div>

                {/* --- ANIMACIÓN: EL BOSQUE CRECIENDO --- */}
                <div className="relative h-24 w-full rounded-2xl bg-gradient-to-b from-[#fef2f2] to-white border border-[#fee2e2] overflow-hidden p-3 flex gap-5 items-end justify-center shadow-inner">
                  {/* Sol animado de fondo */}
                  <Sun className="absolute top-2 right-2 h-6 w-6 text-amber-400 animate-[pulse_4s_ease-in-out_infinite] opacity-50" />
                  
                  {/* Los arbolitos */}
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center relative z-10">
                      {/* Las hojas (copa del árbol - verde natural) */}
                      <motion.div 
                        className="w-7 h-7 bg-[#4caf50] rounded-full shadow-sm z-10 border border-[#388e3c]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.15, duration: 0.6, type: "spring", bounce: 0.5 }}
                        viewport={{ once: true }}
                      />
                      {/* El tronco */}
                      <motion.div 
                        className="w-2.5 bg-[#795548] rounded-t-sm -mt-2"
                        initial={{ height: 0 }}
                        whileInView={{ height: "28px" }}
                        transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  ))}
                  
                  {/* Base de tierra/pasto */}
                  <div className="absolute bottom-0 left-0 w-full h-3 bg-[#fca5a5] opacity-30 rounded-b-xl" />
                </div>
              </div>
            </motion.div>

            {/* EJE 3: Mitigación y Cambio Climático */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col justify-between gap-6 p-10 bg-white rounded-[3rem] border border-gray-100 hover:border-[#dc2626]/40 transition-all shadow-sm hover:shadow-xl overflow-hidden"
            >
              {/* --- ANIMACIÓN: LA NUBE FLOTANTE --- */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 opacity-10 pointer-events-none z-0"
              >
                <Cloud size={100} className="text-red-500" fill="currentColor" />
              </motion.div>

              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-[#7f1d1d] group-hover:text-white">
                  <Cloud size={32} />
                </div>
                <h4 className="font-bold text-2xl text-[#7f1d1d] mb-3">Mitigación y Cambio Climático</h4>
                <p className="text-gray-500 font-normal leading-relaxed mb-6">
                  Entendemos que somos pieza importante para la mitigación. Realizamos la primera medición de nuestras emisiones de Gases Efecto Invernadero (GEI).
                </p>
                
                {/* Tarjetas de Medición de Gases con partículas */}
                <div className="space-y-4 relative">
                  
                  <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between relative overflow-hidden">
                    {/* Partículas animadas de CO2 bajando (captura) */}
                    <motion.div animate={{ y: [-10, 20], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute right-4 top-1 text-[8px] font-bold text-slate-400">CO₂</motion.div>
                    
                    <div>
                      <h5 className="font-black text-slate-700 uppercase tracking-wide text-xs mb-1">CO₂ Capturado</h5>
                      <p className="text-xs text-slate-500 font-bold">Mitigación activa</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-slate-700">
                        <AnimatedNumber end={557} /> <span className="text-sm font-bold">Mil ton.</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#fef2f2] to-white p-5 rounded-2xl border border-[#fee2e2] shadow-sm flex items-center justify-between relative overflow-hidden">
                    {/* Partículas animadas de O2 subiendo (liberación) */}
                    <motion.div animate={{ y: [20, -10], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute right-4 bottom-1 text-[8px] font-bold text-[#dc2626]">O₂</motion.div>

                    <div>
                      <h5 className="font-black text-[#7f1d1d] uppercase tracking-wide text-xs mb-1">O₂ Liberado</h5>
                      <p className="text-xs text-[#dc2626] font-bold">Aporte de oxígeno</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-[#dc2626]">
                        <AnimatedNumber end={390} /> <span className="text-sm font-bold">Mil ton.</span>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>

          {/* ================= ACCIONES CLAVES PARA LA MITIGACIÓN ================= */}
          <motion.div variants={itemVariants} className="bg-[#7f1d1d] rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
             {/* Decoración de fondo */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
             
             <div className="relative z-10 mb-10 text-center md:text-left">
               <h3 className="text-3xl md:text-4xl font-black text-white mb-3">Acciones Claves para la Mitigación</h3>
               <p className="text-[#fca5a5] text-lg font-medium">Iniciativas estratégicas para reducir nuestro impacto ambiental.</p>
             </div>

             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {accionesClaves.map((accion, index) => (
                 <motion.div 
                   key={index}
                   whileHover={{ y: -5, scale: 1.02 }}
                   className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-start gap-4 shadow-lg"
                 >
                   <div className="shrink-0 w-8 h-8 rounded-full bg-[#dc2626] text-white flex items-center justify-center font-black text-sm shadow-md">
                     {index + 1}
                   </div>
                   <p className="text-white/90 text-sm font-medium leading-relaxed">
                     {accion}
                   </p>
                 </motion.div>
               ))}
             </div>
          </motion.div>

          {/* PIE DE SECCIÓN: REPORTE (Sin cursiva y con fuente estricta) */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#fef2f2] rounded-[2rem] border border-[#fee2e2] shadow-sm"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#fca5a5]">
                <Leaf className="text-[#dc2626]" size={24} />
              </div>
              <p className="text-sm font-bold text-[#7f1d1d]">
                Riopaila Agrícola: Construyendo un futuro sostenible hectárea a hectárea.
              </p>
            </div>
            
            <Link 
              href="/sostenibilidad/informes" 
              className="text-xs font-black uppercase tracking-widest text-[#7f1d1d] hover:text-[#dc2626] transition-colors border-b-2 border-[#dc2626] pb-1"
            >
              Ver Informe de Sostenibilidad
            </Link>
          </motion.div>
          
        </div>
      </motion.div>
    </>
  )
}