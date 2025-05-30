 import React from 'react';
 export default function BenefitSection() {
   return (
<section className="py-16 px-6 md:px-20 bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 mb-6">
      Explore Your Data with Confidence
    </h2>
    <p className="text-lg text-gray-700 mb-12">
      {"Our platform empowers you to uncover insights, identify patterns, and make informed decisions with ease. Whether you're a data enthusiast or a business analyst, our intuitive tools are designed to support every level of exploration."}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Feature Box */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-gradient-to-r from-indigo-400 to-pink-400 hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-bold text-indigo-600 mb-2">Interactive Visualizations</h3>
        <p className="text-gray-600">Create dynamic charts and graphs that bring your data to life.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-gradient-to-r from-purple-400 to-fuchsia-500 hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-bold text-purple-600 mb-2">Smart Filtering</h3>
        <p className="text-gray-600">Easily drill down into the data that matters most with powerful filters.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-gradient-to-r from-pink-400 to-rose-500 hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-bold text-pink-600 mb-2">Seamless Export</h3>
        <p className="text-gray-600">Export your findings to PDF, Excel, or share them with your team instantly.</p>
      </div>
    </div>
  </div>
</section>

   );}