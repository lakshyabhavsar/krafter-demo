import React from 'react';
import { BarChart3 } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-gradient-to-br from-indigo-400 via-sky-300 to-emerald-200 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-sky-400 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[26px] font-bold mb-6 text-indigo-900 drop-shadow">
              Why Data Exploration Matters to Me
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-indigo-900/90">
              In my journey as a data scientist, I've learned that data exploration isn't just a preliminary step—it's the foundation that determines the success of every project. It's where I uncover the stories that raw data wants to tell.
            </p>
            <p className="text-lg leading-relaxed text-indigo-900/90">
              Through exploration, I transform chaotic datasets into meaningful insights, identifying patterns that drive business decisions and innovation.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/40 via-sky-200/40 to-indigo-300/40 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/90 rounded-2xl p-8 border border-emerald-200 shadow-lg">
              <BarChart3 className="h-16 w-16 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">My Exploration Philosophy</h3>
              <p className="text-emerald-800">Every dataset has a story. My job is to listen carefully and let the data guide me to the truth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}