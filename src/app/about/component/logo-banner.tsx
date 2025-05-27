"use client"

import { useState, useRef } from "react"

interface LogoBannerProps {
  logoSrc: string;
  accentColor?: string;
}

export default function LogoBanner({ 
  logoSrc,
  
}: LogoBannerProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const bannerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bannerRef.current) return
    
    const rect = bannerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateXValue = ((y - centerY) / centerY) * 20
    const rotateYValue = ((centerX - x) / centerX) * 20
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  return (
    <div 
      ref={bannerRef}
      className={`relative rounded-lg overflow-hidden p-4 m-2 transition-all duration-300 ease-out h-[88px] flex items-center justify-center ${
        isHovered ? "shadow-2xl scale-105" : "shadow-lg"
      }`}
      style={{
        background: "linear-gradient(145deg,rgb(206, 203, 203),rgb(182, 173, 173),rgb(146, 144, 144))",
        outline: "1px solid rgba(117, 117, 117, 0.4)",
        outlineOffset: "-4px",
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)` 
          : "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)",
        transformStyle: "preserve-3d",
        transition: "all 0.3s ease-out",
        boxShadow: isHovered 
          ? "inset 0 0 20px rgba(255,255,255,0.5), 0 8px 16px rgba(0,0,0,0.1)" 
          : "inset 0 0 10px rgba(255,255,255,0.2), 0 4px 8px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setRotateX(0)
        setRotateY(0)
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Metallic shine effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          transform: `translateX(${isHovered ? '200%' : '-100%'})`,
          transition: "transform 0.6s ease-in-out",
        }}
      />

      {/* Rainbow edge effect */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.8), transparent)",
          opacity: isHovered ? 0.3 : 0,
          transition: "opacity 0.3s ease-out",
        }}
      />

      <div 
        className="relative z-10" 
        style={{ 
          transform: isHovered ? "translateZ(50px)" : "translateZ(0)",
          transition: "transform 0.3s ease-out"
        }}
      >
        <img 
          src={logoSrc} 
          alt="Award Logo" 
          className="w-70 h-11 object-contain" // Fixed the width syntax
        />
      </div>
    </div>
  )
}