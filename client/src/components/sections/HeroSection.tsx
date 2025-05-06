import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Custom Software<br />
              <span className="text-black">Solutions</span> That Work
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              We build powerful, scalable software that drives business growth and solves complex problems.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/work">
                <Button className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6">
                  View Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white hover:bg-gray-50 text-black border border-black font-medium py-3 px-6">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-4/5 h-4/5 hero-gradient rounded-full filter blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Software development team at work" 
              className="rounded-xl shadow-lg w-full h-auto border border-gray-200"
            />
          </div>
        </div>
        
        <div className="mt-20 md:mt-28 text-center">
          <h2 className="text-2xl font-bold mb-8">Trusted By Innovative Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex justify-center">
                <div className="h-10 bg-gray-100 border border-gray-200 rounded w-32 flex items-center justify-center text-gray-500">
                  Client Logo
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
