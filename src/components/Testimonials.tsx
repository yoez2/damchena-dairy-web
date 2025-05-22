
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chencho Bidha",
    position: "Local Restaurant Owner",
    quote: "Damchena's cheese has elevated our traditional dishes to new heights. The quality is unmatched and our customers can taste the difference.",
    image: "/images/restuarant owner.jpg"
  },
  {
    id: 2,
    name: "Dawa Yoezer Dorji",
    position: "Daily Customer",
    quote: "I've been using Damchena products for years. Their Curd has the perfect consistency and a wonderful tangy flavor. i go there everyday to buy their products ",
    image: "/images/daily customer.jpg"
  },
  {
    id: 3,
    name: "Tshering Wangda",
    position: "chef in Austrilia",
    quote: "As someone who values quality ingredients, I can confidently say that Damchena's dairy products are among the finest in Paro, i recommend you all guys out  there.",
    image: "/images/chef.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dairy-brown mb-6">What People Say</h2>
          <div className="w-20 h-1 bg-dairy-light-green mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-dairy-brown">
            Don't just take our word for it. Hear what our customers have to say about Damchen Dairy products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-8 bg-dairy-cream">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-dairy-brown">{testimonial.name}</h3>
                    <p className="text-dairy-brown opacity-75">{testimonial.position}</p>
                  </div>
                </div>
                <div className="relative">
                  <svg 
                    className="absolute -top-4 -left-2 w-10 h-10 text-dairy-light-green opacity-20" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.35-1.48 2.46-2.03l-1.9-2.54c-1.62.91-2.84 1.98-3.66 3.2C4.4 9.925 4 11.43 4 13.24c0 1.515.38 2.768 1.14 3.76.76.98 1.74 1.47 2.96 1.47 1.03 0 1.87-.34 2.52-1.02.65-.67.97-1.51.97-2.52l-.38-.83zm9.08 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.824-.56-.13-1.07-.14-1.54-.03-.16-.95.1-1.95.78-3 .52-.81 1.34-1.48 2.46-2.03L18.06 5.12c-1.63.9-2.85 1.97-3.66 3.2-.82 1.2-1.22 2.7-1.22 4.52 0 1.512.38 2.768 1.14 3.76.76.988 1.74 1.48 2.96 1.48 1.03 0 1.87-.344 2.52-1.03.65-.673.97-1.512.97-2.52l-.38-.83z" />
                  </svg>
                  <p className="text-dairy-brown relative z-10">{testimonial.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
