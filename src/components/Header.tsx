
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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md py-4 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/public/lovable-uploads/a0fd9a80-411e-4b2b-abef-dd983a2bd789.png" alt="Evo Creative" className="h-10" />
        </div>
        <Button 
          onClick={scrollToForm}
          className="bg-evo-red hover:bg-evo-red/90 text-white font-medium px-6 py-2 rounded-md transition-colors"
        >
          Inscríbete
        </Button>
      </div>
    </header>
  );
};

export default Header;
