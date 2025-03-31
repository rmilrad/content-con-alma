
import React from 'react';
import { Check, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Audience = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-blue mb-14 text-center">
            ¿Es este programa para ti?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-8 w-8 bg-evo-red/10 rounded-full flex items-center justify-center">
                  <Check className="text-evo-red h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-evo-blue">Para ti si</h3>
              </div>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-evo-beige/20 overflow-hidden">
                <ul className="p-2 divide-y divide-gray-100">
                  {[
                    "Quieres crear contenido alineado con vos y los objetivos de tu negocio",
                    "Te gustaría definir tu mensaje y estructura de marca con claridad",
                    "Valoras la autenticidad y quieres convertirla en contenido estratégico",
                    "Quieres un sistema para planificar contenido sin abrumarte",
                    "Buscas aprender a vender sin sentir que estás vendiendo"
                  ].map((text, index) => (
                    <li key={index} className="p-4 flex items-start gap-3 hover:bg-white/60 transition-colors rounded-lg">
                      <div className="bg-evo-red/10 rounded-full p-1 shrink-0 mt-1">
                        <Check className="text-evo-red" size={16} />
                      </div>
                      <p className="text-evo-blue/90">{text}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="text-red-500 h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-evo-blue">No es para ti si</h3>
              </div>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-100 overflow-hidden">
                <ul className="p-2 divide-y divide-gray-100">
                  {[
                    "Solo quieres más seguidores rápidamente sin importar la calidad",
                    "No crees en el valor de la claridad, confianza y autenticidad",
                    "Prefieres seguir publicando sin estrategia y esperar resultados",
                    "No estás dispuesta a cambiar tu relación con el contenido",
                    "No quieres dedicar tiempo a estructurar tu mensaje"
                  ].map((text, index) => (
                    <li key={index} className="p-4 flex items-start gap-3 hover:bg-white/60 transition-colors rounded-lg">
                      <div className="bg-red-100 rounded-full p-1 shrink-0 mt-1">
                        <X className="text-red-500" size={16} />
                      </div>
                      <p className="text-evo-blue/90">{text}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
