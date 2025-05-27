export default function CareerSection2() {
  return (
    <div className="min-w-[320px] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5b35b5]">
              Were just getting started
            </h2>
            <p className="text-[#464647] text-sm sm:text-base">
              Codekrafter is growing fast, and we are always looking for passionate, dynamic, and talented individuals to join our distributed team all around the world.
            </p>
            <p className="text-[#464647] text-sm sm:text-base">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-2.5 rounded-full bg-[#5b35b5] text-white hover:bg-[#5b35b5]/90 transition-colors">
                Read our principles
              </button>
              <button className="px-6 py-2.5 rounded-full border-2 border-[#5b35b5] text-[#5b35b5] hover:bg-[#5b35b5]/5 transition-colors">
                About us
              </button>
            </div>
          </div>

          {/* Single Image Column */}
          <div className="flex items-center justify-center">
            <img 
              src="/images/careerprofile.png" 
              alt="Team members" 
              className="w-full max-w-[500px] h-auto object-cover rounded-lg animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
}