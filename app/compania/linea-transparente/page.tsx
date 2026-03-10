"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  ExternalLink 
} from "lucide-react"

// --- COMPONENTE: Tarjeta Estándar (Actualizado a paleta roja) ---
const DataCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden mb-8">
    {/* Fondo de la cabecera cambiado a rojo muy claro */}
    <div className="bg-red-50/50 px-8 py-5 border-b border-gray-100">
      <h3 className="text-red-800 font-bold text-sm uppercase tracking-widest">{title}</h3>
    </div>
    <div className="p-8">{children}</div>
  </div>
)

export default function LineaTransparentePage() {
  const reportables = [
    "Robo de bienes de la compañía, de los colaboradores, de contratistas o cualquier otro bien que esté en el entorno laboral.",
    "Inadecuado uso de los recursos de la compañía.",
    "Conflictos de interés o situaciones de privilegio a contratistas, proveedores o empleados.",
    "Acoso laboral.",
    "Acoso sexual.",
    "Fraudes.",
    "Sobornos recibidos por colaboradores de la compañía o entregado por estos a otros.",
    "Afectaciones al medio ambiente.",
    "Vinculación de la compañía agrícola con personas asociadas a actividades ilícitas.",
    "Reporte de información fraudulenta o irreal por parte de colaboradores de la compañía a la administración, los accionistas o entes externos.",
    "Cualquier otra situación que vaya en contra de los Principios Éticos y Valores Corporativos."
  ];

  const recomendaciones = [
    "El reporte puedes hacerlo de manera anónima.",
    "Asegúrate de proporcionar información suficiente con nombres, cargos, ubicaciones geográficas, fechas y describir detalladamente la situación.",
    "Si deseas puedes poner información para contactarte y ampliar la información, se garantiza absoluta reserva."
  ];

  return (
    <div style={{ fontFamily: 'Tahoma, sans-serif' }}>
      
      {/* HEADER DINÁMICO / CONTENEDOR ROJO OSCURO */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full min-h-[160px] py-10 bg-red-800 rounded-3xl overflow-hidden mb-10 flex items-center px-10 shadow-xl shadow-red-900/10"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-red-300 border border-white/20 shrink-0">
            <ShieldAlert size={48} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white uppercase italic tracking-tighter leading-none">
              Línea Transparente
            </h1>
            <p className="text-white/80 text-base md:text-lg border-l-4 border-red-400 pl-5 max-w-2xl mt-4">
              Canal de denuncias éticas y reporte de irregularidades.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* TARJETA 1: INTRODUCCIÓN */}
        <DataCard title="Nuestro Compromiso">
          <p className="text-gray-600 leading-relaxed text-base mb-4">
            En <strong className="text-red-800">Nuestra Compañía</strong> regimos nuestras actuaciones con principios éticos y valores, comprendemos que este es el único camino hacia la confianza, la consolidación de una reputación intachable y de gran aporte a la sostenibilidad.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            En consecuencia, ponemos a disposición de los accionistas, administradores, colaboradores, contratistas, clientes y a la comunidad en general canales para reportar cualquier situación que vaya en contra del Código de Ética y Conducta Empresarial, el Código de Mejores Prácticas Corporativas, incumplimiento de normas internas y externas.
          </p>
        </DataCard>

        <div className="grid md:grid-cols-1 gap-8">
          {/* SITUACIONES REPORTABLES */}
          <DataCard title="¿Qué situaciones se deben reportar?">
            <p className="text-sm text-gray-500 mb-6 italic">Cualquier situación que tenga que ver con:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {reportables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50/50 rounded-xl hover:bg-red-50 transition-colors group">
                  <AlertTriangle size={18} className="text-orange-500 mt-0.5 shrink-0 group-hover:text-red-700 transition-colors" />
                  <p className="text-sm text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </DataCard>

          {/* RECOMENDACIONES Y DESCARGA (Lado a lado en pantallas grandes) */}
          <div className="grid md:grid-cols-2 gap-8">
            <DataCard title="Recomendaciones para el reporte">
              <div className="space-y-4">
                {recomendaciones.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-red-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{rec}</p>
                  </div>
                ))}
              </div>
            </DataCard>

            {/* TARJETA: CÓDIGO DE ÉTICA (LINK AL PDF) */}
            <div className="bg-gradient-to-br from-red-800 to-red-600 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group h-fit">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-red-400/20 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/20">
                  <FileText size={24} className="text-red-200" />
                </div>
                <h4 className="text-2xl font-bold mb-2 tracking-tight">Código de Ética</h4>
                <p className="text-white/80 text-sm mb-8 leading-relaxed">
                  Conoce a detalle nuestros lineamientos corporativos, principios éticos y conducta empresarial.
                </p>
                
                <a
                  href="/docs/politicasycumplimientos/PO-BEC-001-CODIGO-DE-ETICA-Y-CONDUCTA-EMPRESARIAL-CAST.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white text-red-800 font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-red-100 hover:text-red-900 transition-all shadow-md"
                >
                  <ExternalLink size={16} /> Ver Documento
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}