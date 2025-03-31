
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-evo-blue text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center">
          <img src="/public/lovable-uploads/a0fd9a80-411e-4b2b-abef-dd983a2bd789.png" alt="Evo Creative" className="h-10 mx-auto mb-6 brightness-0 invert" />
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
