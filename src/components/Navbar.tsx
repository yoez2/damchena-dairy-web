
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dairy-cream py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-dairy-green text-2xl font-playfair font-bold">
            Damchena Dairy
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <b><a href="#" className="text-dairy-brown hover:text-dairy-green transition-colors">Home</a></b>
          <b><a href="#our-story" className="text-dairy-brown hover:text-dairy-green transition-colors">Our Story</a></b>
          <b><a href="#products" className="text-dairy-brown hover:text-dairy-green transition-colors">Products</a></b>
          <b><a href="#visit-us" className="text-dairy-brown hover:text-dairy-green transition-colors">Visit Us</a></b>
          <b><a href="#contact" className="text-dairy-brown hover:text-dairy-green transition-colors">Contact</a></b>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-dairy-brown hover:text-dairy-green hover:bg-dairy-cream"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-dairy-cream border-t border-dairy-light-brown p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-dairy-brown hover:text-dairy-green transition-colors py-2" onClick={toggleMenu}>Home</a>
            <a href="#our-story" className="text-dairy-brown hover:text-dairy-green transition-colors py-2" onClick={toggleMenu}>Our Story</a>
            <a href="#products" className="text-dairy-brown hover:text-dairy-green transition-colors py-2" onClick={toggleMenu}>Products</a>
            <a href="#visit-us" className="text-dairy-brown hover:text-dairy-green transition-colors py-2" onClick={toggleMenu}>Visit Us</a>
            <a href="#contact" className="text-dairy-brown hover:text-dairy-green transition-colors py-2" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
