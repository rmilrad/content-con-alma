
import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    // Load iframe resizer script
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.iFrameResize) {
        setTimeout(() => {
          window.iFrameResize({
            checkOrigin: false,
            heightCalculationMethod: "taggedElement"
          });
        }, 30);
      }
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="signup-form" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-blue mb-10 text-center">
            Inscríbete ahora
          </h2>
          
          <div className="w-full">
            <iframe 
              src="https://hello.dubsado.com/public/form/view/67ca4246267bef003ac70268" 
              frameBorder="0" 
              style={{ width: '1px', minWidth: '100%' }}
              title="Formulario de inscripción"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
