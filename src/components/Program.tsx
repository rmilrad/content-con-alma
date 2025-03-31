
import React from 'react';
import { Star } from 'lucide-react';

const Program = () => {
  return (
    <section className="py-20 md:py-28 bg-evo-beige/40 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-blue mb-12 text-center">
            ¿Cómo funciona el programa?
          </h2>
          
          <div className="space-y-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-evo-red/10 p-3 rounded-full">
                <Star className="text-evo-red" fill="#f16e60" size={28} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-evo-blue mb-3">
                  5 sesiones personalizadas
                </h3>
                <p className="text-base md:text-lg text-evo-blue/70">
                  1 por semana, 60 min cada una. Trabajaremos juntas en cada aspecto de tu contenido, desde definir tu esencia hasta estructurar una estrategia sostenible.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-evo-red/10 p-3 rounded-full">
                <Star className="text-evo-red" fill="#f16e60" size={28} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-evo-blue mb-3">
                  Material teórico y ejercicios prácticos
                </h3>
                <p className="text-base md:text-lg text-evo-blue/70">
                  Cuando estamos en llamada vamos a trabajar, cuando estás en tu tiempo libre puedes aprender.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-evo-red/10 p-3 rounded-full">
                <Star className="text-evo-red" fill="#f16e60" size={28} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-evo-blue mb-3">
                  Sales con un sistema de contenido claro y funcional
                </h3>
                <p className="text-base md:text-lg text-evo-blue/70">
                  Al finalizar, tendrás claridad en tu mensaje, un sistema organizado y contenido listo para publicar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
