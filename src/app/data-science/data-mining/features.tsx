'use client'
import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

export default function FeaturesSection() {
    const [isVisible, setIsVisible] = useState({ intro: false });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible({ intro: true });
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] relative overflow-hidden">
            <div className="flex justify-center items-center min-h-screen">
                <div
                    className={`max-w-6xl w-full bg-gradient-to-r from-white/80 via-purple-50/80 to-cyan-50/80 backdrop-blur-lg rounded-3xl p-20 shadow-2xl mb-24 border border-white/50 transform transition-all duration-1000 ${
                        isVisible.intro ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                    data-section="intro"
                >
                    <div className="flex items-start gap-12">
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                                <Brain className="w-10 h-10 text-white animate-bounce" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-5xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-8">
                                Why Data Mining Matters Today
                            </h2>
                            <p className="text-2xl text-gray-700 leading-relaxed mb-6 animate-fade-in">
                                {"As codeKrafter, I've witnessed firsthand how data mining has evolved from a niche technical practice to an essential business capability. In this current phase of digital transformation, organizations are drowning in data but starving for insights. Data mining bridges this gap, turning raw information into actionable intelligence."}
                            </p>
                            <p className="text-2xl text-gray-700 leading-relaxed animate-fade-in">
                                {"The importance of data mining today cannot be overstated. We're living in an era where data is generated at an unprecedented scale—every click, transaction, and interaction creates valuable information that, when properly analyzed, can reveal patterns that drive innovation and competitive advantage."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}