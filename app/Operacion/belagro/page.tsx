"use client"

import { motion, Variants } from "framer-motion"
import { ShieldCheck, ArrowUpRight, TrendingUp, Droplets, Leaf, FlaskConical, Truck } from "lucide-react"
import Image from "next/image"

/* --------------------------------------------------------------------------
   CONFIGURACIÓN DE ANIMACIONES (VARIANTS)
   -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
}

// --- RUTA DE LA IMAGEN ---
const BELAGRO_IMAGE_PATH = "/Imagenes/belagro.jpg"

export default function BelagroPage() {
  return (
    <div className="relative min-h-screen py-10 overflow-hidden font-[Tahoma,Verdana,sans-serif]">
      
      {/* Fondo Decorativo Animado */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          // 👇 Brillo rojo sutil de fondo 👇
          className="absolute -top-24 -right-24 w-96 h-96 bg-red-500 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      </div>

      {/* HEADER DINÁMICO */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative"
      >
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 2 }}
          // 👇 Etiqueta en rojo claro 👇
          className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-6 py-2 rounded-2xl text-xs font-black mb-6 uppercase tracking-widest shadow-lg cursor-default"
        >
          <ShieldCheck size={16} /> Respaldo Corporativo S.A.
        </motion.div>
        
        <h1 className="text-7xl md:text-9xl font-black text-red-800 mb-6 tracking-tighter relative inline-block">
          BELAGRO
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            // 👇 Subrayado en rojo 👇
            className="absolute bottom-4 left-0 h-4 bg-red-500/20 -z-10"
          />
        </h1>
        
        {/* TEXTO INTRODUCTORIO */}
        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed px-4">
          Generadores de soluciones agronómicas para la fertilización líquida. Desarrollamos productos innovadores que agregan valor al campo colombiano, con una capacidad instalada de <span className="font-bold text-red-600">8 millones de litros anuales</span>.
        </p>
      </motion.div>

      {/* ================= SECCIÓN: IMAGEN Y ENTORNO ================= */}
      <section className="py-12 relative z-10 max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-white/60 backdrop-blur-md rounded-[3rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-white flex flex-col items-center">
          
          {/* --- 1. Título y Texto --- */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full mb-6 shadow-sm">
              <Leaf size={14} className="text-red-700" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-red-900 uppercase">Sostenibilidad y Rendimiento</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-red-800 mb-6 leading-tight">
              Nutrición vegetal que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">optimiza y protege</span>.
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Nuestra planta de fertilizantes suple las necesidades del sector agrícola incrementando la rentabilidad. A través de nuestra línea de concentrados solubles, aportamos un enfoque sostenible aplicando bajas dosis por hectárea, optimizando la logística y garantizando un mejor margen de utilidad.
            </p>
          </motion.div>

          {/* --- 2. Imagen --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            {/* Marco sutil */}
            <div className="absolute -inset-3 md:-inset-5 bg-[#fef4e3] rounded-[2.5rem] md:rounded-[3rem] z-0"></div>
            
            <div className="relative z-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] md:border-[8px] border-white group">
              <Image
                src={BELAGRO_IMAGE_PATH}
                alt="Planta de fertilizantes líquidos Belagro"
                width={1200}
                height={600}
                layout="responsive"
                objectFit="cover"
                className="w-full h-auto bg-slate-100 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* GRID DE INFORMACIÓN (Portafolio y Beneficios) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto"
      >
        {[
          {
            title: "Disoluciones",
            desc: "Fertilizantes líquidos simples que contienen una o dos materias primas, diseñados para el aporte directo y eficiente de nutrientes primarios al cultivo.",
            icon: Droplets,
            color: "text-blue-500",
            border: "border-blue-400",
            bg: "hover:bg-blue-50"
          },
          {
            title: "Concentrados",
            desc: "Fertilizantes compuestos por múltiples materias primas. Incluyen auxiliares de formulación especializados para garantizar una perfecta estabilidad fisicoquímica.",
            icon: FlaskConical,
            color: "text-amber-500",
            border: "border-amber-400",
            bg: "hover:bg-amber-50"
          },
          {
            title: "Optimización Logística",
            desc: "Nuestros productos de bajas dosis por hectárea facilitan el transporte y almacenamiento, reduciendo costos operativos e incrementando la utilidad.",
            icon: Truck,
            // 👇 Actualizado a rojo corporativo 👇
            color: "text-red-800",
            border: "border-red-800",
            bg: "hover:bg-red-50"
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -15, scale: 1.02 }}
            className={`group bg-white p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border-b-[6px] ${item.border} transition-all duration-300 ${item.bg} relative overflow-hidden`}
          >
            {/* Decoración interna de la card */}
            <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
               <item.icon size={120} />
            </div>

            <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-white shadow-md group-hover:scale-110 transition-transform ${item.color}`}>
              <item.icon size={28} />
            </div>
            
            <h3 className={`text-2xl font-black mb-4 flex items-center gap-2 ${index === 2 ? 'text-red-800' : 'text-slate-800'}`}>
              {item.title}
              <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400" />
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
              {item.desc}
            </p>

            <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors mt-auto pt-4 border-t border-slate-100 ${index === 2 ? 'text-red-800/40 group-hover:text-red-600' : 'text-slate-400 group-hover:text-slate-600'}`}>
              <TrendingUp size={14} /> Calidad y Confiabilidad
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* FOOTER / CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // 👇 Fondo cambiado a rojo oscuro 👇
        className="mt-20 p-8 rounded-[2rem] bg-red-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto mx-4 md:mx-auto shadow-2xl"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center font-black text-2xl shrink-0">B</div>
          <div>
            <h4 className="text-xl font-bold text-white">¿Busca potenciar su cultivo?</h4>
            <p className="text-white/70 font-light">Conozca nuestro portafolio de fertilizantes líquidos de alta precisión.</p>
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-red-900 px-10 py-4 rounded-2xl font-black text-sm hover:bg-red-50 transition-colors shadow-xl shrink-0"
        >
          CONTACTAR CON BELAGRO
        </motion.button>
      </motion.div>

    </div>
  )
}