"use client"

import { motion } from "framer-motion"
import { Users, Gavel, Building2, Shield, Eye, Scale, FileText, Zap, ClipboardList } from "lucide-react"

// --- 1. DATOS DEL EJE CENTRAL (Las 5 tarjetas principales) ---
const mainOrgData = {
  asamblea: { title: "Asamblea General", role: "Máxima Autoridad", icon: Users, theme: "gold" },
  revisoria: { title: "Revisoría Fiscal", role: "Control Independiente", icon: Shield, theme: "slate" },
  junta: { title: "Junta Directiva", role: "Dirección Estratégica", icon: Gavel, theme: "redDark" },
  auditoria: { title: "Comité de Auditoría", role: "Control y Riesgos", icon: ClipboardList, theme: "slate" },
  gerenteGral: { title: "Gerente General", role: "Gustavo A. Barona", icon: Building2, theme: "redMain" },
}

// --- 2. DATOS DE SOPORTE (Solo Nombres) ---
const supportCommittees = [
  "Secretaría de Juntas",
  "Auditor Interno",
  "Comité Cañicultura",
  "Comité de Sostenibilidad",
  "Comité Inmobiliario",
]

// --- 3. TARJETA PRINCIPAL (Escala Reducida) ---
const OrgCard = ({ data, delay, className = "" }: { data: any, delay: number, className?: string }) => {
  // Temas de color actualizados a la nueva paleta
  const themes = {
    gold: "border-[3px] border-yellow-400 shadow-[0_4px_15px_rgb(250,204,21,0.15)] text-yellow-600",
    redDark: "border-[3px] border-red-800 shadow-[0_4px_15px_rgb(153,27,27,0.15)] text-red-800",
    redMain: "border-[3px] border-red-600 shadow-[0_4px_15px_rgb(220,38,38,0.15)] text-red-600",
    slate: "border-[2px] border-slate-300 shadow-sm text-slate-600 bg-slate-50/50"
  }

  const colorTheme = themes[data.theme as keyof typeof themes];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className={`relative z-20 flex flex-col items-center justify-start pt-5 pb-4 px-3 w-[180px] md:w-[200px] min-h-[110px] bg-white rounded-xl group cursor-default ${colorTheme} ${className}`}
    >
      {/* Icono más pequeño */}
      <div className={`w-10 h-10 flex items-center justify-center rounded-lg mb-3 bg-white shadow-sm group-hover:scale-105 transition-transform`}>
        <data.icon size={20} className="currentColor" />
      </div>
      
      {/* Título y Subtítulo más pequeños */}
      <h3 className="text-[13px] font-black text-[#1a2b3c] text-center leading-tight w-full px-1">
        {data.title}
      </h3>
      {data.role && (
        <span className="text-[10px] font-bold text-slate-500 text-center w-full block mt-1.5 uppercase tracking-wider">
          {data.role}
        </span>
      )}
    </motion.div>
  )
}

// --- 4. MINI-TARJETA DE SOPORTE (Solo Nombre) ---
const MiniOrgCard = ({ title, delay }: { title: string, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      whileHover={{ y: -2, borderColor: '#94a3b8' }}
      className="bg-white border-2 border-slate-200 rounded-lg py-3 px-4 flex items-center justify-center text-center shadow-sm cursor-default transition-colors"
    >
      <span className="text-[12px] font-bold text-slate-700 leading-tight">{title}</span>
    </motion.div>
  )
}

// --- 5. LÍNEAS ANIMADAS (Actualizadas a rojo) ---
const GrowLineVertical = ({ height = "h-10", delay }: { height?: string, delay: number }) => (
  <div className={`w-[2px] ${height} bg-red-100 relative mx-auto z-0`}>
    <motion.div 
      initial={{ scaleY: 0 }} 
      whileInView={{ scaleY: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5, delay, ease: "easeInOut" }} 
      className="w-full h-full bg-red-800 origin-top" 
    />
  </div>
)

const GrowLineHorizontal = ({ width = "w-[420px]", delay }: { width?: string, delay: number }) => (
  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${width} h-[2px] bg-red-100 z-0`}>
    <motion.div 
      initial={{ scaleX: 0 }} 
      whileInView={{ scaleX: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6, delay, ease: "easeInOut" }} 
      className="w-full h-full bg-red-800 origin-center" 
    />
  </div>
)

export default function GobiernoCorporativoPage() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden font-[Tahoma,Verdana,sans-serif] selection:bg-yellow-400 selection:text-black">
      
      {/* ================= HEADER ================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-16 px-6 text-center max-w-4xl mx-auto mb-10"
      >
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-red-100 rounded-full mb-6 shadow-sm">
            <Zap size={12} className="text-yellow-500 fill-yellow-500" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-red-800 uppercase">Estructura Oficial</span>
         </div>
         <h1 className="text-3xl md:text-5xl font-black text-[#1a2b3c] mb-4 leading-tight tracking-tight">
            Gobierno <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600">Corporativo</span>
         </h1>
      </motion.section>

      {/* ================= 1. ORGANIGRAMA CENTRAL (Compacto) ================= */}
      <section className="w-full overflow-x-auto pb-10 px-4">
        <div className="min-w-[650px] max-w-4xl mx-auto flex flex-col items-center relative">

          {/* NIVEL 1: ASAMBLEA */}
          <OrgCard data={mainOrgData.asamblea} delay={0.1} />
          <GrowLineVertical height="h-8" delay={0.3} />

          {/* NIVEL 2: CONTROLES Y JUNTA */}
          <div className="relative w-full flex justify-center items-center py-3">
             <GrowLineHorizontal width="w-[450px]" delay={0.5} />

             <div className="flex items-center gap-4 z-10">
                <OrgCard data={mainOrgData.revisoria} delay={0.7} />
                <OrgCard data={mainOrgData.junta} delay={0.5} />
                <OrgCard data={mainOrgData.auditoria} delay={0.7} />
             </div>
          </div>

          <GrowLineVertical height="h-10" delay={0.9} />

          {/* NIVEL 3: GERENCIA GENERAL */}
          <OrgCard data={mainOrgData.gerenteGral} delay={1.1} />

        </div>
      </section>

      {/* ================= 2. ESTRUCTURA DE SOPORTE (Mini Tarjetas) ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
        <div className="text-center mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Órganos de Soporte y Gestión</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
            {supportCommittees.map((name, i) => (
                <MiniOrgCard key={i} title={name} delay={1.3 + (i * 0.1)} />
            ))}
        </div>
      </section>

      {/* ================= 3. PRINCIPIOS FLOTANTES ================= */}
      <section className="py-20 bg-white relative z-10 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-[#1a2b3c]">Pilares de Acción</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { icon: Eye, title: "Transparencia", color: "bg-blue-50 text-blue-600" },
              { icon: Scale, title: "Equidad", color: "bg-amber-50 text-amber-600" },
              { icon: Shield, title: "Integridad", color: "bg-rose-50 text-rose-600" },
              { icon: FileText, title: "Responsabilidad", color: "bg-purple-50 text-purple-600" }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
                className="p-6 rounded-[1.5rem] border border-slate-100 bg-white text-center group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 ${p.color}`}>
                   <p.icon size={24} />
                </div>
                {/* Texto hover cambiado a rojo oscuro */}
                <h3 className="font-bold text-[#1a2b3c] text-base group-hover:text-red-800 transition-colors">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}