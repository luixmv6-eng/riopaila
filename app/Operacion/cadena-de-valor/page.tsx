"use client"

import { motion, Variants } from "framer-motion"
import { Users, Shield, HeartHandshake, Globe, Truck, CheckCircle2, Sprout, Leaf, Recycle, BarChart3 } from "lucide-react"

/* --------------------------------------------------------------------------
   CONFIGURACIÓN DE ANIMACIONES
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
}

// --- NUEVOS DATOS EXTRAÍDOS DE LA DIAPOSITIVA (Colores Actualizados) ---
const procesos = [
  {
    id: "01",
    icon: Users,
    title: "Desarrollo de nuestro talento",
    description: "Nuestro poder agrícola nace de la gente. Fortalecemos capacidades, promovemos entornos seguros y saludables, e impulsamos una cultura de valores y sentido de pertenencia.",
    tag: "Gente",
    lightColor: "bg-red-50 text-red-600"
  },
  {
    id: "02",
    icon: Sprout,
    title: "Producción agrícola sostenible",
    description: "Hacemos del campo una fuente altamente productiva y rentable, aplicando buenas prácticas agrícolas, cuidando fuentes hídricas, biodiversidad y nuestros suelos.",
    tag: "Campo",
    lightColor: "bg-red-100 text-red-800"
  },
  {
    id: "03",
    icon: Truck,
    title: "Proveedores y contratistas locales",
    description: "Priorizamos la contratación en nuestras zonas de influencia, garantizando empleo digno, pagos oportunos y estabilidad en los procesos.",
    tag: "Aliados",
    lightColor: "bg-rose-50 text-rose-700"
  },
  {
    id: "04",
    icon: HeartHandshake,
    title: "Clientes y comercialización",
    description: "Ofrecemos productos confiables que representan una historia de compromiso, territorio y sostenibilidad. Buscamos relaciones duraderas y atención cercana.",
    tag: "Propósito",
    lightColor: "bg-amber-50 text-amber-700"
  },
  {
    id: "05",
    icon: Globe,
    title: "Impacto social compartido",
    description: "Creemos en crecer con nuestras comunidades. Apoyamos programas sociales, educativos y culturales. Fomentamos el desarrollo local con oportunidades reales.",
    tag: "Comunidad",
    lightColor: "bg-orange-50 text-orange-600"
  },
  {
    id: "06",
    icon: Shield,
    title: "Buen gobierno y Ética",
    description: "Nuestros procesos están guiados por principios éticos, transparencia, cumplimiento y respeto por la normatividad. Construimos confianza con hechos.",
    tag: "Integridad",
    lightColor: "bg-stone-100 text-stone-700"
  },
]

export default function CadenaValorPage() {
  return (
    // Aplicando tipografía corporativa
    <div className="space-y-24 pb-20 font-[Tahoma,Verdana,sans-serif]">
      
      {/* 1. SECCIÓN: HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-10 max-w-7xl mx-auto px-4 text-center md:text-left"
      >
        <div className="absolute -left-6 top-10 w-2 h-24 bg-yellow-400 rounded-r-full hidden md:block" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full mb-6 border border-red-100">
           <Leaf size={14} className="text-red-800" />
           <span className="text-red-800 font-bold text-[10px] uppercase tracking-widest">Desarrollo Integral</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-red-800 mb-6 tracking-tight leading-none">
          Nuestra Cadena de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-500">Valor</span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-3xl font-light mx-auto md:mx-0">
          Un modelo de gestión donde el campo, nuestra gente y el entorno se unen para generar un impacto positivo, ético y <span className="font-bold text-red-800 bg-red-50 px-2 rounded-lg">altamente productivo</span>.
        </p>
      </motion.div>

      {/* 2. SECCIÓN: BANNER DE IMPACTO */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-red-900 text-white rounded-[3rem] p-8 md:p-12 shadow-2xl max-w-7xl mx-auto mx-4"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 opacity-10 rounded-full -ml-20 -mb-20 blur-3xl" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
              <Recycle size={18} className="text-yellow-400" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Crecimiento Compartido</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Producimos confianza con <span className="text-yellow-400 italic">hechos.</span>
            </h2>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Desde el cultivo de la tierra hasta la relación con nuestras comunidades y clientes, cada eslabón está diseñado para garantizar sostenibilidad y transparencia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full lg:w-auto min-w-[300px]">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 text-center group flex flex-col items-center justify-center">
              <div className="mb-3 flex justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              <span className="block text-3xl md:text-4xl font-black text-white mb-2 leading-none">100%</span>
              <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest opacity-70">Transparencia</span>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 text-center group flex flex-col items-center justify-center">
              <div className="mb-3 flex justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                <Leaf size={28} />
              </div>
              <span className="block text-4xl md:text-5xl font-black text-white mb-2 leading-none">∞</span>
              <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest opacity-70">Sostenibilidad</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. SECCIÓN: LOS 6 PILARES DE LA CADENA DE VALOR */}
      <section className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-6">
          <h2 className="text-3xl font-black text-red-800 uppercase tracking-tighter">
            Nuestros Pilares
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {procesos.map((proceso) => (
            <motion.div
              key={proceso.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(153,27,27,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]"
            >
              {/* Cabecera */}
              <div className="flex justify-between items-start mb-6 relative z-20 w-full">
                <div className={`w-16 h-16 ${proceso.lightColor} rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                  <proceso.icon size={32} />
                </div>
                <span className="inline-block py-1.5 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-gray-50 text-gray-500 border border-gray-100 group-hover:bg-red-800 group-hover:text-white transition-colors">
                  {proceso.tag}
                </span>
              </div>

              {/* Contenido */}
              <div className="relative z-20">
                <h3 className="text-xl font-bold text-red-800 mb-3 leading-tight">
                  {proceso.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {proceso.description}
                </p>
              </div>

              {/* Número de fondo (Marca de agua) */}
              <span className="absolute -right-4 -bottom-6 text-[8rem] font-black text-gray-50 opacity-50 select-none group-hover:text-red-50/50 transition-colors pointer-events-none z-0">
                {proceso.id}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. SECCIÓN: CERTIFICACIÓN ÉTICA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-red-50/50 rounded-3xl border border-dashed border-red-200 mx-4"
      >
        <div className="flex -space-x-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-12 h-12 rounded-full bg-white border-2 border-red-50 flex items-center justify-center shadow-sm">
              <CheckCircle2 size={20} className="text-red-700" />
            </div>
          ))}
        </div>
        <div className="text-center md:text-left">
            <h4 className="text-base font-bold text-red-800 uppercase tracking-wide">Compromiso Normativo</h4>
            <p className="text-sm text-gray-600 font-medium mt-1">
              Todos nuestros procesos se ejecutan bajo los más estrictos estándares de ética corporativa y respeto por el entorno.
            </p>
        </div>
      </motion.div>

    </div>
  )
}