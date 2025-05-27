"use client";
import React from "react";
import { PinContainer } from "./3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-auto min-h-[40rem] w-full flex items-center justify-center bg-foreground light:bg-background overflow-x-hidden px-4 py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-7xl flex flex-wrap justify-center gap-y-16 md:gap-8 lg:gap-6">
        {/* Space Station Card */}
        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] flex justify-center">
          <PinContainer title="Space Station" href="https://github.com/serafimcloud">
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[280px] sm:w-[320px] md:w-[20rem] h-[20rem] bg-gradient-to-b from-slate-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                <div className="text-xs text-slate-400">Live Connection</div>
              </div>

              <div className="flex-1 mt-4 space-y-4">
                <div className="text-2xl font-bold text-slate-100">
                  Space Station Alpha
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-sky-400">427</div>
                    <div className="text-xs text-slate-400">Days in Orbit</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-emerald-400">98%</div>
                    <div className="text-xs text-slate-400">Systems Online</div>
                  </div>
                </div>

                <div className="relative h-20 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="absolute w-full h-20"
                      style={{
                        background: `linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`,
                        animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
                        opacity: 0.3 / i,
                        transform: `translateY(${i * 10}px)`,
                      }}
                    />
                  ))}
                </div>

                <div className="flex justify-between items-end">
                  <div className="text-xs text-slate-400">
                    Last ping: 3 seconds ago
                  </div>
                  <div className="text-sky-400 text-sm font-medium">
                    Connect →
                  </div>
                </div>
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Mission Control Card */}
        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] flex justify-center">
          <PinContainer title="Mission Control" href="https://github.com/serafimcloud">
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[280px] sm:w-[320px] md:w-[20rem] h-[20rem] bg-gradient-to-b from-slate-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-green-500 animate-pulse" />
                <div className="text-xs text-slate-400">Command Center</div>
              </div>
              <div className="flex-1 mt-4 space-y-4">
                <div className="text-2xl font-bold text-slate-100">
                  Mission Control
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-purple-400">24/7</div>
                    <div className="text-xs text-slate-400">Operations</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-yellow-400">100%</div>
                    <div className="text-xs text-slate-400">Uptime</div>
                  </div>
                </div>
                {/* Same wave animation div */}
                <div className="relative h-20 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="absolute w-full h-20"
                      style={{
                        background: `linear-gradient(180deg, transparent 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)`,
                        animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
                        opacity: 0.3 / i,
                        transform: `translateY(${i * 10}px)`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-xs text-slate-400">
                    Active missions: 5
                  </div>
                  <div className="text-purple-400 text-sm font-medium">
                    Monitor →
                  </div>
                </div>
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Launch Site Card */}
        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] flex justify-center">
          <PinContainer title="Launch Site" href="https://github.com/serafimcloud">
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[280px] sm:w-[320px] md:w-[20rem] h-[20rem] bg-gradient-to-b from-slate-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-orange-500 animate-pulse" />
                <div className="text-xs text-slate-400">Launch Pad</div>
              </div>
              <div className="flex-1 mt-4 space-y-4">
                <div className="text-2xl font-bold text-slate-100">
                  Launch Complex
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-orange-400">T-3</div>
                    <div className="text-xs text-slate-400">Days to Launch</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-red-400">85%</div>
                    <div className="text-xs text-slate-400">Preparation</div>
                  </div>
                </div>
                {/* Same wave animation div */}
                <div className="relative h-20 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="absolute w-full h-20"
                      style={{
                        background: `linear-gradient(180deg, transparent 0%, rgba(249, 115, 22, 0.1) 50%, transparent 100%)`,
                        animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
                        opacity: 0.3 / i,
                        transform: `translateY(${i * 10}px)`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-xs text-slate-400">
                    Weather: Optimal
                  </div>
                  <div className="text-orange-400 text-sm font-medium">
                    Prepare →
                  </div>
                </div>
              </div>
            </div>
          </PinContainer>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}