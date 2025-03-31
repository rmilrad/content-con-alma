
import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    // Load iframe resizer script
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Use setTimeout to ensure the function is available after script is loaded
      setTimeout(() => {
        // Use window object with type assertion to avoid TypeScript error
        const w = window as any;
        if (w.iFrameResize) {
          w.iFrameResize({
            checkOrigin: false,
            heightCalculationMethod: "taggedElement"
          }, 'iframe');
        }
      }, 100);
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="signup-form" className="py-20 md:py-28 bg-white relative">
      <div className="absolute left-0 top-0 w-full md:w-1/3 h-full opacity-5 -z-10">
        <img 
          src="/public/lovable-uploads/e793387f-6781-4026-a0e9-1e15c2b12690.png" 
          alt="" 
          className="w-full h-full object-contain object-center"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-blue mb-4 text-center">
            Inscríbete ahora
          </h2>
          
          <p className="text-lg text-evo-blue/80 mb-10 text-center">
            Lo único que tienes que hacer es dejar tus datos aquí abajo, te contactaré con los siguientes pasos y antes de tu pago, me aseguraré que eres un buen fit para Creando con Alma. 💐
          </p>
          
          <div className="w-full bg-white rounded-2xl shadow-md p-4 md:p-6">
            <iframe 
              src="https://hello.dubsado.com/public/form/view/67ca4246267bef003ac70268" 
              frameBorder="0" 
              style={{ width: '1px', minWidth: '100%', height: '500px' }}
              title="Formulario de inscripción"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
