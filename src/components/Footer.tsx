
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dairy-brown text-dairy-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Damchena Dairy</h3>
            <p className="mb-4">Pure, organic dairy products from the pristine village of Paro, Bhutan.</p>
            <p className="text-sm">© {currentYear} Damchena Dairy Products. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dairy-light-green transition-colors">Home</a></li>
              <li><a href="#our-story" className="hover:text-dairy-light-green transition-colors">Our Story</a></li>
              <li><a href="#products" className="hover:text-dairy-light-green transition-colors">Products</a></li>
              <li><a href="#visit-us" className="hover:text-dairy-light-green transition-colors">Visit Us</a></li>
              <li><a href="#contact" className="hover:text-dairy-light-green transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dairy-light-green transition-colors">Milk</a></li>
              <li><a href="#" className="hover:text-dairy-light-green transition-colors">Cheese</a></li>
              <li><a href="#" className="hover:text-dairy-light-green transition-colors">Yogurt</a></li>
              <li><a href="#" className="hover:text-dairy-light-green transition-colors">Curd</a></li>
              <li><a href="#" className="hover:text-dairy-light-green transition-colors">Butter</a></li>
              <li><a href="#" className="hover:text-dairy-light-green transition-colors">Whey</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to receive updates on new products and special offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-dairy-brown"
              />
              <button 
                type="submit" 
                className="bg-dairy-green hover:bg-dairy-light-green text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="border-t border-dairy-light-brown">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm"> Design & Develop by Dawa Yoezer Dorji</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-dairy-light-green transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-dairy-light-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
