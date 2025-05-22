
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Products from '@/components/Products';
import VisitUs from '@/components/VisitUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dairy-cream">
      <Navbar />
      <Hero />
      <OurStory />
      <Products />
      <Testimonials />
      <VisitUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
