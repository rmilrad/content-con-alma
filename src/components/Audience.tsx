
import React from 'react';
import { Check, X } from 'lucide-react';

const Audience = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-evo-dark-brown mb-6 text-center md:text-left">
                ¿Es para ti?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-evo-light-pink rounded-full p-1 shrink-0 mt-1">
                    <Check className="text-evo-pink" size={16} />
                  </div>
                  <p className="text-evo-brown">
                    Quieres crear contenido alineado con vos y los objetivos de tu negocio, sin sentir que te estás forzando a encajar.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-evo-light-pink rounded-full p-1 shrink-0 mt-1">
                    <Check className="text-evo-pink" size={16} />
                  </div>
                  <p className="text-evo-brown">
                    Te gustaría definir tu mensaje y estructura de marca y sentir esa sensación de paz al saber qué dirección tomar con tu contenido.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-evo-light-pink rounded-full p-1 shrink-0 mt-1">
                    <Check className="text-evo-pink" size={16} />
                  </div>
                  <p className="text-evo-brown">
                    Valoras la autenticidad y sabes que ser tú misma es tu mayor fortaleza, pero te frustra no saber cómo convertir eso en contenido estratégico y atractivo.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-evo-light-pink rounded-full p-1 shrink-0 mt-1">
                    <Check className="text-evo-pink" size={16} />
                  </div>
                  <p className="text-evo-brown">
                    Quieres un sistema para planificar contenido sin abrumarte, porque ya tienes suficiente en qué pensar con tu negocio.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-evo-light-pink rounded-full p-1 shrink-0 mt-1">
                    <Check className="text-evo-pink" size={16} />
                  </div>
                  <p className="text-evo-brown">
                    Buscas aprender a vender sin "vender".
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-semibold text-evo-dark-brown mb-6 text-center md:text-left">
                No es para ti si…
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-1 shrink-0 mt-1">
                    <X className="text-red-500" size={16} />
                  </div>
                  <p className="text-evo-brown">
                    No te interesa el crecimiento personal ni profesional, solo quieres más seguidores rápidamente sin preocuparte por la calidad de tu comunidad.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-1 shrink-0 mt-1">
                    <X className="text-red-500" size={16} />
                  </div>
                  <p className="text-evo-brown">
                    No crees en el valor de lo intangible: claridad, confianza, autenticidad y estrategia a largo plazo.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-1 shrink-0 mt-1">
                    <X className="text-red-500" size={16} />
                  </div>
                  <p className="text-evo-brown">
                    Prefieres seguir publicando sin estrategia y esperar resultados sin hacer ajustes.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-1 shrink-0 mt-1">
                    <X className="text-red-500" size={16} />
                  </div>
                  <p className="text-evo-brown">
                    No estás dispuesta a cambiar la forma en que te relacionas con tu contenido y tu negocio.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-1 shrink-0 mt-1">
                    <X className="text-red-500" size={16} />
                  </div>
                  <p className="text-evo-brown">
                    No quieres dedicar tiempo a entender y estructurar tu mensaje antes de crear contenido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
