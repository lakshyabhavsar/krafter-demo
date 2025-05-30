import React from "react";
import DataCube from "./DataCube";
import { ChevronDown } from "lucide-react";

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-ck-black flex flex-col justify-center items-center overflow-hidden">
      <FloatingParticles />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-purple-600/20 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-600/20 rounded-full blur-3xl animate-ping"
          style={{ animationDuration: "8s" }}
        />
      </div>

      <DataCube />

      <div className="container mx-auto relative z-10 text-center px-4 pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Discover Patterns <br />
          <span className="gradient-text">Hidden in Data</span>
        </h1>

        <p
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Extract meaningful trends and relationships from vast datasets using
          statistical models, clustering, and classification techniques.
        </p>

        <button
          className="bg-gradient-ck text-white py-3 px-8 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Explore Capabilities
        </button>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center animate-float">
        <a
          href="#capabilities"
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
