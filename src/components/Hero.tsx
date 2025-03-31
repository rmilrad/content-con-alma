
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-evo-beige to-evo-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-evo-dark-brown mb-6 leading-tight">
            <span className="text-evo-dark-pink">Deja de improvisar</span> en redes sociales.
          </h2>
          <p className="text-lg md:text-xl text-evo-brown mb-8 leading-relaxed">
            Convierte tu propósito en un imán para crear contenido para tu marca personal desde un espacio de 
            <span className="font-medium"> claridad</span> (organización), 
            <span className="font-medium"> conexión</span> (comunidad), 
            <span className="font-medium"> abundancia</span> (ventas).
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-evo-pink hover:bg-evo-dark-pink text-white text-lg font-medium px-8 py-3 rounded-md transition-colors"
          >
            Quiero crear con alma
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
