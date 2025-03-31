
import React from 'react';
import { Button } from '@/components/ui/button';

const Solution = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-evo-beige/40 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full md:w-1/2 h-full opacity-10 bg-pattern bg-no-repeat bg-contain bg-left -z-10 transform rotate-180"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-evo-red mb-10 text-center">
            Creando con Alma
          </h2>
          
          <div className="space-y-6 text-lg text-evo-blue/90 mb-12">
            <p>
              Es hora de dejar de seguir tendencias y empezar a crear contenido que realmente hable de vos y de tu negocio. Que al final, los dos se interconectan.
            </p>
            
            <p>
              Es hora de desarrollar una estrategia que te ayude a conectar con tu audiencia, a vender sin "vender" y, sobre todo, a disfrutar el proceso sin sentir que estás dando palos de ciego.
            </p>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-serif font-medium text-evo-blue mb-8 text-center">
            Mi propósito…
          </h3>
          
          <div className="space-y-6 text-lg text-evo-blue/90 mb-12">
            <p>
              Si vas a una agencia, crean contenido "done for you" (hecho por ti), pero terminan entregándote algo que se siente <strong>como si fuera para cualquier marca menos la tuya.</strong> Aceptas porque "<em>ellos son los expertos</em>", pero el resultado es una comunicación desconectada de lo que eres.
            </p>
            
            <p>
              Mi propósito con estas sesiones es que no delegues tu marketing desde la superficialidad, sino que aprendas tu misma, a construirlo desde la raíz, con autenticidad y estrategia. Quiero que dejes de ver la creación de contenido como una tarea agotadora y la transformes en una extensión natural de tu propósito.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              className="bg-evo-red hover:bg-evo-red/90 text-white text-lg font-medium px-8 py-3 rounded-md transition-colors"
            >
              Deja tus datos aquí
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
