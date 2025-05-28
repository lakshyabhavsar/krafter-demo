'use client';

import { Brain, Zap, Globe, TrendingUp, Users, Shield } from 'lucide-react';

export function FeaturesSection() {
  return (
    // Features Section
    <div className="py-20 bg-gradient-to-tr from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[42px] font-medium text-gray-900 mb-4">
            Why I Believe Machine Learning Matters Today
          </h2>
          <p className="text-[22px] font-normal text-gray-600 max-w-3xl mx-auto">
            {"Through my development journey, I've seen how machine learning has become the cornerstone of innovation, "}
            {"driving unprecedented advancements across every project I touch."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Accelerated Development",
              description: "I've watched ML algorithms process complex datasets in seconds, enabling breakthrough solutions that would have taken me months to develop manually.",
              color: "bg-yellow-500"
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Global Impact",
              description: "My projects now break language barriers and connect cultures through real-time translation and cross-cultural understanding.",
              color: "bg-green-500"
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Business Growth",
              description: "I'm helping drive $13 trillion in global economic value by 2030, creating new industries and transforming existing ones through my work.",
              color: "bg-purple-500"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Personalized Solutions",
              description: "I now build services that adapt to individual needs, from healthcare applications to educational platforms that learn from users.",
              color: "bg-blue-500"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Enhanced Security",
              description: "My security implementations now use advanced threat detection and predictive measures to protect digital infrastructure.",
              color: "bg-red-500"
            },
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Cognitive Enhancement",
              description: "I'm building tools that amplify human intelligence and creativity, enabling solutions to previously impossible challenges.",
              color: "bg-indigo-500"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
