
import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-dark-brown mb-6">
            Inversión para crear contenido con Alma
          </h2>
          
          <p className="text-lg text-evo-brown mb-10">
            Y dejar el estrés cotidiano de sentirse confundida:
          </p>
          
          <div className="bg-evo-beige rounded-xl p-8 mb-8 inline-block mx-auto">
            <div className="flex items-center justify-center mb-6">
              <span className="text-evo-light-brown line-through text-2xl mr-4">$200</span>
              <span className="text-evo-dark-pink text-4xl font-semibold">$60</span>
            </div>
            
            <Button 
              onClick={scrollToForm}
              className="bg-evo-pink hover:bg-evo-dark-pink text-white text-lg font-medium px-8 py-3 rounded-md transition-colors"
            >
              Quiero empezar hoy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
