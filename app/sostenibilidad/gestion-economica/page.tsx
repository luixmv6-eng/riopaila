"use client"

import { TrendingUp, ShieldCheck, Briefcase, BarChart3, PieChart, ArrowUpRight, Wallet } from "lucide-react"
import { motion, Variants } from "framer-motion"

/* --------------------------------------------------------------------------
   ANIMACIONES: ECONOMIC SOLVENCY SYSTEM
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function GestionEconomica() {
  return (
    <motion.div 
      // 👇 Se fuerza el uso estricto de Tahoma
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-12 pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* TÍTULO CON INDICADOR DE MERCADO */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#a3c74a] animate-pulse" />
            <span className="text-[#a3c74a] font-bold text-xs uppercase tracking-[0.3em]">Resultados Financieros</span>
          </div>
          
          {/* 👇 Título sin inclinación (not-italic) 👇 */}
          <h1 className="text-5xl font-black text-[#006437] tracking-tight not-italic">
            Gestión Económica
          </h1>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Crecimiento Interanual</p>
          <p className="text-sm font-bold text-[#006437] flex items-center gap-2">
            EBITDA +6.5% <ArrowUpRight size={16} />
          </p>
        </div>
      </motion.div>
      
      {/* GRID PRINCIPAL: BENTO BOX STYLE */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* BLOQUE: EVOLUCIÓN DEL EBITDA (Principal) */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-br from-[#006437] to-[#004d2a] text-white p-10 rounded-[3.5rem] lg:col-span-2 shadow-2xl shadow-green-900/30 relative overflow-hidden group border border-white/5"
        >
          {/* Elemento Decorativo: Gráfico de fondo */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
            <BarChart3 size={300} />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#a3c74a] rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-500">
              <TrendingUp size={32} className="text-[#006437]" />
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Evolución del EBITDA</h2>
            <p className="text-white/80 leading-relaxed text-xl max-w-2xl font-normal">
              La Compañía alcanzó un EBITDA de <span className="text-[#a3c74a] font-bold">$93.641 millones</span>, 
              representando un incremento del <strong className="text-white">6.5%</strong> frente a los resultados obtenidos en el año 2024.
            </p>
            
            {/* Comparativa de Cifras */}
            <div className="mt-10 flex gap-12 border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#a3c74a] mb-1">EBITDA 2024</p>
                <p className="text-2xl font-bold text-white/70">87.911 <span className="text-sm font-normal">M</span></p>
              </div>
              <div className="relative">
                {/* Flecha indicadora de crecimiento */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-[#a3c74a]">
                  <ArrowUpRight size={20} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#a3c74a] mb-1">EBITDA 2025</p>
                <p className="text-3xl font-black">93.641 <span className="text-sm font-normal text-white/80">M</span></p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* BLOQUE: MARGEN EBITDA (Vertical) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="bg-white border border-gray-100 p-10 rounded-[3.5rem] flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-500 group"
        >
          <div className="space-y-6">
            <div className="w-14 h-14 bg-[#f1f8e9] rounded-2xl flex items-center justify-center group-hover:bg-[#006437] transition-colors duration-500">
              <PieChart size={32} className="text-[#006437] group-hover:text-white" />
            </div>
            <h3 className="font-bold text-2xl text-[#006437] tracking-tight">Margen Operativo</h3>
            <p className="text-gray-500 text-base leading-relaxed font-normal">
              Consolidamos la rentabilidad y eficiencia de nuestras operaciones durante el período reportado.
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-3xl border-2 border-dashed border-[#a3c74a]/40 text-center">
            <p className="text-5xl font-black text-[#006437]">89%</p>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Margen EBITDA</p>
          </div>
        </motion.div>
      </div>

      {/* BLOQUE SECUNDARIO: CAJA Y BANCOS (CENTRADO) */}
      <div className="flex justify-center w-full">
        <motion.div 
          variants={itemVariants}
          className="p-8 bg-gray-50/80 backdrop-blur-sm rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row items-center gap-8 group hover:bg-white hover:shadow-lg transition-all w-full max-w-3xl"
        >
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 group-hover:scale-110 transition-transform shrink-0">
            <Wallet className="text-[#a3c74a]" size={40} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold text-[#006437] text-2xl mb-2 tracking-tight">Liquidez y Solidez Financiera</h3>
            <p className="text-gray-500 text-base font-normal leading-relaxed">
              Cerramos el período con una posición financiera altamente sólida, asegurando la continuidad del negocio con un saldo disponible en la caja y bancos de <strong className="text-[#006437] text-xl">$119 millones</strong>.
            </p>
          </div>
        </motion.div>
      </div>

    </motion.div>
  )
}