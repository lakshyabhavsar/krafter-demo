'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileText, 
  Clock, 
  Package, 
  Truck, 
  FileSearch, 
  BarChart3, 
  Receipt, 
  Star, 
  Upload, 
  XCircle, 
  CreditCard, 
  AlertTriangle, 
  RefreshCw, 
  CheckCircle 
} from 'lucide-react';

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const features = [
    { name: "Requisition", icon: FileText, description: "Streamlined request management", color: "from-blue-50 to-blue-100" },
    { name: "Pending Purchase Order", icon: Clock, description: "Track order status in real-time", color: "from-amber-50 to-amber-100" },
    { name: "Order Receive Register", icon: Package, description: "Comprehensive receiving logs", color: "from-emerald-50 to-emerald-100" },
    { name: "Purchase Receive", icon: Truck, description: "Efficient delivery processing", color: "from-purple-50 to-purple-100" },
    { name: "Receive Register Details", icon: FileSearch, description: "Detailed receiving records", color: "from-indigo-50 to-indigo-100" },
    { name: "Purchase Assorting", icon: BarChart3, description: "Smart categorization system", color: "from-teal-50 to-teal-100" },
    { name: "Purchase Register", icon: Receipt, description: "Complete purchase history", color: "from-pink-50 to-pink-100" },
    { name: "Invoice", icon: Receipt, description: "Automated invoice generation", color: "from-rose-50 to-rose-100" },
    { name: "Supplier Rating", icon: Star, description: "Performance evaluation tools", color: "from-yellow-50 to-yellow-100" },
    { name: "Invoice Document Upload/Download", icon: Upload, description: "Seamless document handling", color: "from-cyan-50 to-cyan-100" },
    { name: "Rejection Letter", icon: XCircle, description: "Automated rejection workflows", color: "from-red-50 to-red-100" },
    { name: "Purchase Advance Receive", icon: CreditCard, description: "Advance payment tracking", color: "from-green-50 to-green-100" },
    { name: "Pending Purchase Invoice", icon: AlertTriangle, description: "Outstanding invoice alerts", color: "from-orange-50 to-orange-100" },
    { name: "Purchase Return", icon: RefreshCw, description: "Simplified return process", color: "from-violet-50 to-violet-100" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={containerRef} className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(59,130,246,0.05),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(16,185,129,0.05),_transparent_50%)]"></div>

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full border border-emerald-200 mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
          >
        <CheckCircle className="w-4 h-4 text-emerald-600" />
        <span className="text-sm text-emerald-700 font-medium">Complete Procurement Suite</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-emerald-700 bg-clip-text text-transparent">
          Everything You Need to
        </span>
        <br />
        <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
          Manage Procurement
        </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        From initial requisitions to final returns, our comprehensive platform handles every aspect of your procurement workflow.
          </p>
        </motion.div>

        {/* Scrolling Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Scroll hint */}
          <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
          <span className="text-sm text-gray-600">Scroll to explore features</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-150"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
          </div>

          {/* Vertical scrolling container */}
          <div className="overflow-y-auto max-h-[600px] scrollbar-hide">
            <div className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative w-full"
                >
                  <div className={`relative p-8 bg-gradient-to-br ${feature.color} rounded-2xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-sm overflow-hidden`}>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-bl-2xl opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/30 rounded-tr-2xl opacity-40"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        className="w-14 h-14 bg-white/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md"
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <feature.icon className="w-7 h-7 text-gray-700" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                        {feature.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group px-10 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 rounded-2xl font-semibold text-white text-lg shadow-lg shadow-emerald-500/25 transition-all duration-500 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">Explore All Features</span>
        </motion.button>
        
        <div className="text-gray-600 text-sm">
          <span className="block font-medium">14+ Powerful Tools</span>
          <span className="text-emerald-600">Ready to Transform Your Workflow</span>
        </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [-10, 10],
          rotate: [0, 180],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, repeatType: "reverse" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-blue-200/40 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [10, -10],
          rotate: [180, 0],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, repeatType: "reverse" },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-20 right-16 w-20 h-20 bg-emerald-200/30 rounded-full blur-2xl"
      />
    </section>
  );
}
