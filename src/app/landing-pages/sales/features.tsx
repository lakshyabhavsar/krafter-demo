'use client';
import React from 'react';
import { BarChart3, FileText, Package, Clock, Truck, Receipt, Archive, RotateCcw } from 'lucide-react';

const features = [
  { name: 'Sales Quotation', icon: FileText, color: 'from-blue-500 to-blue-600' },
  { name: 'Sales Order', icon: Package, color: 'from-emerald-500 to-emerald-600' },
  { name: 'Sales Invoice', icon: Receipt, color: 'from-purple-500 to-purple-600' },
  { name: 'Sales Dispatch', icon: Truck, color: 'from-orange-500 to-orange-600' },
  { name: 'Sales Analytics', icon: BarChart3, color: 'from-cyan-500 to-cyan-600' },
  { name: 'Order Tracking', icon: Clock, color: 'from-yellow-500 to-yellow-600' },
  { name: 'Returns', icon: RotateCcw, color: 'from-red-500 to-red-600' },
  { name: 'Reports', icon: Archive, color: 'from-indigo-500 to-indigo-600' }
];

export default function FeatureSection() {
  return (
    <section className="py-20 px-6 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,180,255,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,200,250,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(180,240,255,0.12),_transparent_60%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-6">
          Sales Management Software
        </h2>
        <p className="text-slate-700 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
          Streamline your entire sales process with our comprehensive management platform
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group relative p-8 bg-white/5 backdrop-blur-md border border-blue-200/60 rounded-2xl hover:bg-white/10 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-slate-800 text-xl font-semibold group-hover:text-blue-700 transition-colors">
                  {feature.name}
                </h3>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
