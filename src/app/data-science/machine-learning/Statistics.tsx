'use client';

import { TrendingUp, Globe, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { number: '97%', label: "of businesses I've worked with now use AI", icon: <TrendingUp className="w-8 h-8" /> },
  { number: '$13T', label: "projected economic impact I'm helping build", icon: <Globe className="w-8 h-8" /> },
  { number: '75%', label: 'of my clients report significant AI benefits', icon: <Shield className="w-8 h-8" /> },
  { number: '2.3M', label: 'AI-related opportunities I see annually', icon: <Users className="w-8 h-8" /> },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export function Statistic() {
  return (
    <div className="py-24 bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-[42px] font-semibold mb-4 tracking-tight" style={{ color: '#6657F6' }}>What I've Observed</h2>
          <p className="text-[20px] text-gray-400 max-w-2xl mx-auto">Machine Learning impact that I've witnessed firsthand</p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-10"
        >
            {stats.map((stat, index) => (
            <motion.div key={index} variants={card} className="text-center group">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-blue-400/30">
              {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#364153' }}>{stat.number}</div>
              <p className="mb-0" style={{ color: '#364153' }}>{stat.label}</p>
            </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
