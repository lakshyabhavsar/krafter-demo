export default function EmailSubscription() {
  return (
    <div className="min-w-[320px] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-8 bg-gray-200">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#5b35b5] mb-4">
          Be the first to know about new jobs
        </h2>
        <p className="text-[#464647] text-sm sm:text-base mb-8">
          Were growing fast and always looking for smart people. Be the first to know.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter email"
            className="flex-1 px-4 py-2.5 rounded-full text-black border border-gray-300 focus:outline-none focus:border-[#5b35b5]"
          />
          <button className="px-6 py-2.5 rounded-full bg-[#5b35b5] text-white hover:bg-[#5b35b5]/90 transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}