import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center text-center overflow-hidden"
      style={{ 
        backgroundImage: "url('/images/fams.jpg')",
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
  
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-black/30 p-8 rounded-3xl backdrop-blur-sm">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
            Fresh From Damchena village
          </h1>
          <p className="text-lg sm:text-xl text-dairy-cream mb-8 max-w-2xl mx-auto">
            Pure,organic dairy products from the pristine village of Damchena,Paro
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('products')}
              className="bg-dairy-green hover:bg-dairy-light-green text-white text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-full"
            >
              Explore Products
            </Button>
            <Button 
              onClick={() => scrollToSection('our-story')}
               
              className="bg-dairy-green hover:bg-dairy-light-green text-white text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-full"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
