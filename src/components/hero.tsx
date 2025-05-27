import React from 'react';

const HeroS = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#ebe9f0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between h-full gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h3 className="text-[32px] md:text-[32px] lg:text-[42px] font-bold leading-tight text-[#592ab8] text-center lg:text-left">
              Transforming Ideas <br />
              <span className='text-black font-normal lg:text-[32px]'>Here Your www.com</span>
            </h3>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full max-w-[600px] h-[350px] md:h-[450px] lg:h-[550px] mx-auto">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg "
              >
                <source src="/images/videos/code1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroS;