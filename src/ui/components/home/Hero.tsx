import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Soluciones Digitales <span className="text-primary">Personalizadas</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transformamos ideas en realidades digitales. Ofrecemos servicios de desarrollo web y 
                comercio electrónico de alta calidad para hacer crecer tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="sm:mr-4 px-6 py-3"
                >
                  Contactar Ahora
                </Button>
                <Button 
                  variant="secondary"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3"
                >
                  Ver Servicios
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-full z-0"></div>
              
              <div className="relative z-10 bg-white p-2 rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&q=75&fit=crop&w=1000"
                  alt="Digital Solutions" 
                  className="w-full h-auto rounded"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}; 