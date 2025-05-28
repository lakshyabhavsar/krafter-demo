
import React from 'react';
import DataCube from './DataCube';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-ck-black flex flex-col justify-center items-center overflow-hidden">
      <DataCube />
      
      <div className="container mx-auto relative z-10 text-center px-4 pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Discover Patterns <br />
          <span className="gradient-text">Hidden in Data</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Extract meaningful trends and relationships from vast datasets using 
          statistical models, clustering, and classification techniques.
        </p>
        
        <button className="bg-gradient-ck text-white py-3 px-8 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Explore Capabilities
        </button>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center animate-float">
        <a href="#capabilities" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;