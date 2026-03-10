"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Building2, History, Users2, Sparkles } from "lucide-react"
import Link from "next/link"

// Aquí definimos los datos de las 3 tarjetas principales.
// Ajusté los colores usando códigos Hexadecimales exactos para garantizar 
// que no se vean deslavados o pálidos, sino con un contraste fuerte y elegante.
const quickLinks = [
  {
    icon: Building2,
    title: "Quiénes Somos",
    description: "Conoce nuestra misión, visión y valores que nos definen como empresa líder.",
    href: "/compania/quienes-somos",
    color: "from-[#004a29] to-[#006437]", // Verde muy oscuro a verde corporativo
  },
  {
    icon: History,
    title: "Historia y Evolución",
    description: "Más de 70 años de trayectoria transformando con pasión el campo colombiano.",
    href: "/compania/historia",
    color: "from-[#006437] to-[#048450]", // Verde corporativo a verde esmeralda
  },
  {
    icon: Users2,
    title: "Gobierno Corporativo",
    description: "Estructura organizacional basada en la transparencia, ética y responsabilidad.",
    href: "/compania/gobierno-corporate", // Ojo: Verifica que esta ruta sea la correcta en tus carpetas
    color: "from-[#048450] to-[#a3c74a]", // Verde esmeralda al verde/amarillo de la marca
  },
]

// Este es el componente que dibuja cada tarjeta. 
// Tiene un efecto 3D (Tilt) súper moderno que reacciona al movimiento del mouse.
function InteractiveCard({ link, index, isInView }: any) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Estas variables matemáticas calculan la posición del mouse para inclinar la tarjeta
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  // Usamos "resortes" (springs) para que la inclinación sea suave y no tiemble
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  // Transformamos la posición del mouse en grados de rotación (máximo 7 grados para que sea sutil)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  // Esta función atrapa el mouse cuando pasa por encima de la tarjeta
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (rect) {
      x.set((e.clientX - rect.left) / rect.width - 0.5)
      y.set((e.clientY - rect.top) / rect.height - 0.5)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      // Cuando el mouse sale, la tarjeta vuelve a su posición original plana (0 grados)
      onMouseLeave={() => { x.set(0); y.set(0) }}
      // Animación de entrada: sube y aparece
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      // Aplicamos la transformación 3D calculada arriba
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <Link href={link.href} className="group relative block h-full">
        {/* El cuerpo de la tarjeta blanca con sombra suave */}
        <div className="relative h-full bg-white border border-gray-100 rounded-[2.5rem] p-10 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] group-hover:border-[#006437]/20">
          
          {/* El círculo gigante que está escondido en la esquina y crece al hacer hover */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-gray-50 rounded-full transition-all duration-700 group-hover:scale-[3] group-hover:bg-[#f1f8e9] z-0" />

          <div className="relative z-10">
            {/* El cuadrito que contiene el ícono. Flota constantemente arriba y abajo */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`w-20 h-20 bg-gradient-to-br ${link.color} rounded-[2rem] flex items-center justify-center mb-8 shadow-xl group-hover:rotate-[10deg] transition-transform duration-500`}
            >
              <link.icon className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-2xl font-black text-[#004a29] mb-4 group-hover:text-[#006437] transition-colors tracking-tight">
              {link.title}
            </h3>
            
            <p className="text-gray-500 mb-8 leading-relaxed font-medium">
              {link.description}
            </p>

            {/* El botón de "Explorar" con su flechita */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-[#004a29] uppercase tracking-widest group-hover:text-[#a3c74a] transition-colors">
                Explorar
              </span>
              <div className="relative flex items-center">
                <motion.div
                  // La flecha se mueve a la derecha un poquito todo el tiempo
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5 text-[#006437] group-hover:text-[#a3c74a] transition-colors" />
                </motion.div>
                {/* La línea amarilla que se dibuja por debajo al pasar el mouse */}
                <div className="absolute -bottom-1 left-0 h-[2px] bg-[#a3c74a] w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Unas estrellitas decorativas abstractas en la esquina inferior derecha */}
          <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-20 transition-opacity">
            <Sparkles size={60} className="text-[#004a29]" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// === EL COMPONENTE PRINCIPAL QUE AGRUPA TODO ===
export function QuickLinksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    // Forzamos Tahoma y damos un padding extra abajo (pb-40) por si hay widgets flotantes de chat
    <section ref={ref} className="py-32 pb-40 bg-[#fafbfc] relative overflow-hidden font-[Tahoma,Verdana,sans-serif]">
      {/* Un degradado sutil arriba para que se mezcle bien con la sección anterior */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* --- EL ENCABEZADO CORREGIDO --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="max-w-3xl mb-20"
        >
          <span className="inline-block px-4 py-1 bg-[#006437]/10 text-[#006437] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            Nuestra Compañía
          </span>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#004a29] mb-6 tracking-tighter">
            Descubre el corazón de <br />
            {/* ¡AQUÍ ESTÁ LA MAGIA DEL TEXTO!
               Cambiamos el degradado. Empieza en verde oscuro (#006437) y termina en el verde claro (#a3c74a).
               Así nunca se va a perder contra el fondo blanco.
            */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006437] to-[#a3c74a]">
              Castilla Agrícola
            </span>
          </h2>
          
          {/* Pequeño separador amarillo debajo del título */}
          <div className="w-20 h-1.5 bg-[#a3c74a] rounded-full mb-8" />
          
          <p className="text-xl text-gray-500 font-medium">
            Siete décadas de compromiso con la tierra y su gente.
          </p>
        </motion.div>

        {/* --- EL GRID DE LAS TARJETAS --- */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Recorremos nuestra lista de links y dibujamos una tarjeta por cada uno */}
          {quickLinks.map((link, index) => (
            <InteractiveCard 
              key={link.title} 
              link={link} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}