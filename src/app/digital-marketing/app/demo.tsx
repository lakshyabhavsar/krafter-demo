import React from 'react';

const Demo = () => {
  return (
    <div className="w-[1440px] mx-auto py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row gap-8 items-center">
          {/* Left Column - 40% */}
          <div className="w-[40%]">
            <h1 className="text-4xl md:text-5xl text-gray-600 font-bold mb-4">
              Magic UI is the new way to build landing pages.
            </h1>
            <p className="text-gray-600 mb-6">
              Beautifully designed, animated components and templates built with TailwindCSS, React, and Framer Motion.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started for free
            </button>
          </div>

          {/* Right Column - 60% */}
          <div className="w-[60%]">
            <div className="rounded-lg w-[90%] h-[90%] overflow-hidden shadow-2xl">
              <video 
                className="w-full"
                autoPlay 
                loop
                muted 
                playsInline
                preload="auto"
                controls={false}
              >
                <source src="/images/videos/app-video-path.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;