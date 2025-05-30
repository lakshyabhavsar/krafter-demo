'use client';
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Initial Data Assessment',
    description:
      'I begin by understanding the data landscape—its sources, structure, and potential limitations. This foundation shapes my entire exploration strategy.',
    gradient: 'from-yellow-400 via-orange-500 to-pink-500',
  },
  {
    step: '02',
    title: 'Statistical Profiling',
    description:
      'I analyze distributions, identify outliers, and understand the statistical characteristics that will inform my deeper investigation.',
    gradient: 'from-green-400 via-emerald-500 to-teal-500',
  },
  {
    step: '03',
    title: 'Visual Discovery',
    description:
      'Through compelling visualizations, I uncover relationships and patterns that statistics alone cannot reveal. This is where insights truly emerge.',
    gradient: 'from-indigo-500 via-purple-600 to-fuchsia-500',
  },
  {
    step: '04',
    title: 'Hypothesis Formation',
    description:
      'Based on my findings, I develop testable hypotheses that guide further analysis and drive actionable business recommendations.',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
  },
];

export default function MethodologySection() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-20">
        <h2 className="text-[42px] font-semibold text-gray-900 leading-snug">
          My Data Exploration
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-violet-500 to-indigo-500">
            Process & Methodology
          </span>
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mt-4">
          Over the years, I've refined a systematic approach that consistently delivers insights.
        </p>
      </div>

      <div className="space-y-14">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-6 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <div className="flex-shrink-0">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} text-white font-bold text-xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300`}
              >
                {step.step}
              </div>
            </div>

            <div className="flex-1 bg-white/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/40 shadow-2xl transition-all duration-300">
              <h3 className="text-[22px] font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
