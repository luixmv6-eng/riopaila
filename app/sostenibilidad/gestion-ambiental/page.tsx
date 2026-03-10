"use client"

import { motion, Variants } from "framer-motion"
import { Leaf, Droplets, Wind, BarChart3, Factory, Bug, Trees, ShieldCheck, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

/* --------------------------------------------------------------------------
   ANIMACIONES
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const accionesClaves = [
  "Evaluar y formular proyectos de sistemas de riego que utilicen energías renovables",
  "Aumentar el número de sistemas de riego eficiente",
  "Continuar con la participación activa en las diferentes asociaciones de los ríos",
  "Aumentar las áreas forestales en predios propios",
  "Aumentar el área de adecuación con labranza reducida"
]

export default function GestionAmbiental() {
  return (
    <motion.div
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-16 pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* ================= SECCIÓN 1: HEADER ================= */}
      <motion.div variants={itemVariants} className="relative px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-red-600" />
          <span className="text-red-600 font-bold text-xs uppercase tracking-[0.3em]">
            Comprometidos con el Medio Ambiente
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-red-800 tracking-tight not-italic">
          Gestión Ambiental
        </h1>
        
        <p className="text-gray-600 mt-6 text-lg md:text-xl leading-relaxed max-w-4xl font-normal">
          El fortalecimiento de una cultura de preservación hace parte de nuestra filosofía empresarial. Propiciamos la participación e implementación de acciones que contribuyen a mitigar el cambio climático y los impactos ambientales.
        </p>
      </motion.div>

      {/* ================= EJE 1: GESTIÓN HÍDRICA (DASHBOARD) ================= */}
      <motion.div 
        variants={itemVariants}
        className="group relative bg-white rounded-[3rem] p-1 md:p-2 shadow-[0_30px_60px_-15px_rgba(153,27,27,0.05)] border border-gray-100 overflow-hidden max-w-7xl mx-auto mx-4"
      >
        <div className="bg-red-50/30 rounded-[2.8rem] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Información y Barras de Progreso */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-blue-100">
                <Droplets size={16} className="animate-pulse" /> Elemento Esencial de Vida
              </div>
              <h3 className="text-red-800 font-bold text-3xl tracking-tight mb-3">Gestión del Recurso Hídrico</h3>
              <p className="text-gray-600 leading-relaxed font-normal">
                Implementamos sistemas de riego más eficientes y herramientas de programación basadas en balance hídrico. Además, apoyamos el cuidado de las cuencas de los <strong>ríos Bugalagrande y La Paila</strong> a través de ASORIBU y AURPA.
              </p>
            </div>

            {/* BARRAS DE DATOS ANIMADAS */}
            <div className="space-y-6">
              {/* Barra 1: Riego Tecnificado */}
              <div>
                <div className="flex justify-between text-sm font-bold text-red-800 mb-2">
                  <span>Riego por Ventanas (Eficiencia)</span>
                  <span className="text-blue-600">+10%</span>
                </div>
                <div className="h-3 w-full bg-blue-100 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                  />
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase mt-2 tracking-wider">Incremento de área cubierta, reduciendo riego por sifones.</p>
              </div>

              {/* Barra 2: Consumo Específico */}
              <div>
                <div className="flex justify-between text-sm font-bold text-red-800 mb-2">
                  <span>Meta Consumo Específico</span>
                  <span className="text-red-600">1.070 m³/Ha</span>
                </div>
                <div className="h-3 w-full bg-red-100 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-[100%] bg-gray-200" />
                  <motion.div 
                    initial={{ width: "100%" }}
                    whileInView={{ width: "85%" }} 
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-red-500 rounded-r-full"
                  />
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase mt-2 tracking-wider">Compromiso continuo de reducción de huella hídrica.</p>
              </div>
            </div>
          </div>
          
          {/* Tarjetas Visuales (Derecha) */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="text-3xl md:text-4xl font-black text-red-800 mb-1">1.070</p>
                <p className="text-xs uppercase font-bold text-gray-400 tracking-widest mt-1">m³ por Hectárea (Meta)</p>
              </div>
              <BarChart3 size={40} className="text-red-200" />
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-r from-red-900 to-red-800 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group flex items-center justify-between"
            >
              <div className="relative z-10">
                <p className="text-2xl font-black text-white mb-1">Cuidado de Cuencas</p>
                <p className="text-xs font-bold text-white/70 mt-1 max-w-[200px] leading-relaxed">
                  Proyectos de conservación y protección del agua con asociaciones.
                </p>
              </div>
              <ShieldCheck size={48} className="text-yellow-400 relative z-10" />
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-colors" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= EJES 2 y 3: TARJETAS INTERACTIVAS ================= */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        
        {/* EJE 2: Cambio Climático */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="group relative flex flex-col justify-between gap-6 p-10 bg-white rounded-[3rem] border border-gray-100 hover:border-red-300 transition-all shadow-sm hover:shadow-xl overflow-hidden"
        >
          <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
             <Factory size={250} />
          </div>

          <div className="relative z-10">
            <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white`}>
              <Wind size={32} />
            </div>
            <h4 className="font-bold text-2xl text-red-800 mb-3">Mitigación y Cambio Climático</h4>
            <p className="text-gray-600 font-normal leading-relaxed mb-6">
              Entendemos que somos pieza importante para la mitigación. Realizamos la primera medición de nuestras emisiones de <strong>Gases Efecto Invernadero (GEI)</strong>.
            </p>
            
            {/* Box Destacado: O2 y CO2 */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-2xl border border-green-100 shadow-sm flex items-center gap-4">
                <div className="bg-green-100 text-green-700 p-3 rounded-xl"><Leaf size={24} /></div>
                <div>
                  <p className="text-2xl font-black text-green-700">390 Mil <span className="text-sm">ton aprox.</span></p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">O₂ Liberado</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-4">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-xl"><Cloud size={24} /></div>
                <div>
                  <p className="text-2xl font-black text-blue-700">557 Mil <span className="text-sm">ton aprox.</span></p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">CO₂ Capturado</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* EJE 3: Biodiversidad y Control Biológico */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="group relative flex flex-col justify-between gap-6 p-10 bg-white rounded-[3rem] border border-gray-100 hover:border-red-300 transition-all shadow-sm hover:shadow-xl overflow-hidden"
        >
          <div>
            <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-800 group-hover:text-white`}>
              <Bug size={32} />
            </div>
            <h4 className="font-bold text-2xl text-red-800 mb-3">Control y Corredores Biológicos</h4>
            <p className="text-gray-600 font-normal leading-relaxed mb-6">
              Estrategia sectorial con <strong>cero aplicaciones de insecticidas</strong>. Mantenemos el equilibrio del ecosistema mediante fauna benéfica y vegetación natural.
            </p>
            
            {/* Métricas Control Biológico */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50/50 p-4 rounded-2xl border border-red-100">
                <p className="text-2xl font-black text-red-700">1.1%</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Infestación Diatraea (Menor al 5% límite)</p>
              </div>
              <div className="bg-red-50/50 p-4 rounded-2xl border border-red-100">
                <p className="text-2xl font-black text-red-700">211</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Hectáreas de Área Forestal Conservada</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-800 bg-red-50 px-4 py-2 rounded-xl">
              <Trees size={16} /> Contribuyendo al equilibrio del entorno.
            </div>
          </div>
        </motion.div>

      </div>

      {/* ================= SECCIÓN: ACCIONES CLAVES (Basado en la Infografía) ================= */}
      <motion.div 
        variants={itemVariants}
        className="max-w-7xl mx-auto px-4 pt-10"
      >
        <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-gray-100 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent opacity-50 pointer-events-none" />
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-red-800 mb-4">Acciones Claves para la Mitigación</h3>
            <p className="text-gray-500 font-medium">Iniciativas estratégicas para reducir el impacto ambiental</p>
          </div>

          <div className="grid gap-4 md:gap-6 max-w-4xl mx-auto relative z-10">
            {accionesClaves.map((accion, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-red-200"
              >
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-800 font-black text-xl flex items-center justify-center shrink-0 border-2 border-white shadow-inner">
                  {i + 1}
                </div>
                <p className="text-gray-700 font-medium md:text-lg leading-snug">
                  {accion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* PIE DE SECCIÓN: REPORTE */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col md:flex-row items-center justify-between p-8 bg-red-900 rounded-[2rem] max-w-7xl mx-auto mx-4 shadow-xl"
      >
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-sm">
            <Leaf className="text-yellow-400" size={24} />
          </div>
          <p className="text-sm font-bold text-white italic">Cultivando acciones para el futuro en el 2024 y más allá.</p>
        </div>
        
        <Link 
          href="/sostenibilidad/informes" 
          className="flex items-center gap-2 bg-white text-red-900 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors"
        >
          Ver Informe Completo <ArrowRight size={14} />
        </Link>
      </motion.div>
    </motion.div>
  )
}

// Icono extra 
function Cloud(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>
  )
}