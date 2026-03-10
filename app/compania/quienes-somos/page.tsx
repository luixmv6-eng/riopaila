"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Target, Heart, Shield, Handshake, ChevronDown, Users, Scale, Clock, MapPin, TrendingUp, Sparkles } from "lucide-react"
import { useRef } from "react"

// Valores Corporativos (Actualizados a la paleta roja/cálida)
const valores = [
  {
    icon: Handshake, 
    title: "Responsabilidad",
    description: "Asumimos responsablemente todas nuestras acciones y decisiones, tanto individuales como colectivas.",
    color: "from-red-600 to-red-800"
  },
  {
    icon: Users, 
    title: "Respeto",
    description: "Respetamos y valoramos las diferencias individuales y con nuestro entorno natural, promoviendo un ambiente inclusivo y sostenible.",
    color: "from-rose-400 to-rose-600"
  },
  {
    icon: Shield, 
    title: "Lealtad",
    description: "Cultivamos la lealtad mutua, la confianza y el respeto en todas nuestras interacciones.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Scale, 
    title: "Honestidad",
    description: "Somos honestos en nuestras comunicaciones y acciones.",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: Heart, 
    title: "Empatía",
    description: "Construimos relaciones significativas y un entorno laboral positivo.",
    color: "from-red-400 to-rose-500"
  }
]

export default function QuienesSomosPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <div ref={containerRef} className="relative space-y-24 pb-20 overflow-hidden font-[Tahoma,Verdana,sans-serif] bg-neutral-50/50">
      
      {/* Elemento Decorativo de Fondo (Cambiado a Sparkles en rojo muy suave) */}
      <motion.div style={{ y: y1, rotate }} className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none hidden lg:block">
        <Sparkles size={400} className="text-red-900" />
      </motion.div>

      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative min-h-[50vh] flex flex-col justify-center px-6 md:px-12 pt-28"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center md:text-left"
        >
          <span className="text-red-800 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">
            Nuestra Historia
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 leading-tight tracking-tight">
            Más de un siglo de <br /> 
            <span className="text-red-700">tradición agroindustrial.</span>
          </h1>
          
          <div className="text-base md:text-lg text-neutral-600 leading-relaxed border-l-4 border-red-600 pl-6 text-justify md:text-left max-w-4xl">
            <p className="mb-4">
              A través de los años, nos hemos consolidado como una de las empresas agrícolas más importantes e innovadoras de Colombia.
            </p>
            <p className="font-bold text-neutral-900">
              Hoy somos uno de los mayores proveedores de caña de azúcar para la transformación de la industria azucarera en la región.
            </p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-red-800/30 pt-10 hidden md:block"
        >
          <ChevronDown size={40} />
        </motion.div>
      </motion.section>

      {/* ================================================================
          SECCIÓN LÍNEA DE TIEMPO / HITOS
          ================================================================ */}
      <div className="grid lg:grid-cols-3 gap-8 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        {[
          { 
            year: "1918", 
            title: "El Origen",
            icon: Clock, 
            text: "Nuestro fundador, el Doctor Hernando Caicedo, inicia la actividad agroindustrial con un trapiche panelero en predios de la Hacienda Riopaila al norte del Valle del Cauca.",
            bg: "bg-white",
            accent: "bg-amber-100 text-amber-600",
            textColor: "text-neutral-900",
            accentYear: "text-amber-600"
          },
          { 
            year: "2006", 
            title: "Enfoque Estratégico",
            icon: Target, 
            text: "Riopaila Agrícola S.A. enfoca y consolida su responsabilidad en la administración integral de la tierra y la explotación sostenible del negocio agropecuario.",
            bg: "bg-red-900",
            accent: "bg-red-800 text-white",
            textColor: "text-white",
            accentYear: "text-red-300"
          },
          { 
            year: "Actualidad", 
            title: "Presencia Regional",
            icon: MapPin, 
            text: "Desarrollamos nuestras operaciones en zonas estratégicas de Colombia: municipios en el norte y centro del Valle del Cauca, y La Primavera en el Vichada.",
            bg: "bg-white",
            accent: "bg-red-100 text-red-700",
            textColor: "text-neutral-900",
            accentYear: "text-red-600"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            viewport={{ once: true }}
            className={`${item.bg} rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-neutral-100 relative overflow-hidden group flex flex-col`}
          >
            <div className={`w-14 h-14 ${item.accent} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
              <item.icon size={26} />
            </div>
            
            <span className={`text-sm font-black tracking-widest uppercase mb-2 ${item.accentYear}`}>
              {item.year}
            </span>
            <h2 className={`text-2xl font-bold mb-4 ${item.textColor}`}>
              {item.title}
            </h2>
            <p className={`text-base leading-relaxed ${item.textColor === "text-white" ? "text-white/80" : "text-neutral-600"}`}>
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================================================================
          BANNER ESTRATÉGICO / NUEVO MODELO
          ================================================================ */}
      <motion.section
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-6 md:px-8 rounded-[2.5rem] overflow-hidden text-center mx-4 md:mx-12 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('/Imagenes/textura-campo.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-neutral-900/90 backdrop-blur-sm" /> 
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <TrendingUp size={48} className="text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
            Un Nuevo Modelo de Campo
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            Nuestra historia se traduce hoy en la implementación de nuevas y mejores prácticas agrícolas, que se reflejan en el <span className="text-red-400 font-bold">aumento de la producción y la optimización de los costos</span>, garantizando rentabilidad y sostenibilidad.
          </p>
        </div>
      </motion.section>

      {/* ================================================================
          VALORES CORPORATIVOS
          ================================================================ */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-widest uppercase text-xs">Nuestra esencia</span>
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mt-2">Valores Corporativos</h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {valores.map((valor, index) => (
            <motion.div
              key={valor.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-8 bg-white rounded-[2rem] border border-neutral-100 shadow-md hover:shadow-xl transition-all cursor-default flex flex-col items-start"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${valor.color} flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <valor.icon size={26} />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-red-700 transition-colors tracking-tight">
                {valor.title}
              </h3>
              
              <p className="text-sm text-neutral-500 leading-relaxed font-normal">
                {valor.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}