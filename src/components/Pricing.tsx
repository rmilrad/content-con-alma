
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
    <section className="py-20 md:py-28 bg-evo-red/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-evo-blue mb-8">
            Inversión para crear contenido con Alma
          </h2>
          
          <p className="text-lg text-evo-blue/80 mb-10">
            Y dejar el estrés cotidiano de sentirse confundida:
          </p>
          
          <div className="bg-white p-10 md:p-12 rounded-2xl shadow-md max-w-md mx-auto mb-10 transform transition-all hover:scale-105 duration-300 border-2 border-evo-red/10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-evo-blue/60 line-through text-2xl">$200</span>
              <span className="text-evo-red text-5xl font-bold">$60</span>
            </div>
            
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#f16e60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-evo-blue/80 font-medium">5 sesiones personalizadas</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#f16e60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-evo-blue/80 font-medium">Material teórico y práctico</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#f16e60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-evo-blue/80 font-medium">Sistema de contenido personalizado</span>
              </li>
            </ul>
            
            <Button 
              onClick={scrollToForm}
              className="bg-evo-red hover:bg-evo-red/90 text-white text-lg font-bold w-full py-6 rounded-md transition-colors shadow-md"
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
