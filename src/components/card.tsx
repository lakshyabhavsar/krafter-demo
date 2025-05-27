import React from "react";

const FeatureCards = () => {
  const features = [
    { title: "We're specialised", text: "We're not generalists, we only offer you what we do best: website redesign, branded assets, UI/UX design, conversion rate optimization, and full-stack development." },
    { title: "We focus on results.", text: "We care about the impact our work has on your business or organization—not how it looks in our portfolio." },
    { title: "We're responsive.", text: "We limit the number of clients we take on each year to ensure each one has an outstanding customer experience. Expect responses in hours—not days." },
    { title: "We go the extra mile.", text: "We view our engagements as relationships—not vendor agreements. In addition to what we produce, we also educate our customers on digital best practices along the way." },
  ];

  return (
    <div className="text-center py-8 md:py-12 max-w-[1161px] mx-auto">
      <h2 className="text-2xl mt-20 md:text-3xl font-bold text-blue-900 transition-all duration-300">What makes us different</h2>
      <p className="text-sm md:text-base text-gray-600 mt-2 px-4 transition-all duration-300">From every other Web, SAAS, ERP & Digital Marketing Company</p>

      <div className="mt-16 w-full">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between px-4 md:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white border border-solid border-[#2B3674] w-full md:w-[291px] h-[200px] group cursor-pointer transform transition-all duration-500 ease-in-out hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#2B3674] transition-all duration-500 ease-in-out group-hover:h-full opacity-100 group-hover:opacity-100" />
              
              <div className="p-4 md:p-6 relative z-10 flex flex-col items-center justify-center h-full transition-all duration-500 ease-in-out group-hover:opacity-0">
                <h3 className="text-base md:text-lg font-semibold text-blue-900 text-center transition-all duration-300">
                  {feature.title}
                </h3>
                <span className="text-5xl md:text-6xl font-light text-gray-200 absolute bottom-2 right-4 transition-all duration-500 ease-in-out">
                  {index + 1}
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:scale-100 scale-95">
                <p className="text-white text-sm md:text-base p-4 md:p-6 z-20 transition-all duration-300">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
