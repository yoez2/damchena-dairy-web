import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dairy-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dairy-brown mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-dairy-light-green mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-dairy-brown">
          Have questions about our products or interested in our products We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl font-bold text-dairy-green mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-dairy-green mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-dairy-brown font-semibold">Phone</h4>
                    <p className="text-dairy-brown">+975 17623430</p>
                    <p className="text-dairy-brown">+975 17421278</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-dairy-green mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-dairy-brown font-semibold">Email</h4>
                    <p className="text-dairy-brown">chendad48@gmail.com</p>
                    <p className="text-dairy-brown">dawayoezer22@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-dairy-green mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-dairy-brown font-semibold">Address</h4>
                    <p className="text-dairy-brown">Damchena Dairy Products</p>
                    <p className="text-dairy-brown">Paro Town, Near Children'Park</p>
                    <p className="text-dairy-brown">Bhutan</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-dairy-brown font-semibold mb-3">contact us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-dairy-light-green flex items-center justify-center text-white hover:bg-dairy-green transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg xmlns="https://www.facebook.com/" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-dairy-green mb-6">Send Us A Message</h3>
              
              <form action=" https://formsubmit.co/dawayoezer22@gmail.com" method="POST" className="space-y-6" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-dairy-brown mb-2">Full Name</label>
                    <Input type="text" name="name" placeholder="Your name" className="border-dairy-light-brown focus:border-dairy-green" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-dairy-brown mb-2">Email Address</label>
                    <Input type="email" name="email"  placeholder="Your email" className="border-dairy-light-brown focus:border-dairy-green" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-dairy-brown mb-2">Subject</label>
                  <Input  type="text" name="subject" placeholder="Subject of your message" className="border-dairy-light-brown focus:border-dairy-green" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-dairy-brown mb-2">Message</label>
                  <Textarea  name="message" placeholder="Write your message here..." className="border-dairy-light-brown focus:border-dairy-green min-h-[150px]" />
                  <input type="hidden" name="_template" value="table"></input>
                  <input type="hidden" name="_captcha" value="false"></input>
                  <input type="hidden" name="_cc" value="chendad48@gmail.com"></input>

                </div>
                
                
                <Button type="submit" className="bg-dairy-green hover:bg-dairy-light-green text-white py-3 px-8 rounded-full text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
