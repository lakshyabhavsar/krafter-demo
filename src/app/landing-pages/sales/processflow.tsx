// 'use client';

// import { motion } from 'framer-motion';

// const steps = [
//   "Create Sales Quotation",
//   "Generate Sales Order & Challan",
//   "Dispatch Goods",
//   "Raise Invoice",
//   "Monitor Registers & Reports",
//   "Handle Returns & Adjustments",
// ];

// export default function ProcessFlowSection() {
//   return (
//     <section className="py-24 px-6 bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-gray-900">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold mb-12 text-indigo-700">Sales Workflow Overview</h2>
//         <ol className="space-y-8 max-w-3xl mx-auto text-left list-decimal list-inside">
//           {steps.map((step, i) => (
//             <motion.li
//               key={i}
//               className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.12, duration: 0.45 }}
//               viewport={{ once: true }}
//             >
//               <span className="text-lg font-semibold text-indigo-900">{step}</span>
//             </motion.li>
//           ))}
//         </ol>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Zap,
  FileText,
  Truck,
  Receipt,
  BarChart3,
  RotateCcw
} from 'lucide-react';

const steps = [
  {
    title: "Create Sales Quotation",
    description: "Generate professional quotes with real-time pricing",
    icon: FileText,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Generate Sales Order & Challan",
    description: "Convert quotes to orders with automated documentation",
    icon: CheckCircle,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Dispatch Goods",
    description: "Efficient logistics and shipment tracking",
    icon: Truck,
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Raise Invoice",
    description: "Automated billing with tax calculations",
    icon: Receipt,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Monitor Registers & Reports",
    description: "Real-time analytics and comprehensive reporting",
    icon: BarChart3,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Handle Returns & Adjustments",
    description: "Seamless return processing and inventory adjustments",
    icon: RotateCcw,
    color: "from-red-500 to-red-600"
  },
];

export default function ProcessFlowSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,119,198,0.3),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(120,219,255,0.2),_transparent_50%)]" />

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white/90 font-medium">Streamlined Sales Process</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
              Sales Workflow
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Transform your sales operations with our comprehensive workflow management system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/60 text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div className="flex items-center text-white/50 group-hover:text-white/80 transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent transform -translate-y-1/2 z-10" />
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}