
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-evo-dark-brown text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-xl font-serif mb-4">Contenido con Alma</h2>
          <p className="text-white/70 mb-6">&copy; {new Date().getFullYear()} Naza | Evo Creative. Todos los derechos reservados.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.evocreative.me" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              Website
            </a>
            <span className="text-white/30">|</span>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
