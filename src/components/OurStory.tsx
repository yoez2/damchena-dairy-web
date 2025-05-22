
import React from 'react';

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src="/images/our story.jpg" 
              alt="Cows grazing in Bhutan" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-dairy-brown mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-dairy-light-green mb-8"></div>
            <p className="text-lg mb-6 text-dairy-brown">
            Nestled in the serene village of Damchena in Paro, Bhutan, Damchena Dairy Products with a simple mission: to craft the finest dairy products while honoring traditional Bhutanese farming practices.
            </p>
            <p className="text-lg mb-6 text-dairy-brown">
            Our journey began in 2019, alongside local farmers from Damchena village, combined traditional knowledge with modern techniques to create dairy products that reflect the purity of our land.personally collecting fresh milk from the village and transports it to Thimphu, Paro, and our shop, ensuring the highest quality in every product.
            </p>
            <p className="text-lg mb-8 text-dairy-brown">
            Today, our family collects fresh milk directly from the village, ensuring fair compensation for farmers while delivering exceptional quality to our customers. Each product reflects our commitment to sustainability and our love for the work.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-dairy-cream p-4 rounded-lg text-center flex-1 min-w-[150px]">
                <h3 className="text-3xl font-bold text-dairy-green mb-2">100%</h3>
                <p className="text-dairy-brown">Organic</p>
              </div>
              <div className="bg-dairy-cream p-4 rounded-lg text-center flex-1 min-w-[150px]">
                <h3 className="text-3xl font-bold text-dairy-green mb-2">50+</h3>
                <p className="text-dairy-brown">Local Farmers</p>
              </div>
              <div className="bg-dairy-cream p-4 rounded-lg text-center flex-1 min-w-[150px]">
                <h3 className="text-3xl font-bold text-dairy-green mb-2">7+</h3>
                <p className="text-dairy-brown">Years of Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
