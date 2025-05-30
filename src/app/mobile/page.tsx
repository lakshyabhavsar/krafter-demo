"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./hero";
import ImportanceSection from "./importance-section";
import AppTypesSection from "./types-section";
import ProcessSection from "./process-section";
import Footer from "./footer";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const MobileApp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.fromTo(
        ".animate-section",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".animate-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax effect for hero background
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-bg",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen w-full relative">
      <Hero />
      <ImportanceSection/>
      <AppTypesSection />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default MobileApp;
