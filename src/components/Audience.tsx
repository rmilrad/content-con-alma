
import React from 'react';
import { Check, X } from 'lucide-react';

const Audience = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="bg-gradient-to-br from-white to-evo-beige/30 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-evo-blue mb-8 text-center md:text-left">
                ¿Es para ti?
              </h2>
              
              <div className="space-y-6">
                {[
                  "Quieres crear contenido alineado con vos y los objetivos de tu negocio, sin sentir que te estás forzando a encajar.",
                  "Te gustaría definir tu mensaje y estructura de marca y sentir esa sensación de paz al saber qué dirección tomar con tu contenido.",
                  "Valoras la autenticidad y sabes que ser tú misma es tu mayor fortaleza, pero te frustra no saber cómo convertir eso en contenido estratégico y atractivo.",
                  "Quieres un sistema para planificar contenido sin abrumarte, porque ya tienes suficiente en qué pensar con tu negocio.",
                  "Buscas aprender a vender sin "vender"."
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200">
                    <div className="bg-evo-red/10 rounded-full p-1.5 shrink-0 mt-1">
                      <Check className="text-evo-red" size={16} />
                    </div>
                    <p className="text-evo-blue/90">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-evo-blue mb-8 text-center md:text-left">
                No es para ti si…
              </h2>
              
              <div className="space-y-6">
                {[
                  "No te interesa el crecimiento personal ni profesional, solo quieres más seguidores rápidamente sin preocuparte por la calidad de tu comunidad.",
                  "No crees en el valor de lo intangible: claridad, confianza, autenticidad y estrategia a largo plazo.",
                  "Prefieres seguir publicando sin estrategia y esperar resultados sin hacer ajustes.",
                  "No estás dispuesta a cambiar la forma en que te relacionas con tu contenido y tu negocio.",
                  "No quieres dedicar tiempo a entender y estructurar tu mensaje antes de crear contenido."
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200">
                    <div className="bg-red-100 rounded-full p-1.5 shrink-0 mt-1">
                      <X className="text-red-500" size={16} />
                    </div>
                    <p className="text-evo-blue/90">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
