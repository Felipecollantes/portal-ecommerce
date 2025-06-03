import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            Biotech Soluciones
          </a>
        </div>
        
        {/* Navegación para desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-primary font-medium">
            Inicio
          </a>
          <a href="#services" className="text-gray-700 hover:text-primary font-medium">
            Servicios
          </a>
          <a href="#about" className="text-gray-700 hover:text-primary font-medium">
            Nosotros
          </a>
          <a href="#contact" className="text-gray-700 hover:text-primary font-medium">
            Contacto
          </a>
        </nav>
        
        {/* Botón de menú móvil */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
      
      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="container py-4 px-4 flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}; 