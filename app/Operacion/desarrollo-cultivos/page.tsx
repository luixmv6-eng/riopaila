"use client"

import { motion, Variants } from "framer-motion"
import { 
  Sprout, CloudSun, Microscope, Droplets, 
  FlaskConical, LineChart, Satellite, 
  ChevronRight, Sparkles, Navigation, Cpu 
} from "lucide-react"

/* --------------------------------------------------------------------------
   ANIMACIONES: DASHBOARD SYSTEM
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
}

const pilaresTecnicos = [
  { 
    icon: Microscope, 
    title: "I+D Agrícola", 
    desc: "Investigación biotecnológica para el desarrollo de variedades con alta resiliencia climática.",
    stats: "Genética Avanzada"
  },
  { 
    icon: Droplets, 
    title: "Riego Inteligente", 
    desc: "Sistemas automatizados de goteo que reducen el consumo hídrico en un 30%.",
    stats: "Precisión Hídrica" 
  },
  { 
    icon: CloudSun, 
    title: "Monitoreo Climático", 
    desc: "Red de estaciones meteorológicas IoT para predicciones hiper-locales.",
    stats: "Tiempo Real" 
  },
  { 
    icon: FlaskConical, 
    title: "Nutrición de Suelos", 
    desc: "Mapeo de nutrientes y aplicación dirigida para mantener la salud del ecosistema.",
    stats: "Suelo Vivo" 
  },
]

export default function DesarrolloCultivosPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* SECCIÓN: HEADER CON ENFOQUE CIENTÍFICO */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }}
        className="relative border-l-4 border-red-600 pl-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="text-red-600 w-4 h-4" />
          <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em]">
            Ciencia Aplicada
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-red-800 mb-6 tracking-tighter">
          Desarrollo de <span className="text-red-600">Cultivos</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light italic">
          Superamos los límites de la agricultura tradicional mediante el rigor científico, 
          maximizando el potencial biológico de la tierra con el menor impacto ambiental.
        </p>
      </motion.div>

      {/* SECCIÓN: GRID DE PILARES */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {pilaresTecnicos.map((item) => (
          <motion.div 
            key={item.title}
            variants={cardVariants}
            // 👇 Hover con borde rojo 👇
            whileHover={{ y: -5, borderColor: "#dc2626" }}
            className="group flex flex-col p-8 bg-white rounded-[2rem] border-2 border-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <item.icon size={80} />
            </div>

            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-800 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <item.icon className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase text-red-600/60 border border-red-600/20 px-3 py-1 rounded-full">
                {item.stats}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-red-600 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              VER PROTOCOLO TÉCNICO <ChevronRight size={14} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* SECCIÓN: AGRICULTURA 4.0 */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // 👇 Fondo degradado a tonos rojos oscuros 👇
        className="bg-gradient-to-br from-red-900 to-[#450a0a] text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl"
      >
        {/* 👇 Patrón de puntos en rojo suave 👇 */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fca5a5_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 bg-yellow-400 text-red-950 px-5 py-2 rounded-full font-black text-[10px] uppercase mb-8 shadow-lg">
              <Navigation size={14} className="animate-bounce" /> Conectividad Aérea Activa
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Agricultura 4.0: El <br /> Futuro es hoy.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
              Nuestra operación se gestiona desde el espacio y el aire. Utilizamos drones de última generación y sensores 
              suelo-planta para crear mapas de calor y vigor vegetativo en tiempo real.
            </p>
            
            <div className="flex flex-wrap gap-4">
               {[
                 { label: "Drones Termográficos", icon: Navigation },
                 { label: "Sensores IoT", icon: Cpu },
                 { label: "Mapeo NDVI", icon: Satellite }
               ].map((tech) => (
                 <div key={tech.label} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs font-bold">
                   <tech.icon size={14} className="text-yellow-400" />
                   {tech.label}
                 </div>
               ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-square bg-yellow-400/10 rounded-full flex items-center justify-center p-8 border border-yellow-400/20">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-2 border-dashed border-yellow-400/30 rounded-full"
               />
               <LineChart className="w-full h-full text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* DATA FOOTER */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
        {[
          { label: "Área Monitoreada", value: "100%" },
          { label: "Ahorro de Agua", value: "30%" },
          { label: "Reducción Química", value: "25%" },
          { label: "Eficiencia Genética", value: "15%" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="block text-2xl font-black text-red-800">{stat.value}</span>
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
      
    </div>
  )
}