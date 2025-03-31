import React from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  return (
    <section className="py-20 md:py-28 bg-evo-beige/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-blue mb-10 text-center">
            ¿Por qué confiar en mí para guiarte en este proceso?
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
              <img 
                src="/public/lovable-uploads/f1d63896-db64-4ae0-8b82-78dc55e98a8d.png" 
                alt="Naza" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="space-y-4 text-lg text-evo-blue/90 leading-relaxed">
              <p className="font-medium text-xl text-evo-red">
                Hola, soy Naza.
              </p>
              <p>
                Llevo tres años ayudando a mujeres a hacer crecer sus negocios usando la creación de contenido como <strong>herramienta</strong>.
              </p>
              <p>
                Empecé como freelance, sin saber nada de marketing. Solo con las ganas de viajar por el mundo mientras trabajaba. Estudié administración, así que TODO me era nuevo en este mundo.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 text-lg text-evo-blue/90 leading-relaxed">
            <p>
              Hice pasantías no pagadas, tomé miles de cursos en LinkedIn, leí libros, vi tutoriales de 5hrs en YouTube... aprendí haciendo.
            </p>
            
            <p>
              Recuerdo mi primera estrategia de contenido: cobraba por horas, pero solo facturé el tiempo que me llevó crear la presentación... no todo el tiempo que pasé en YouTube aprendiendo a hacerla. 😂
            </p>
            
            <p className="font-medium text-center my-8 text-evo-red text-xl">
              El verdadero: fake it 'til you make it.
            </p>
            
            <p>
              Algunas clientes comenzaron a crecer, 10, 100, 1000 seguidores con mi trabajo y otras un poco pegadas en los 200 views, nunca conectaban ni vendían.
            </p>
            
            <p className="font-medium text-xl mt-6 mb-2">
              ¿POR QUÉ?
            </p>
            
            <p>
              Yo hacía lo mismo para todas, el mismo amor, dedicación y energía (si no es que más) y entendí algo: <strong>si tu negocio no tiene una base, ninguna estrategia por fancy que sea, va a funcionar.</strong>
            </p>
            
            <p>
              No importa cuántos trends sigas ni cuánto hayas pagado por ese curso de marketing de más de $1K.
            </p>
            
            <p>
              Si no entiendes tu negocio, su propósito y cómo comunicarlo en un mundo saturado de contenido, <strong>no vas a despegar.</strong>
            </p>
            
            <p>
              Por eso hablo de algo diferente. Aquí no te voy a enseñar lo último en trends.
            </p>
            
            <p>
              Aquí vas a entender<strong>TE</strong> y entender tanto a tu negocio que vas a crear contenido que no solo te haga crecer, sino que también te ayuda en tu proceso de ventas.
            </p>
            
            <p>
              Así he llevado cuentas de 2K a 70K y he ayudado a construir negocios de 6 cifras. Pero spoiler: Nada de esto sucede sin trabajo y sin la guía adecuada para crear <strong>Contenido con Alma.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
