"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Smartphone } from "lucide-react";
import { Vortex } from "./ui/vortex";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
          "-=1"
        );

      // Floating animation for icons
      gsap.to(".floating-icon", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="parallax-bg absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 floating-icon">
            <Smartphone size={60} className="text-blue-500" />
          </div>
          <div className="absolute top-40 right-20 floating-icon">
            <Smartphone size={40} className="text-purple-500" />
          </div>
          <div className="absolute bottom-40 left-20 floating-icon">
            <Smartphone size={50} className="text-indigo-500" />
          </div>
        </div>

        <div className="container mx-auto px-6 text-center z-10">
          <h1
            ref={titleRef}
            className="text-white text-2xl md:text-6xl font-bold text-center mb-4 md:mb-6"
          >
            Transform Your Ideas Into Powerful Mobile Applications
          </h1>

          <p
            ref={subtitleRef}
            className="text-[22px] font-normal text-white mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how mobile applications are revolutionizing the way we
            interact with technology, transforming businesses, and creating
            unprecedented opportunities in the digital landscape.
          </p>

          <div className="animate-bounce">
            <ArrowDown size={32} className="text-gray-500 mx-auto" />
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default Hero;
