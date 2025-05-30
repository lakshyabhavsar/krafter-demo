'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white/20 backdrop-blur-2xl rounded-3xl p-10 sm:p-12 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
        <h2 className="text-[42px] font-semibold text-gray-900 mb-6 leading-snug">
          Ready to Transform Your Data
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Into Actionable Insights?
          </span>
        </h2>
        <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
          As <strong className="font-semibold">codeKrafter</strong>, I'm passionate about helping organizations unlock the full potential of their data through systematic exploration.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          Start Your Data Journey
          <ArrowRight className="ml-2 h-5 w-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
