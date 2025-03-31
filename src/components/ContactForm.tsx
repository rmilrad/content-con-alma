
import React from 'react';

const ContactForm = () => {
  // We'll load the iframe script dynamically
  React.useEffect(() => {
    // Create the iframe resizer script
    const resizerScript = document.createElement('script');
    resizerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js';
    resizerScript.type = 'text/javascript';
    document.body.appendChild(resizerScript);

    // Add the iframe resizer initialization script after the iframe resizer is loaded
    resizerScript.onload = () => {
      const initScript = document.createElement('script');
      initScript.innerHTML = `
        setTimeout(function(){
          iFrameResize({checkOrigin: false, heightCalculationMethod: "taggedElement"});
        }, 30);
      `;
      document.body.appendChild(initScript);
    };

    return () => {
      // Cleanup
      document.body.removeChild(resizerScript);
    };
  }, []);

  return (
    <section id="signup-form" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-blue mb-10 text-center">
            Deja tus datos aquí
          </h2>
          
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
            <iframe 
              src="https://hello.dubsado.com/public/form/view/67ca4246267bef003ac70268" 
              frameBorder="0" 
              style={{ width: '1px', minWidth: '100%' }}
              title="Formulario de contacto"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
