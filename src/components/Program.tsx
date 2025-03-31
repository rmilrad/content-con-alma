
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Program = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-16 md:py-20 bg-evo-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-dark-brown mb-10 text-center">
            ¿Cómo funciona el programa?
          </h2>
          
          <div className="space-y-8 mb-10">
            <div className="flex items-start gap-4">
              <Heart className="text-evo-pink shrink-0 mt-1 fill-evo-light-pink" size={24} />
              <div>
                <h3 className="text-xl font-medium text-evo-dark-brown mb-2">
                  5 sesiones personalizadas (1 por semana, 60 min cada una)
                </h3>
                <p className="text-lg text-evo-brown">
                  Trabajaremos juntas en cada aspecto de tu contenido, desde definir tu esencia hasta estructurar una estrategia sostenible.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Heart className="text-evo-pink shrink-0 mt-1 fill-evo-light-pink" size={24} />
              <div>
                <h3 className="text-xl font-medium text-evo-dark-brown mb-2">
                  Material teórico y ejercicios prácticos
                </h3>
                <p className="text-lg text-evo-brown">
                  Cuando estamos en llamada vamos a trabajar, cuando estás en tu tiempo libre puedes aprender.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Heart className="text-evo-pink shrink-0 mt-1 fill-evo-light-pink" size={24} />
              <div>
                <h3 className="text-xl font-medium text-evo-dark-brown mb-2">
                  Sales con un sistema de contenido claro y funcional
                </h3>
                <p className="text-lg text-evo-brown">
                  Al finalizar, tendrás claridad en tu mensaje, un sistema organizado y contenido listo para publicar.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              className="bg-evo-pink hover:bg-evo-dark-pink text-white text-lg font-medium px-8 py-3 rounded-md transition-colors"
            >
              Deja tus datos aquí
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
