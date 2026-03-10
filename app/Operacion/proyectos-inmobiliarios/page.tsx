"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, Home, TrendingUp, CheckCircle, CircleDollarSign } from "lucide-react"

export default function ProyectosInmobiliariosPage() {
  return (
    <div className="space-y-16 pb-10" style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}>
      
      {/* ================= HERO SECTION ================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[450px] rounded-[2rem] overflow-hidden flex items-center justify-center text-center shadow-2xl"
      >
        <img 
          src="/Imagenes/Exportado 2.jpg" 
          alt="Terrenos y Proyectos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* 👇 Degradado forzado para evitar errores visuales 👇 */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(127,29,29,0.95))' }} 
        />
        
        <div className="relative z-10 text-white px-6">
          <motion.span 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-yellow-400 text-red-900 px-4 py-1 rounded-md text-xs font-bold mb-4 uppercase tracking-widest"
          >
            Programas Especiales
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight not-italic">
            Proyectos Inmobiliarios
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Hitos y gestión administrativa 2025: Desarrollando el territorio, generando vivienda propia y fortaleciendo el balance financiero.
          </p>
        </div>
      </motion.section>

      {/* ================= RESULTADOS FINANCIEROS (BANNER) ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // 👇 Fondo forzado con estilo en línea para que aparezca SÍ o SÍ 👇
        style={{ background: 'linear-gradient(to right, #7f1d1d, #b91c1c)' }}
        className="p-8 md:p-12 rounded-[2.5rem] shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-8 mx-2"
      >
        <div className="max-w-md">
          <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <TrendingUp size={14} /> Balance 2025
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-2">Sector Constructor</h2>
          <p className="text-white/80 leading-relaxed text-sm">
            Los logros regionales contribuyeron a un balance financiero altamente positivo al finalizar el periodo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase font-black text-yellow-400 tracking-widest mb-1">Ingreso Bruto</p>
            <p className="text-4xl md:text-5xl font-black">$12.539 <span className="text-lg font-normal opacity-80">M</span></p>
          </div>
          <div className="hidden sm:block w-px bg-white/20" />
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase font-black text-yellow-400 tracking-widest mb-1">Utilidad</p>
            <p className="text-4xl md:text-5xl font-black">$10.416 <span className="text-lg font-normal opacity-80">M</span></p>
          </div>
        </div>
      </motion.div>

      {/* ================= CONTENIDO PRINCIPAL: GRID 2x2 ================= */}
      <div className="grid md:grid-cols-2 gap-8 px-2">
        
        {/* TARJETA 1: Puerto Tejada */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group flex flex-col p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-red-600/30 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="w-16 h-16 bg-red-50 group-hover:bg-red-600 rounded-2xl flex items-center justify-center transition-colors duration-300">
              <Home className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
            </div>
            <span className="bg-yellow-400/20 text-red-900 text-xs font-black uppercase px-4 py-1.5 rounded-full border border-yellow-400/30">
              Avance 24.8%
            </span>
          </div>
          <h3 className="text-3xl font-bold text-red-800 mb-4 tracking-tight">Puerto Tejada</h3>
          <p className="text-gray-500 text-lg leading-relaxed flex-1">
            El proyecto de vivienda <strong>"Ciudad Amiga Hogares Felices"</strong> se materializó para <strong>518 familias</strong> que lograron adquirir su vivienda propia durante el 2025.
          </p>
        </motion.div>

        {/* TARJETA 2: Miranda */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group flex flex-col p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-red-600/30 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="w-16 h-16 bg-red-50 group-hover:bg-red-600 rounded-2xl flex items-center justify-center transition-colors duration-300">
              <CircleDollarSign className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
            </div>
            <span className="bg-gray-100 text-gray-500 text-xs font-black uppercase px-4 py-1.5 rounded-full border border-gray-200">
              Venta de Tierras
            </span>
          </div>
          <h3 className="text-3xl font-bold text-red-800 mb-4 tracking-tight">Miranda</h3>
          <p className="text-gray-500 text-lg leading-relaxed flex-1">
            Se concretó la venta de <strong>18,27 hectáreas brutas</strong> de la hacienda Reporter al Grupo Empresarial Falcon Zomac S.A.S. Esta operación se realizó por un valor de <strong>$9.050 millones de pesos</strong>.
          </p>
        </motion.div>

        {/* TARJETA 3: Florida */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group flex flex-col p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-red-600/30 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="w-16 h-16 bg-red-50 group-hover:bg-red-600 rounded-2xl flex items-center justify-center transition-colors duration-300">
              <Building2 className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
            </div>
            <span className="bg-blue-50 text-blue-600 text-[10px] font-black uppercase px-4 py-1.5 rounded-full border border-blue-100 text-center leading-tight">
              San Antonio de <br />los Caballeros
            </span>
          </div>
          <h3 className="text-3xl font-bold text-red-800 mb-4 tracking-tight">Florida</h3>
          <p className="text-gray-500 text-lg leading-relaxed flex-1">
            Comercialización de 10 lotes en la urbanización <strong>La Molienda</strong>, beneficiando a nuestros trabajadores. Se logró la escrituración de 2 predios en 2025, proyectando finalizar los 8 restantes en 2026.
          </p>
        </motion.div>

        {/* TARJETA 4: ESPACIO PARA IMAGEN */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          // 👇 Fondo rojo forzado para que el texto se lea aunque la imagen no cargue 👇
          style={{ backgroundColor: '#7f1d1d' }}
          className="relative group h-full min-h-[350px] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          <img 
            src="/Imagenes/proyecto-inmobiliario.png" 
            alt="Vista de Proyectos Inmobiliarios"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center gap-3 text-white">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                <MapPin className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight text-white">Desarrollo Regional</p>
                <p className="text-xs text-white/70 uppercase tracking-widest font-bold mt-1">Impacto Positivo</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ================= FOOTER DE SECCIÓN ================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="pt-8 border-t border-gray-100 flex items-start md:items-center gap-4 px-4"
      >
        <CheckCircle className="text-red-600 w-6 h-6 shrink-0 mt-1 md:mt-0" />
        <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed">
          Todos los proyectos son desarrollados bajo la normativa vigente de ordenamiento territorial, priorizando el bienestar de nuestros colaboradores y la comunidad.
        </p>
      </motion.div>
    </div>
  )
}