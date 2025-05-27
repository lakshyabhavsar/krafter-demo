"use client"
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';

const Overlay = () => {
    return (
        <div className="relative mt-0 w-full h-screen overflow-hidden">
            <motion.div 
                className="absolute inset-0"
                style={{ height: '200%' }}
                initial={{ y: "-50%" }}
                animate={{ 
                    y: ["0%", "-50%"]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <Image
                    src="/images/move-bg.jpg"
                    alt="Moving background"
                    fill
                    className="object-cover"
                    priority
                />
                <Image
                    src="/images/move-bg.jpg"
                    alt="Moving background"
                    fill
                    className="object-cover absolute top-full"
                    priority
                />
            </motion.div>
            {/* Rest of the component remains the same */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 text-white h-full flex flex-col items-center justify-center px-4 sm:px-0">
                <h2 className="text-3xl sm:text-4xl text-center font-bold mb-8">Website & Dashboard Development</h2>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 w-full max-w-md sm:max-w-none">
                <button className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30px] transition-all font-semibold duration-300 relative overflow-hidden group">
                    <div className="flex items-center justify-center">
                     <ArrowRight className="absolute transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100  transition-all duration-300" />
                     <span className="transform group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300">Ecommerce</span>
                   </div>
                   </button>
                   <button className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30px] transition-all font-semibold duration-300 relative overflow-hidden group">
                    <div className="flex items-center justify-center">
                     <ArrowRight className="absolute transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100  transition-all duration-300" />
                     <span className="transform group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300">Multivendor</span>
                   </div>
                   </button>
                    <button className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30px] transition-all font-semibold duration-300 relative overflow-hidden group">
        <div className="flex items-center justify-center">
          <ArrowRight className="absolute transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100  transition-all duration-300" />
          <span className="transform group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300">Dynamic</span>
        </div>
      </button>
                    
                    <button className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-[30px] transition-all font-semibold duration-300 relative overflow-hidden group">
                    <div className="flex items-center justify-center">
                     <ArrowRight className="absolute transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100  transition-all duration-300" />
                     <span className="transform group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300">Static</span>
                   </div>
                   </button>
                </div>
            </div>
        </div>
    );
};

export default Overlay;