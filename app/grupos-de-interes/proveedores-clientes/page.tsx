"use client"

import { Handshake, ShieldCheck, ExternalLink, Globe } from "lucide-react"
import { motion, Variants } from "framer-motion"

/* --------------------------------------------------------------------------
   ANIMACIONES: PARTNER ECOSYSTEM
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const pulseVariants: Variants = {
  initial: { scale: 1, opacity: 0.5 },
  animate: { 
    scale: [1, 1.1, 1], 
    opacity: [0.5, 0.8, 0.5],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
}

export default function ProveedoresPage() {
  return (
    <motion.div
      // 👇 Aquí se fuerza el uso estricto de Tahoma para este componente
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-20 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* HEADER DINÁMICO */}
      <motion.div variants={itemVariants} className="relative">
        <div className="flex items-center gap-3 mb-4">
          {/* 👇 Color acento cambiado a rojo 👇 */}
          <div className="h-[2px] w-12 bg-red-600" />
          <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em]">Alianzas Estratégicas</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-red-800 tracking-tight not-italic">
          Proveedores y Clientes
        </h1>
        <p className="text-xl text-gray-500 mt-6 max-w-2xl leading-relaxed font-normal italic">
          Impulsamos el <span className="text-red-800 font-bold">crecimiento mutuo</span> a través de procesos transparentes y tecnología de vanguardia.
        </p>
      </motion.div>

      {/* CARD PRINCIPAL: RED DE VALOR */}
      <motion.div
        variants={itemVariants}
        // 👇 Degradado actualizado a rojos corporativos 👇
        className="group relative bg-gradient-to-br from-red-900 to-red-950 text-white p-12 rounded-[3.5rem] shadow-2xl overflow-hidden"
      >
        <motion.div 
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          // 👇 Brillo sutil en amarillo/dorado 👇
          className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" 
        />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0 relative">
            {/* 👇 Icono con borde y fondo sutil 👇 */}
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] text-yellow-400 group-hover:rotate-6 transition-transform duration-500 border border-white/20">
              <Handshake size={60} strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-lg text-red-950 shadow-lg">
              <ShieldCheck size={20} />
            </div>
          </div>
          
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Nuestra Red de Valor</h2>
            <p className="text-white/80 leading-relaxed text-xl max-w-2xl font-light">
              Construimos relaciones de largo plazo basadas en la <span className="text-yellow-400 font-bold italic text-2xl uppercase tracking-tighter">lealtad</span> y el cumplimiento estricto de estándares de calidad.
            </p>
          </div>
        </div>
      </motion.div>

      {/* PORTALES Y GESTIÓN (PORTAL DE PROVEEDORES) */}
      <div className="space-y-10">
        <h3 className="text-3xl font-bold text-red-800 flex items-center gap-4">
           Portales y Gestión <div className="h-[1px] flex-1 bg-gray-100" />
        </h3>
        
        {/* Contenedor Flex para centrar la tarjeta única */}
        <div className="flex justify-center w-full">
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="flex flex-col p-1 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-[3rem] hover:shadow-2xl transition-all group w-full max-w-xl"
          >
            <div className="p-10 space-y-6 text-center">
              <div className="flex justify-center items-start w-full relative">
                {/* 👇 Hover del icono a rojo 👇 */}
                <div className="p-6 bg-white shadow-inner rounded-3xl text-red-800 group-hover:bg-red-800 group-hover:text-white transition-all duration-500 mb-4">
                  <Globe size={48} />
                </div>
                <span className="absolute top-0 right-0 text-[10px] font-black text-gray-300 group-hover:text-red-600 transition-colors uppercase tracking-widest">Acceso Seguro</span>
              </div>
              
              <div>
                <h4 className="font-bold text-3xl text-red-800 mb-3 tracking-tight">Portal de Proveedores</h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed max-w-xs mx-auto">
                  Acceda a la intranet corporativa para la gestión transparente de sus procesos.
                </p>
              </div>
              
              <a
                href="http://201.219.242.106:8283/Intranet-Proveedores/login"
                target="_blank"
                rel="noopener noreferrer"
                // 👇 Colores del botón actualizados 👇
                className="inline-flex items-center justify-center gap-3 w-full py-5 bg-red-50 text-red-800 font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-red-800 hover:text-white transition-all duration-300 group/btn shadow-sm"
              >
                Ingresar al Portal <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER DE APOYO */}
      <motion.div 
        variants={itemVariants}
        className="text-center"
      >
        <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] hover:text-red-800 transition-colors cursor-default">
          ¿Dudas con sus procesos? 
        </p>
      </motion.div>
    </motion.div>
  )
}