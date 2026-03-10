"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import { Quote, ArrowDownCircle, Target, Sprout, Building2, Droplets, Users, Recycle, Leaf } from "lucide-react"

// --- DATOS COMPLETOS DE EVOLUCIÓN (Extraídos de las imágenes) ---
const timelineEvents = [
  {
    year: "2010",
    title: "Explotación Agroindustrial",
    description: "Enfoca su responsabilidad en la administración de la tierra y explotación agroindustrial.",
    icon: Building2,
    highlight: true,
  },
  {
    year: "2011",
    title: "Operación",
    description: "La Junta Directiva determinó separar la administración de la operación agrícola de la industrial, a partir del 01 de enero de 2011.",
    icon: Target,
    highlight: false,
  },
  {
    year: "2014",
    title: "Cultivo de Frutales",
    description: "Visualizando nuevas alternativas para diversificar su producción agrícola, se inician los cultivos hortofrutícolas.",
    icon: Sprout,
    highlight: true,
  },
  {
    year: "2016",
    title: "Control Labores Campo",
    description: "Control director de labores en Riopaila, mejorando eficiencia y minimizando riesgos. Distrito de Riego \"RIOCAL\" Fase I, Incremento de 45% en eficiencia de aplicación y conducción de riego.",
    icon: Droplets,
    highlight: false,
  },
  {
    year: "2017",
    title: "Infraestructura de Riego",
    description: "\"RIOCAL\" fase II.",
    icon: Droplets,
    highlight: true,
  },
  {
    year: "2018",
    title: "Proyectos Inmobiliarios",
    description: "Se crea como una oportunidad de generar valor en el área de influencia, en poblados y vías principales.",
    icon: Building2,
    highlight: false,
  },
  {
    year: "2019",
    title: "Caña Orgánica",
    description: "Inicia Siembra de caña orgánica, el comercio de productos derivados de cultivos orgánicos, crece a una tasa del 20% anual.",
    icon: Leaf,
    highlight: true,
  }
]

// --- COMPONENTE DE ÍTEM INDIVIDUAL ---
function TimelineItem({ event, index }: { event: any, index: number }) {
  const isLeft = index % 2 === 0
  
  return (
    <div className="relative mb-24 md:mb-40 last:mb-0">
      <div className={`flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} w-full`}>
        
        {/* LADO DEL CONTENIDO */}
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`w-full md:w-[45%] ${isLeft ? "md:text-right" : "md:text-left"}`}
        >
          {/* Cabecera del Hito */}
          <div className={`flex items-center gap-4 mb-4 ${isLeft ? "md:flex-row-reverse justify-end" : "md:flex-row justify-start"}`}>
            
            <div className={`flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg text-white transform transition-transform duration-300 hover:scale-110 ${
                event.highlight ? "bg-red-800" : "bg-red-600"
            }`}>
              <event.icon size={26} />
            </div>

            <h3 className="text-3xl md:text-5xl font-black text-red-800 tracking-tighter leading-none">
              {event.year}
            </h3>
          </div>

          {/* Tarjeta de Texto */}
          <div className="relative">
             <div className={`hidden md:block absolute top-0 w-10 h-[2px] bg-red-300 ${isLeft ? "right-0" : "left-0"}`} />
             
             <h4 className="text-xl md:text-2xl font-bold text-red-700 mb-3 pt-4">{event.title}</h4>
             <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
               {event.description}
             </p>
          </div>
        </motion.div>

        {/* ESPACIO CENTRAL (Línea y Punto) */}
        <div className="relative w-full md:w-[10%] h-16 md:h-auto flex items-center justify-center my-4 md:my-0">
           <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-4 shadow-md z-20 relative ${
               event.highlight 
               ? "bg-red-600 border-white ring-4 ring-red-600/20" 
               : "bg-white border-red-800"
             }`}
           />
        </div>

        {/* LADO VACÍO (Equilibrio visual) */}
        <div className="hidden md:block w-[45%]" />
        
      </div>
    </div>
  )
}

// --- PÁGINA PRINCIPAL ---
export default function HistoriaPage() {
  const timelineRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  })

  return (
    // FUENTE TAHOMA FORZADA EN TODO EL COMPONENTE
    <div className="relative space-y-24 md:space-y-32 bg-[#fafbfc] font-[Tahoma,Verdana,sans-serif]">
      
      {/* HEADER DE LA SECCIÓN */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto pt-20 px-6"
      >
        <div className="inline-block px-4 py-1.5 bg-red-800/5 text-red-800 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-red-800/10">
          Trayectoria Corporativa
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-red-800 mb-6 tracking-tighter leading-none">
          Nuestra <span className="relative inline-block">
            Evolución
            <span className="absolute bottom-2 left-0 w-full h-3 bg-red-500/20 -z-10 rounded-full"></span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          Más de un siglo transformando la tierra. De ingenios individuales a un sólido grupo agroindustrial comprometido con la innovación y el futuro de Colombia.
        </p>
        
        <div className="mt-16 flex justify-center opacity-50">
          <ArrowDownCircle size={32} className="animate-bounce text-red-600" />
        </div>
      </motion.section>

      {/* TIMELINE CONTAINER */}
      <section ref={timelineRef} className="relative max-w-7xl mx-auto px-6 pb-20">
        
        {/* LÍNEA DE FONDO (Gris) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full hidden md:block" />
        
        {/* LÍNEA DE PROGRESO (Gradiente Rojo animado) */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-red-800 via-red-600 to-red-400 z-0 shadow-[0_0_15px_rgba(220,38,38,0.4)] hidden md:block"
        >
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </motion.div>

        {/* ITEMS DEL TIMELINE */}
        <div className="relative z-10 pt-10">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* FOOTER QUOTE */}
      <div className="px-6 pb-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative max-w-5xl mx-auto py-24 px-8 md:px-20 rounded-[3rem] bg-red-900 text-white overflow-hidden text-center"
        >
          {/* Texturas de fondo */}
          <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-500/20 rounded-full blur-[100px]"></div>
          
          <Quote className="mx-auto w-12 h-12 text-red-300 mb-8 opacity-80" />
          
          <h2 className="relative z-10 text-2xl md:text-3xl font-serif italic leading-relaxed mb-10 text-white/90">
            "Cultivamos la tierra, por un mundo mejor."
          </h2>
          
          <div className="w-16 h-1 bg-red-400 mx-auto mb-6 rounded-full" />
          
          <div className="relative z-10">
            <p className="font-bold tracking-widest text-xs uppercase text-white/80">Propósito Superior</p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}