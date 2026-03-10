"use client"

import { Users, ShieldCheck, ArrowRight, Sparkles, GraduationCap, Heart, TrendingDown, Target, Wallet, Landmark } from "lucide-react"
import { motion, Variants } from "framer-motion"

/* --------------------------------------------------------------------------
   ANIMACIONES
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageVariants: Variants = {
  hidden: { filter: "grayscale(100%)", scale: 1.1 },
  visible: { 
    filter: "grayscale(0%)", 
    scale: 1, 
    transition: { duration: 1.5, ease: "easeOut" } 
  }
}

export default function GestionSocial() {
  const pilares = [
    { 
      title: "Estrategia de Talento Humano", 
      icon: GraduationCap, 
      text: "Gestionar desde la vinculación un talento altamente competente, fomentando el desarrollo y bienestar integral del colaborador y su familia, creando y promoviendo ambientes laborales saludables y seguros.",
      stats: "Nuestra Gente",
      color: "from-red-500 to-red-700"
    },
    { 
      title: "Bienestar Laboral y Sostenibilidad", 
      icon: Heart, 
      text: "Creamos valor compartido como oportunidad de desarrollo, generando confianza y fortaleciendo las relaciones con los grupos de interés. Minimizamos el impacto ambiental y generamos rentabilidad.",
      stats: "ODS ONU",
      color: "from-amber-500 to-orange-600"
    },
    { 
      title: "Subsidio Familiar (COMFANDI)", 
      icon: Landmark, 
      text: "En alianza estratégica con la Caja de Compensación Familiar del Valle del Cauca, seguimos gestionando servicios y beneficios que contribuyen directamente a la Calidad de Vida de nuestros colaboradores.",
      stats: "Alianzas Estratégicas",
      color: "from-rose-500 to-red-600"
    }
  ]

  return (
    <motion.div 
      // 👇 Se fuerza el uso estricto de Tahoma
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-16 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* SECCIÓN: TÍTULO CON DECORACIÓN */}
      <motion.div variants={itemVariants} className="relative px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="text-red-600 w-5 h-5 animate-pulse" />
          <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em]">Valor Compartido</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-red-800 tracking-tight not-italic">
          Gestión Social
        </h1>
        
        <p className="text-gray-600 mt-6 text-lg md:text-xl leading-relaxed max-w-4xl font-normal">
          <span className="font-bold text-red-800 uppercase tracking-widest text-xs block mb-2">Nuestro Objetivo Retador</span>
          Desde el año 2012, reorientamos y alineamos acciones a través de proyectos para la optimización del recurso hídrico, mejora de las condiciones laborales de nuestra gente, buenas prácticas agrícolas y administrativas, aportando al progreso de la región y del país.
        </p>
        <div className="h-1.5 w-32 bg-red-600 mt-6 rounded-full" />
      </motion.div>
      
      {/* SECCIÓN: BANNER INMERSIVO (Sostenibilidad y ODS) */}
      <motion.div 
        variants={itemVariants}
        className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl group max-w-7xl mx-auto mx-4"
      >
        <motion.img 
          variants={imageVariants}
          src="/Imagenes/Exportado 1.jpg" 
          alt="Comunidad y Educación" 
          className="w-full h-full object-cover" 
        />
        
        {/* Overlay Inteligente en tonos rojos */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-900/60 to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 p-10 md:p-14 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold mb-4 border border-white/30">
              <Target size={16} className="text-yellow-400" /> Pacto Global ONU
            </div>
            <h2 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-4">
              La Estrategia de Sostenibilidad es parte de nuestros pilares. Minimizamos el impacto ambiental generando rentabilidad y <span className="text-yellow-400">alineados con el cumplimiento de los ODS</span>.
            </h2>
          </motion.div>
        </div>
      </motion.div>

      {/* SECCIÓN: INTERACTIVE STACKED CARDS (Pilares de Talento Humano) */}
      <div className="grid gap-8 relative max-w-7xl mx-auto px-4">
        {/* Línea vertical de fondo decorativa */}
        <div className="absolute left-14 top-0 bottom-0 w-px bg-gradient-to-b from-red-50 via-red-300/50 to-transparent hidden md:block" />

        {pilares.map((pilar, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative flex flex-col md:flex-row items-center gap-8 p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden"
          >
            {/* Gradiente de fondo en hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] bg-gradient-to-br ${pilar.color} transition-opacity duration-500`} />

            {/* Indicador Numérico Flotante */}
            <div className="relative shrink-0">
                <div className="text-7xl font-black text-red-800/5 group-hover:text-red-600/20 transition-colors duration-500 select-none">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-red-50 group-hover:bg-red-800 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner group-hover:rotate-12">
                      <pilar.icon size={30} className="text-red-800 group-hover:text-white transition-colors" />
                   </div>
                </div>
            </div>
            
            <div className="flex-1 text-center md:text-left z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 justify-center md:justify-start">
                <h3 className="font-bold text-2xl text-red-800">{pilar.title}</h3>
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter bg-gray-100 text-gray-500 group-hover:bg-red-600 group-hover:text-white transition-colors`}>
                   {pilar.stats}
                </span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed font-normal">
                {pilar.text}
              </p>
            </div>

            <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-10 transition-all duration-500 hidden md:block">
               <div className="w-12 h-12 rounded-full border border-red-300 flex items-center justify-center text-red-600">
                  <ArrowRight size={20} />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SECCIÓN DE IMPACTO: EDUCACIÓN FINANCIERA */}
      <motion.div 
        variants={itemVariants}
        className="bg-red-900 rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto mx-4"
      >
        {/* Decoración de fondo */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />

        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
            <Wallet size={14} /> Acciones Claves
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            Educación <span className="text-yellow-400">Financiera</span>
          </h3>
          <p className="text-white/80 text-lg leading-relaxed font-light mb-4">
            Brindamos acompañamiento a través de espacios de capacitación. Orientamos temas relacionados a: calamidades, educación, libre inversión, compra de cartera, reparación de vivienda y vehículo.
          </p>
          <p className="text-white/90 font-bold">
            Contribuyendo al mejoramiento de las condiciones de vida y fomentando la cultura del ahorro en las familias.
          </p>
        </div>

        {/* Tarjeta de Métricas de Libranzas y Préstamos */}
        <div className="bg-white p-8 rounded-[2rem] w-full md:w-[380px] shrink-0 relative z-10 shadow-xl text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Gestión de Libranzas</p>
          
          <div className="mb-8">
            <p className="text-5xl font-black text-red-800 leading-none mb-2">$ 1.1 <span className="text-2xl">MM</span></p>
            <p className="text-xs font-bold text-gray-500">Gestionados en alianza con entidades bancarias y Fondo CRC</p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-center gap-4">
             <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center shrink-0">
               <Users size={24} className="text-red-600" />
             </div>
             <div className="text-left">
                <p className="text-3xl font-black text-red-800 leading-none mb-1">104</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trabajadores y <br/>Familias Beneficiadas</p>
             </div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  )
}