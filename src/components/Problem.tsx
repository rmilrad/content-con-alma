
import React from 'react';
import { Button } from '@/components/ui/button';

const Problem = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="problem-section" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-serif text-evo-blue/80 mb-12 leading-relaxed text-center italic">
            "Estás trabajando 24/7 para hacer crecer tu negocio, creando contenido en redes sociales, probando nuevas ideas, y siguiendo todos los tips de cada Tik Tok que ves."
          </p>
          
          <div className="space-y-6 text-lg text-evo-blue/90">
            <p>
              Pero, a pesar de todo lo que haces, te encuentras atrapada en los mismos 200 views, luchando con 'que voy a crear hoy?' y preguntándote qué más puedes hacer si ya haces todo lo puedes???
            </p>
            
            <p>
              Comienzas con toda la motivación, pero a las dos semanas te sientes sin energía, sin saber de qué publicar o cómo conectar con tu audiencia.
            </p>
            
            <p>
              El contenido parece más una carga pesada, que una oportunidad, y terminas dejando de lado todo lo que antes te emocionaba.
            </p>
            
            <p className="text-center font-medium text-xl mt-12 py-2">
              <span className="border-b-2 border-evo-red inline-block">Debe haber una forma de hacerlo diferente.</span>
            </p>
            
            <div className="flex justify-center mt-8">
              <Button 
                onClick={scrollToForm}
                className="bg-evo-red hover:bg-evo-red/90 text-white text-lg font-bold px-8 py-6 rounded-md transition-colors shadow-md"
              >
                Deja tus datos aquí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
