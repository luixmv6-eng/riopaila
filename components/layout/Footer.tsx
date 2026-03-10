"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Facebook, Instagram, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.656208035345!2d-76.52455038865666!3d3.4598737965099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ebad0068ec4a81%3A0x9c1cc2b4e3289ba2!2sCra.%201%20%2324-56%2C%20San%20Nicolas%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1707486000000!5m2!1ses!2sco" 

  const socialLinks = [
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/agricolacastillasa/?originalSubdomain=co",
      label: "LinkedIn"
    },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/people/Castilla-Agr%C3%ADcola-Riopaila-Agr%C3%ADcola/100083044706351/?locale=es_ES#",
      label: "Facebook"
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/riocasben/",
      label: "Instagram"
    }
  ]

  return (
    // 👇 FONDO CAMBIADO A NEGRO PROFUNDO (bg-black) 👇
    <footer className="relative bg-black text-white pt-14 pb-8 overflow-hidden border-t border-white/5 font-[Tahoma,Verdana,sans-serif]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* COL 1: BRANDING */}
          <div className="lg:col-span-4 space-y-7">
            
            <div className="flex items-center gap-4.5">
              
              {/* 1. Logo */}
              <Link href="/">
                <img 
                  src="/Imagenes/LOGO-RIO-POS.png" 
                  alt="Logo Belagro" 
                  className="h-12 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                />
              </Link>
              
              {/* 2. TEXTO ESTÁTICO */}
              <div className="flex flex-col justify-center select-none">
                <span className="text-2xl font-bold leading-none tracking-tight text-white cursor-default">
                    Riopaila
                </span>
                <span className="text-2xl font-bold leading-none tracking-tight text-white cursor-default">
                  S.A.
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-xs font-normal">
              Sostenibilidad y tradición transformando el campo colombiano.
            </p>
            
            {/* Redes Sociales - Hover en Blanco Nítido */}
            <div className="flex gap-2.5">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  // 👇 Hover neutro y limpio (Fondo Blanco, Icono Negro) 👇
                  whileHover={{ y: -3, backgroundColor: "#ffffff", color: "#000000" }}
                  className="p-2.5 bg-white/5 rounded-xl border border-white/10 transition-colors shadow-inner cursor-pointer"
                >
                  <item.Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* COL 2: LINKS (Títulos en gris claro) */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-7 pt-2.5">
            <div className="space-y-4">
              {/* 👇 Título en gris claro (stone-300) 👇 */}
              <h4 className="text-stone-300 font-bold text-[10px] uppercase tracking-[0.2em]">Compañía</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/compania/quienes-somos" className="text-white/80 hover:text-white hover:underline transition-colors">Nosotros</Link></li>
                <li><Link href="/compania/historia" className="text-white/80 hover:text-white hover:underline transition-colors">Historia</Link></li>
                <li><Link href="/compania/gobierno-corporativo" className="text-white/80 hover:text-white hover:underline transition-colors">Gobierno</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              {/* 👇 Título en gris claro 👇 */}
              <h4 className="text-stone-300 font-bold text-[10px] uppercase tracking-[0.2em]">Contacto</h4>
              <div className="text-xs text-white/80 space-y-2.5">
                {/* 👇 Iconos en gris claro 👇 */}
                <p className="flex items-center gap-2.5"><Phone size={13} className="text-stone-300"/> (57)(602)4855974</p>
                <p className="flex items-center gap-2.5 truncate"><Mail size={13} className="text-stone-300"/> Administracion.Corp@belagro.Com</p>
              </div>
            </div>
          </div>

          {/* COL 3: MAPA (Neutro) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group h-48"
          >
            <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-inner">
              <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(0.8) brightness(0.9) contrast(1.1)" }} 
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Belagro"
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              />
              
              <Link 
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.656208035345!2d-76.52455038865666!3d3.4598737965099395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ebad0068ec4a81%3A0x9c1cc2b4e3289ba2!2sCra.%201%20%2324-56%2C%20San%20Nicolas%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1707486000000!5m2!1ses!2sco" 
                target="_blank"
                // 👇 Botón Maps Blanco nítido 👇
                className="absolute top-3.5 right-3.5 z-20 bg-white text-black px-3.5 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 hover:scale-105 transition-transform shadow-lg"
              >
                Abrir en Maps <ArrowUpRight size={12} />
              </Link>

              {/* Pin Address - Fondo gris oscuro neutro */}
              <div className="absolute bottom-3.5 left-3.5 z-20 bg-neutral-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-white flex items-center gap-2.5">
                  <MapPin size={13} className="text-stone-300" /> Cra 1 #24-56, Cali, CO
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* LÍNEA FINAL */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 font-normal">
          <p className="text-[10px] text-stone-400 tracking-wide">
            © {currentYear} <span className="text-white">Riopaila S.A.</span> - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}