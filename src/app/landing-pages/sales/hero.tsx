'use client'; // Only needed for Next.js App Router

import { motion } from 'framer-motion';
import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.4),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,119,198,0.4),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(120,219,255,0.3),_transparent_50%)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 font-medium">Next-Gen Sales Platform</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Streamline Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sales Process
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From quotation to invoice – manage all your sales operations with 
            <span className="text-blue-300 font-semibold"> AI-powered automation</span> and 
            <span className="text-purple-300 font-semibold"> real-time analytics</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { icon: TrendingUp, label: "Revenue Growth", value: "150%" },
              { icon: Users, label: "Happy Clients", value: "10K+" },
              { icon: Zap, label: "Time Saved", value: "80%" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
                <stat.icon className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-bold">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

          </motion.div>

          {/* Bottom feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 flex flex-wrap justify-center gap-6 text-white/60"
          >
            {["Real-time Analytics", "AI-Powered Insights", "Seamless Integration", "Mobile Ready"].map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
