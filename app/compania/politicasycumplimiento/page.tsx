"use client"

import { motion } from "framer-motion"
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  AlertTriangle, 
  Zap,
  CheckCircle2,
  ExternalLink 
} from "lucide-react"

// --- DATOS EXACTOS DE LA TABLA DE ARCHIVOS ---
const politicasFiles = [
  {
    title: "Política de Conflicto de Interés",
    fileName: "politicasycumplimientos/GNE1-PO04.pdf",
    icon: FileText,
    theme: "slate"
  },
  {
    title: "Prevención Lavado de Activos y Financiación del Terrorismo",
    fileName: "politicasycumplimientos/PO-FOF-001-PREVENCION-LAVADO-DE-ACTIVOS-Y-FINANCIACION-DEL-TERRRORISMO-1.pdf",
    icon: ShieldCheck,
    theme: "red" // <- Cambiado a rojo
  },
  {
    title: "Certificado de Nombramiento Oficial de Cumplimiento",
    fileName: "politicasycumplimientos/Certificado-Nombramiento-Oficial-de-Cumplimiento-Castilla.pdf",
    icon: ShieldCheck,
    theme: "slate"
  },
  {
    title: "Política de Tratamiento de Datos Personales",
    fileName: "politicasycumplimientos/PO-DNE-003-TRATAMIENTO-DATOS-PERSONALES-CASTILLA.pdf",
    icon: Lock,
    theme: "slate"
  },
  {
    title: "Código de Ética y Conducta Empresarial",
    fileName: "politicasycumplimientos/PO-BEC-001-CODIGO-DE-ETICA-Y-CONDUCTA-EMPRESARIAL-CAST.pdf",
    icon: FileText,
    theme: "red" // <- Cambiado a rojo
  }
]

export default function PoliticasCumplimientoPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 font-[Tahoma,Verdana,sans-serif]">
      
      {/* HEADER */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-20 px-6 text-center max-w-4xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-red-100 rounded-full mb-8 shadow-sm">
          <Zap size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-red-800 uppercase">Documentación Oficial</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[#1a2b3c] mb-4 tracking-tight">
          Políticas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600">Cumplimiento</span>
        </h1>
        <p className="text-slate-500 text-lg">
          Acceda y lea los lineamientos éticos y normativos que rigen nuestra operación corporativa.
        </p>
      </motion.section>

      {/* GRID DE ARCHIVOS (CELDAS) */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {politicasFiles.map((file, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl border-2 border-slate-100 shadow-sm hover:border-red-800 transition-all group flex flex-col min-h-[220px]"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 mb-6 ${file.theme === 'red' ? 'text-red-700' : 'text-slate-400'} group-hover:scale-110 transition-transform`}>
              <file.icon size={24} />
            </div>
            
            <h3 className="text-lg font-bold text-[#1a2b3c] mb-6 flex-grow leading-snug">
              {file.title}
            </h3>
            
            {/* --- BOTÓN ÚNICO DE VISUALIZACIÓN --- */}
            <div className="w-full mt-auto">
              <a 
                href={`/docs/${file.fileName}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-red-50 text-red-800 text-[11px] font-bold hover:bg-red-800 hover:text-white transition-colors group/btn"
                title="Abrir en pestaña nueva"
              >
                <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" /> VER DOCUMENTO
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* SECCIÓN INFORMATIVA FINAL */}
      <section className="max-w-5xl mx-auto px-6 mt-24">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-red-900 text-white shadow-2xl p-12 md:p-16"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6">Compromiso con la Transparencia</h2>
              <p className="text-white/90 leading-relaxed mb-8 font-light">
                Mantenemos altos estándares de integridad. Si desea reportar alguna irregularidad, puede hacerlo a través de nuestro Canal de Denuncias oficial.
              </p>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/20 w-fit">
                <CheckCircle2 size={16} className="text-yellow-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Sagrilaft / PTEE Activo</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 flex items-center justify-center">
               <ShieldCheck size={80} className="opacity-20 absolute" />
               <p className="text-center italic font-light opacity-90">
                "La ética empresarial es el cimiento de nuestra sostenibilidad en el campo colombiano."
               </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}