'use client'
import React, { useState, useEffect } from 'react';
import { Database, Sparkles } from 'lucide-react';

export default function CTASection() {
    const [isVisible, setIsVisible] = useState({ benefits: false });

    useEffect(() => {
        // Trigger the animation after mount
        const timer = setTimeout(() => {
            setIsVisible({ benefits: true });
        }, 100); // slight delay for smooth animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] relative overflow-hidden flex items-center justify-center min-h-[60vh]">
            <div 
                className={`text-center bg-gradient-to-r from-white/70 via-purple-50/70 to-cyan-50/70 backdrop-blur-lg rounded-3xl p-16 shadow-2xl border border-white/50 transform transition-all duration-1000 ${
                    isVisible.benefits ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
                }`}
                data-section="cta"
            >
                <h2 className="text-5xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-8 animate-pulse">
                    Ready to Harness the Power of Data?
                </h2>
                <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                    As codeKrafter, I believe that understanding and implementing data mining strategies is no longer optional—it's essential for survival and growth in today's digital economy.
                </p>
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white px-12 py-6 rounded-3xl font-medium shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-rotate-1 cursor-pointer animate-bounce">
                    <Database className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
                    <span className="text-xl">Explore Data Mining Solutions</span>
                    <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
            </div>
        </div>
    )
}