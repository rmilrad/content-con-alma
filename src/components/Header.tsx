
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative bg-evo-beige pt-6 pb-4 border-b border-evo-brown/10">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-serif font-semibold text-evo-dark-brown">Contenido con Alma</h1>
        </div>
        <Button 
          onClick={scrollToForm}
          className="bg-evo-pink hover:bg-evo-dark-pink text-white font-medium px-4 py-2 rounded-md transition-colors"
        >
          Inscríbete
        </Button>
      </div>
    </header>
  );
};

export default Header;
