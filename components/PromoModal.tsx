"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem("promoShown")
    if (!hasBeenShown) {
      const timer = setTimeout(() => setIsOpen(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    sessionStorage.setItem("promoShown", "true")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
           
            className="relative w-full max-w-sm bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {}
            <button 
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 p-1.5 bg-black/10 hover:bg-black/30 text-white rounded-full transition-all"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-square w-full"> {/* CAMBIO: aspect-square para que sea un cuadrado perfecto */}
              <img 
                src="/Imagenes/Exportado 1.jpg" 
                alt="Castilla Agrícola" 
                className="object-cover w-full h-full"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#006437] via-[#006437]/90 to-transparent text-white">
                <h3 className="text-xl font-bold italic leading-tight">Aviso</h3>
                <p className="text-white/80 mt-1 text-xs">
                  Bienvenidos a nuestra plataforma.
                </p>
                <button 
                  onClick={closeModal}
                  className="mt-4 w-full py-3 bg-[#a3c74a] text-[#006437] font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-white transition-colors"
                >
                  Entrar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}