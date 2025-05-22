
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-dairy-cream">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <h1 className="text-6xl font-bold font-playfair text-dairy-brown mb-4">404</h1>
          <p className="text-2xl text-dairy-green mb-6">
            Oops! This page has wandered off to graze.
          </p>
          <p className="text-dairy-brown mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button
            className="bg-dairy-green hover:bg-dairy-light-green text-white py-2 px-6 rounded-full"
            onClick={() => window.location.href = "/"}
          >
            Return to Homepage
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
