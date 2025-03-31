
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const problemSection = document.getElementById('problem-section');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-evo-beige/30 -z-10"></div>
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-10 bg-pattern bg-no-repeat bg-contain bg-right -z-10"></div>
      
      {/* Add logo to the hero background with increased size and lighter opacity */}
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center opacity-5 -z-10">
        <img 
          src="/public/lovable-uploads/e36b68da-f91a-4167-9228-e82647752e2a.png" 
          alt="" 
          className="w-full max-w-[200%] md:max-w-[200%]" 
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-evo-blue mb-6 leading-tight animate-fade-in">
            <span className="text-evo-red">Deja de improvisar</span> en redes sociales.
          </h1>
          <p className="text-lg md:text-xl text-evo-blue/80 mb-10 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Convierte tu propósito en un imán para crear contenido para tu marca personal desde un espacio de 
            <span className="font-medium"> claridad</span> (organización), 
            <span className="font-medium"> conexión</span> (comunidad), 
            <span className="font-medium"> abundancia</span> (ventas).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Button
              onClick={scrollToForm}
              className="bg-evo-red hover:bg-evo-red/90 text-white font-medium px-8 py-6 transition-colors"
            >
              Quiero crear con alma
            </Button>
            <Button
              onClick={scrollToNextSection} 
              variant="ghost"
              className="text-evo-blue hover:text-evo-red font-medium flex items-center gap-2 px-6 py-6 transition-colors border-0"
            >
              Descubre más <ArrowDown size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
