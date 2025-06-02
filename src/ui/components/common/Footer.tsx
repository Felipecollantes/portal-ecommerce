import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PortalEcommerce</h3>
            <p className="text-sm">
              Transformamos ideas en soluciones digitales modernas y efectivas para empresas de todos los tamaños.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#services" className="text-sm hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#about" className="text-sm hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#contact" className="text-sm hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Comercio Electrónico</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Consultoría Digital</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <address className="not-italic text-sm">
              <p className="mb-2">Cádiz, España 11008</p>
              <p className="mb-2">
                <a href="mailto:info@portalecommerce.com" className="hover:text-primary transition-colors">
                  info@portalecommerce.com
                </a>
              </p>
              <p>
                <a href="tel:+34600626674" className="hover:text-primary transition-colors">
                  +34 600 62 66 74 / +34 638 00 74 06
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-sm text-center">
          <p>&copy; {year} PortalEcommerce. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}; 