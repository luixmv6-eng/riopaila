"use client"

import { FileText, Download } from "lucide-react"
import { motion, Variants } from "framer-motion"

// Definimos los documentos y sus nombres de archivo reales
const documentos = [
  { 
    nombre: "Reglamento Interno de Trabajo", 
    file: "reglamento-trabajo.pdf" 
  },
  { 
    nombre: "Política de Tratamiento de Datos", 
    file: "datos-personales.pdf" 
  },
  { 
    nombre: "Código de Ética y Conducta", 
    file: "codigo-etica.pdf" 
  },
]

// Variantes para la animación de entrada
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }, // Entrada fluida uno tras otro
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function PoliticasPage() {
  return (
    <motion.div 
      // 👇 Aquí se fuerza el uso de Tahoma para todo este componente
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Encabezado animado */}
      <motion.div variants={itemVariants}>
        {/* 👇 Título sin inclinación (not-italic) 👇 */}
        <h1 className="text-4xl font-extrabold text-[#006437] not-italic tracking-tight">
          Reglamento y Políticas
        </h1>
        <p className="text-gray-500 mt-2 text-lg max-w-2xl">
          Consulte los lineamientos normativos y compromisos éticos que rigen nuestra operación y relación con los grupos de interés.
        </p>
      </motion.div>

      {/* Grid de Documentos */}
      <div className="grid gap-4 md:grid-cols-2">
        {documentos.map((doc, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center justify-between p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all group"
          >
            <div className="flex items-center space-x-5">
              {/* Icono de PDF */}
              <div className="p-4 bg-red-50 text-red-600 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <FileText size={24} />
              </div>
              <span className="font-bold text-[#006437] leading-tight">
                {doc.nombre}
              </span>
            </div>

            {/* Botón de descarga dinámico */}
            <a 
              href={`/documentos/politicas/${doc.file}`} 
              download={doc.file}
              className="p-3 bg-[#f1f8e9] hover:bg-[#a3c74a] text-[#006437] rounded-full transition-all duration-300"
              title="Descargar documento"
            >
              <Download size={22} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Caja de ayuda */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 p-8 bg-[#006437] rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 className="text-xl font-bold">¿Necesita más información?</h3>
          <p className="text-white/70 text-sm">Nuestro equipo de cumplimiento está disponible para resolver sus dudas.</p>
        </div>
        <button className="bg-[#a3c74a] text-[#006437] px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-colors">
          Contactar Soporte
        </button>
      </motion.div>
    </motion.div>
  )
}