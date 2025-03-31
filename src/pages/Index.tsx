
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Benefits from '@/components/Benefits';
import Program from '@/components/Program';
import Audience from '@/components/Audience';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Program />
        <Audience />
        <About />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
