import React from 'react';
import { Search, BarChart3, TrendingUp, Eye, Lightbulb, Database, ArrowRight, Sparkles, LineChart, PieChart } from 'lucide-react';
export default function Hero() {
  return (
     <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 mt-30 pt-30">
          <div className="text-center">
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full blur-2xl opacity-40"></div>
                <Search className="relative h-28 w-28 text-cyan-400 animate-bounce" />
              </div>
            </div>
            <h1 className="text-[56px] font-semibold text-white mb-8 tracking-tight leading-tight">
              Data Exploration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                The Foundation of Insight
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Hi, I'm <span className="text-cyan-400 font-semibold">codeKrafter</span>, and I believe data exploration is the cornerstone of every successful data science project. It's where stories hidden in numbers come to life.
            </p>
          </div>
        </div>
      </div>

  );}