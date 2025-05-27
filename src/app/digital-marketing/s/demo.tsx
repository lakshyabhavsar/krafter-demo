"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const PodcastCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Define transforms outside of the render
  const firstCardOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    [1, 0.4]
  );
  const secondCardOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    [0, 1]
  );
  const firstCardScale = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    [1, 0.9]
  );
  const firstCardY = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    [0, -200]
  );
  const firstCardClip = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ['inset(0% 0% 0% 0%)', 'inset(0% 0% 50% 0%)']
  );

  const cards = [
    {
      title: "Soft Skills, Big Impact – The Real Power of Leadership Today",
      episode: "Season 2, Episode 1",
      date: "April 4, 2025",
    },
    {
      title: "Mastering difficult conversations – The leadership advantage",
      episode: "Season 2, Episode 2",
      date: "April 4, 2025",
    },
  ];

  return (
    <div ref={containerRef} className="h-[200vh] relative m-auto">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 relative">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="absolute w-full"
              style={{
                opacity: index === 0 ? firstCardOpacity : secondCardOpacity,
                scale: index === 0 ? firstCardScale : 1,
                y: index === 0 ? firstCardY : 0,
                clipPath: index === 0 ? firstCardClip : 'none',
              }}
            >
              <div className={`flex flex-col md:flex-row gap-6 items-start ${index === 0 ? 'bg-black' : 'bg-black/80 backdrop-blur-sm'} rounded-2xl p-6`}>
                {/* Podcast Cover Image */}
                <div className="w-full md:w-[320px] relative aspect-square bg-black rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                  <Image
                    src="/images/mda-insights.png"
                    alt="MDA Insights Podcast"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Podcast Details Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="text-white">
                      <div className="text-sm opacity-80">{card.episode}</div>
                    </div>
                    
                    {/* Profile Images */}
                    <div className="flex flex-wrap gap-2">
                      {[1, 2].map((profile) => (
                        <div key={profile} className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                          <Image
                            src={`/images/profile${profile}.jpg`}
                            alt={`Profile ${profile}`}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Platform Icons */}
                    <div className="flex gap-2">
                      {['spotify', 'apple-podcast'].map((platform) => (
                        <Image
                          key={platform}
                          src={`/images/${platform}.png`}
                          alt={platform}
                          width={24}
                          height={24}
                          className="w-6"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 text-white">
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {card.title}
                  </h1>
                  
                  <p className="text-gray-300 text-sm md:text-base">
                    Join us for an exciting conversation as we unpack leadership challenges
                    and explore the strategies that make great leaders stand out.
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-gray-400">{card.date}</div>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                      Listen Now →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};