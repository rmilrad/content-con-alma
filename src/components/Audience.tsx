
import React from 'react';
import { Check, X } from 'lucide-react';

const Audience = () => {
  const forYouItems = [
    "Quieres crear contenido alineado con vos y los objetivos de tu negocio",
    "Te gustaría definir tu mensaje y estructura de marca con claridad",
    "Valoras la autenticidad y quieres convertirla en contenido estratégico",
    "Quieres un sistema para planificar contenido sin abrumarte",
    "Buscas aprender a vender sin sentir que estás vendiendo"
  ];
  
  const notForYouItems = [
    "Solo quieres más seguidores rápidamente sin importar la calidad",
    "No crees en el valor de la claridad, confianza y autenticidad",
    "Prefieres seguir publicando sin estrategia y esperar resultados",
    "No estás dispuesta a cambiar tu relación con el contenido",
    "No quieres dedicar tiempo a estructurar tu mensaje"
  ];
  
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-blue mb-14 text-center">
            ¿Es este programa para ti?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left side - For You */}
            <div className="bg-white rounded-2xl shadow-md p-8 border border-evo-red/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 bg-evo-red/10 rounded-full flex items-center justify-center">
                  <Check className="text-evo-red h-6 w-6" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-evo-blue">Para ti si</h3>
              </div>
              
              <ul className="space-y-5">
                {forYouItems.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <Check className="text-evo-red h-6 w-6 flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-evo-blue/90">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right side - Not For You */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <X className="text-gray-500 h-6 w-6" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-evo-blue">No es para ti si</h3>
              </div>
              
              <ul className="space-y-5">
                {notForYouItems.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <X className="text-gray-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-evo-blue/90">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
