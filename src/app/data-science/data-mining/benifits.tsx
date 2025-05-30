'use client'
import React, { useState, useEffect } from 'react';
import { Database, TrendingUp, Brain, Shield, Target, Zap, BarChart3, Users, ChevronDown, Sparkles } from 'lucide-react';

export default function BenefitSection() {
    const [isVisible, setIsVisible] = useState({ benefits: false });

    useEffect(() => {
        // Trigger the animation on mount
        setTimeout(() => setIsVisible({ benefits: true }), 100);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] relative overflow-hidden flex items-center justify-center">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 transform transition-all duration-1000 ${
              isVisible.benefits ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            data-section="benefits"
          >
          {[
            { icon: TrendingUp, title: 'Predictive Analytics', desc: 'Forecast future trends and behaviors by analyzing historical patterns, enabling proactive decision-making and strategic planning.', gradient: 'from-green-400 to-emerald-600', delay: '0s' },
            { icon: Target, title: 'Customer Insights', desc: 'Understand customer behavior, preferences, and segments to deliver personalized experiences and improve retention rates.', gradient: 'from-blue-400 to-cyan-600', delay: '0.1s' },
            { icon: Shield, title: 'Risk Detection', desc: 'Identify anomalies, fraud patterns, and potential risks before they impact your business operations or security.', gradient: 'from-purple-400 to-pink-600', delay: '0.2s' },
            { icon: Zap, title: 'Process Optimization', desc: 'Streamline operations by identifying inefficiencies and bottlenecks in your business processes through data analysis.', gradient: 'from-orange-400 to-red-600', delay: '0.3s' },
            { icon: BarChart3, title: 'Market Intelligence', desc: 'Gain competitive advantages by analyzing market trends, competitor behavior, and industry patterns.', gradient: 'from-indigo-400 to-purple-600', delay: '0.4s' },
            { icon: Users, title: 'Personalization', desc: 'Create tailored experiences for users by understanding individual preferences and behavior patterns at scale.', gradient: 'from-teal-400 to-green-600', delay: '0.5s' }
          ].map((item, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 animate-fade-in mx-auto w-full max-w-md"
              style={{ animationDelay: item.delay }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                <item.icon className="w-10 h-10 text-white animate-pulse" />
              </div>
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        </div>
    )
}