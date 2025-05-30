'use client'
import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';

export default function CurrentPhase() {
    const [isVisible, setIsVisible] = useState({ benefits: false });

    useEffect(() => {
        // Trigger the animation after mount
        const timer = setTimeout(() => {
            setIsVisible({ benefits: true });
        }, 100); // slight delay for smooth animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] relative overflow-hidden flex items-center justify-center">
            <div
                className={`bg-gradient-to-r from-purple-100/80 via-pink-50/80 to-cyan-100/80 backdrop-blur-lg rounded-3xl p-20 shadow-2xl mb-24 border border-white/50 max-w-6xl w-full transform transition-all duration-1000 ${
                    isVisible.benefits ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                data-section="landscape"
            >
                <h2 className="text-5xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-16 text-center animate-pulse">
                    The Current Data Mining Landscape
                </h2>
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Card 1 */}
                    <div className="transform hover:scale-105 transition-transform duration-500">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 animate-spin" style={{ animationDuration: '8s' }}>
                            <Sparkles className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
                            Technological Advancement
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6 text-xl">
                            The convergence of artificial intelligence, machine learning, and big data technologies has revolutionized data mining capabilities. Modern algorithms can process vast datasets in real-time, uncovering insights that were previously impossible to discover.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-xl">
                            Cloud computing has democratized access to powerful data mining tools, allowing organizations of all sizes to leverage sophisticated analytics without massive infrastructure investments.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="transform hover:scale-105 transition-transform duration-500">
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8 animate-bounce">
                            <TrendingUp className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent mb-6">
                            Business Impact
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6 text-xl">
                            Companies that effectively implement data mining strategies are seeing measurable improvements in revenue, customer satisfaction, and operational efficiency. The ability to make data-driven decisions has become a key differentiator in competitive markets.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-xl">
                            From healthcare to finance, retail to manufacturing, every industry is leveraging data mining to solve complex problems and create new opportunities for growth and innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}