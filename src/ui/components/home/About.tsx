import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const stats = [
    { value: '10+', label: 'Años de Experiencia' },
    { value: '50+', label: 'Proyectos Completados' },
    { value: '50+', label: 'Clientes Satisfechos' },
    { value: '2+', label: 'Expertos en el Equipo' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full opacity-70 -z-10 transform -translate-x-1/4 -translate-y-1/4"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&q=75&fit=crop&w=1000"
                alt="Nuestro equipo"
                className="rounded-lg shadow-xl relative z-10"
              />
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quiénes Somos
              </h2>
              
              <p className="text-lg text-gray-600 mb-6" style={{ textAlign: "justify" }}>
                Somos un equipo apasionado de expertos en tecnología dedicados a crear soluciones digitales excepcionales.
                Desde 2020, hemos ayudado a empresas de todos los tamaños a transformar sus ideas en realidades digitales.
                Combinamos diseño, desarrollo y estrategia para ayudar a empresas, emprendedores y marcas a destacar en internet. 
                Nuestro enfoque es cercano y transparente: escuchamos tus ideas, entendemos tus necesidades y trabajamos contigo para construir una presencia online sólida, atractiva y efectiva. 
                Más que un proveedor, queremos ser tu aliado digital, acompañándote en cada etapa del crecimiento de tu proyecto.
              </p>
              
              <p className="text-lg text-gray-600 mb-8" style={{ textAlign: "justify" }}>
                Nuestro enfoque se centra en entender las necesidades únicas de cada cliente para ofrecer
                soluciones personalizadas que generen resultados tangibles. Combinamos tecnología de vanguardia
                con estrategias efectivas para impulsar el crecimiento de tu negocio.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary font-medium hover:text-primary-600 transition-colors flex items-center"
              >
                Conoce más sobre nosotros
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}; 