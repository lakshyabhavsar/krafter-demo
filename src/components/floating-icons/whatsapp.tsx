"use client"
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+917603032300', '_blank');
  };

  return (
    <div 
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 cursor-pointer group"
    >
      <div className="relative">
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        
        {/* Main Button */}
        <div className="relative bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <BsWhatsapp className="w-6 h-6 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          <p className="text-sm dark:text-gray-800 font-medium">Chat with us</p>
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;