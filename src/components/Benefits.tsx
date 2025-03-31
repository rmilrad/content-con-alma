
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-dark-brown mb-10 text-center">
            Al terminar el programa, sentirás…
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-evo-pink shrink-0 mt-1" size={24} />
              <p className="text-lg text-evo-brown">
                <span className="font-medium">Seguridad y confianza</span> al crear contenido alineado con tu negocio.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="text-evo-pink shrink-0 mt-1" size={24} />
              <p className="text-lg text-evo-brown">
                <span className="font-medium">Claridad en tu mensaje y estrategia.</span>
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="text-evo-pink shrink-0 mt-1" size={24} />
              <p className="text-lg text-evo-brown">
                <span className="font-medium">Menos estrés y más fluidez,</span> con un sistema que evita bloqueos creativos.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="text-evo-pink shrink-0 mt-1" size={24} />
              <p className="text-lg text-evo-brown">
                <span className="font-medium">Conexión auténtica con tu audiencia</span> y atracción de clientes sin sentir que "vendes todo el tiempo".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
