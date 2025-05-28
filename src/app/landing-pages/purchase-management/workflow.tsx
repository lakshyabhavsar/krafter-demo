import { FileText, ShoppingCart, Package, Receipt, RotateCcw, ChevronDown } from 'lucide-react';

export function WorkflowSection() {
  const steps = [
    {
      title: "Create Requisition",
      description: "Initiate purchase requests with detailed specifications",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Generate Purchase Orders", 
      description: "Convert approved requisitions into formal purchase orders",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Record Received Goods",
      description: "Track and verify incoming inventory and deliveries",
      icon: <Package className="w-6 h-6" />
    },
    {
      title: "Process Invoices",
      description: "Handle billing, payments, and financial reconciliation",
      icon: <Receipt className="w-6 h-6" />
    },
    {
      title: "Handle Returns & Ratings",
      description: "Manage product returns and supplier performance ratings",
      icon: <RotateCcw className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-teal-100/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Streamline your procurement process with our intuitive 5-step workflow
        </p>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:bg-white/90 group">
                <div className="flex items-center gap-6">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-gradient-to-r group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Connecting Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-8 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-md">
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom CTA or completion indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span>Complete Workflow</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
