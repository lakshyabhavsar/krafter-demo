import React from 'react';
import { Brain, Zap, Globe, TrendingUp, Users, Shield, ChevronRight, Sparkles, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
                {"How I've Witnessed"}
                <span className="block text-blue-400">Machine Learning Transform Everything</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-gray-200 mb-8 leading-relaxed">
                {"As a developer, I've been at the forefront of the AI revolution. Let me share how machine learning has reshaped not just technology, but the entire way I approach problem-solving and innovation."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center">
                  Explore My Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-200 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-400 transition-all duration-300">
                  View My Projects
                </button>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl p-6 sm:p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white rounded-2xl p-4 sm:p-6 transform -rotate-3">
                  <div className="flex items-center justify-center">
                    <Brain className="w-20 h-20 sm:w-24 sm:h-24 text-blue-600 animate-pulse" />
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Neural Networks Active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Processing Data</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Learning Patterns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
