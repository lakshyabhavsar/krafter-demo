import { Brain, Zap, Globe, TrendingUp, Users, Shield } from 'lucide-react';

export function CTASection() {
  return (
    /* Current Phase Section */
    <div className="py-20 bg-gradient-to-tr from-[#ff3a22] via-[#bccbde] to-[#c2dde6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[42px] font-medium mb-6" style={{ color: "#6153F0" }}>
              My Current AI Renaissance
            </h2>
            <p className="text-[22px] font-normal text-blue-100 mb-8" style={{ color: "#364153" }}>
              {"I'm living in a transformative era where the AI capabilities I work with are accelerating exponentially."}
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2" style={{ color: "#364153" }}>Generative AI Integration</h4>
                <p className="text-blue-100" style={{ color: "#364153" }}>{"I'm integrating large language models and creative AI into my projects, reshaping how my clients work, learn, and communicate."}</p>
              </div>
              </div>
              <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2" style={{ color: "#364153" }}>Autonomous Systems Development</h4>
                <p className="text-blue-100" style={{ color: "#364153" }}>{"I'm building intelligent systems, smart applications, and automated decision-making tools that are becoming reality."}</p>
              </div>
              </div>
              <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2" style={{ color: "#364153" }}>Healthcare Innovation</h4>
                <p className="text-blue-100" style={{ color: "#364153" }}>My AI-powered applications are contributing to drug discovery, personalized medicine, and diagnostic tools that save lives.</p>
              </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center">
                <div className="text-6xl font-bold mb-4" style={{ color: "#6153F0" }}>
                  2024+
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#6153F0" }}>
                  My Development Era
                </h3>
                <p className="text-blue-100" style={{ color: "#364153" }}>
                  {"I've reached the point where my AI implementations are accelerating exponentially, "}
                  {"making the impossible possible across every domain I work in."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}