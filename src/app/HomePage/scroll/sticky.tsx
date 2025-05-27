"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Fix content type definition
export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  // Fix ref type
  const ref = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = React.useState(0);
  const [activeSection, setActiveSection] = useState('products'); // Add this
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgb(15 23 42)", // slate-900
    "rgb(0 0 0)", // black
    "rgb(23 23 23)", // neutral-900
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, rgb(236 72 153), rgb(99 102 241))", // pink-500 to indigo-500
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))", // orange-500 to yellow-500
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))",
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  // Fix useEffect dependency
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  // Add menu click handler
  // Update the content splitting logic
  const productsContent = content.slice(0, Math.ceil(content.length / 2));
  const servicesContent = content.slice(Math.ceil(content.length / 2));
  
  // Update the handleMenuClick function
  const handleMenuClick = (section: string) => {
    if (ref.current) {
      // First reset scroll position
      ref.current.scrollTo({ top: 0, behavior: 'instant' });
      // Then update section and active card
      setActiveSection(section);
      setActiveCard(0);
      // Apply smooth transition after state updates
      requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  };
  
  // Update the scroll event handling
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentContent = activeSection === 'products' ? productsContent : servicesContent;
    const sectionLength = currentContent.length;
    const cardsBreakpoints = currentContent.map((_, index) => index / sectionLength);
    
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Add state for menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    // Update the content container styles
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[40rem] relative flex rounded-md p-10 "
      ref={ref}
    >
      {/* Mobile Menu - Centered on left side */}
      <div className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 backdrop-blur-md px-3 py-4 transition-all rounded-r-xl border-r border-t border-b border-white/10"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            className="text-white"
          >
            ▶
          </motion.div>
        </button>
  
        {/* Vertical Menu Options */}
        <motion.div
          initial={false}
          animate={{
            width: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
            x: isMenuOpen ? 0 : -50
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-1/2 left-full -translate-y-1/2 overflow-hidden bg-gradient-to-r from-black/50 to-transparent backdrop-blur-lg rounded-r-xl"
        >
          <div className="p-2 flex flex-col gap-3 min-w-[150px]">
            <div
              className={`relative px-4 py-3 cursor-pointer transition-all ${
                activeSection === 'products' 
                  ? 'text-white' 
                  : 'text-white/50 hover:text-white/70'
              }`}
              onClick={() => {
                handleMenuClick('products');
                setIsMenuOpen(false);
              }}
            >
              {activeSection === 'products' && (
                <motion.div
                  layoutId="mobile-active-indicator"
                  className="absolute left-0 top-0 w-[3px] h-full bg-blue-500"
                />
              )}
              Products
            </div>
            <div
              className={`relative px-4 py-3 cursor-pointer transition-all ${
                activeSection === 'services' 
                  ? 'text-white' 
                  : 'text-white/50 hover:text-white/70'
              }`}
              onClick={() => {
                handleMenuClick('services');
                setIsMenuOpen(false);
              }}
            >
              {activeSection === 'services' && (
                <motion.div
                  layoutId="mobile-active-indicator"
                  className="absolute left-0 top-0 w-[3px] h-full bg-blue-500"
                />
              )}
              Services
            </div>
          </div>
        </motion.div>
      </div>
  
      {/* Desktop Menu */}
      <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col gap-6 z-10">
      <div
          className={`relative px-6 py-2 cursor-pointer transition-all text-3xl font-semibold tracking-wide ${
            activeSection === 'products' 
              ? 'text-white' 
              : 'text-white/50 hover:text-white/70'
          }`}
          onClick={() => handleMenuClick('products')}
        >
          {activeSection === 'products' && (
            <motion.div
              layoutId="active-indicator"
              className="absolute left-0 top-0 w-[3px] h-full bg-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          Product
        </div>
        <div
          className={`relative px-6 py-2 cursor-pointer transition-all text-3xl font-semibold tracking-wide ${
            activeSection === 'services' 
              ? 'text-white' 
              : 'text-white/50 hover:text-white/70'
          }`}
          onClick={() => handleMenuClick('services')}
        >
          {activeSection === 'services' && (
            <motion.div
              layoutId="active-indicator"
              className="absolute left-0 top-0 w-[3px] h-full bg-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          Services
        </div>
</div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {(activeSection === 'products' ? productsContent : servicesContent).map((item, index) => (
          <motion.div 
            key={item.title + index} 
            className="h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: 1,  // Changed from conditional opacity
              y: 0
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            <motion.div
              style={{ background: backgroundGradient }}
              className={cn(
                "block h-64 lg:h-96 w-full lg:w-[450px] rounded-lg bg-white overflow-hidden",
                contentClassName
              )}
              animate={{ 
                opacity: 1,  // Changed from conditional opacity
                scale: 1     // Changed from conditional scale
              }}
            >
              {item.content}
            </motion.div>
  
            <div className="max-w-2xl text-center lg:text-left">
              <motion.h2 
                className="text-3xl font-bold text-slate-100"
                animate={{ opacity: 1 }}  // Changed from conditional opacity
              >
                {item.title}
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-300 max-w-sm mt-6"
                animate={{ opacity: 1 }}  // Changed from conditional opacity
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};