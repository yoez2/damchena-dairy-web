
import React from 'react';

const VisitUs = () => {
  return (
    <section id="visit-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dairy-brown mb-6">Visit Our Shop</h2>
          <div className="w-20 h-1 bg-dairy-light-green mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-dairy-brown">
              Experience the warmth of our shop and buy our products.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/* This is where we would add an iframe for Google Maps, but we'll use a static image for now */}
              <img 
                src="/images/vistus.jpg" 
                alt="Map location of Damchen Dairy in Paro, Bhutan" 
                className="w-full h-96 object-cover"
              />
              <div className="bg-dairy-cream p-6">
                <h3 className="text-xl font-bold text-dairy-green mb-2">Find Us Here</h3>
                <p className="text-dairy-brown">Damchena Dairy Products, Paro Town, Near Children's Park, Bhutan</p>
                <a 
                  href="https://maps.app.goo.gl/BKMmUV2kX9eLDNdJ7"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-dairy-green hover:text-dairy-light-green underline">

                 <b>Get Directions</b>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-dairy-cream p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-dairy-green mb-6">Our Shop Timing</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-dairy-brown mb-2">Opening Hours</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-dairy-brown">Monday - Friday</span>
                    <span className="font-semibold text-dairy-brown">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-dairy-brown">Saturday</span>
                    <span className="font-semibold text-dairy-brown">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-dairy-brown">Sunday</span>
                    <span className="font-semibold text-dairy-brown">9:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-dairy-brown mb-2">Shop Information</h4>
                <p className="text-dairy-brown mb-4">
                 Our shop is conveniently located in Paro Town, right next to the Children's Park and beside 99 Shwarama. Whether you're a local or a visitor, you’ll find us easily in the heart of the town, We're easy to find and always happy to welcome you!.
                </p>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
