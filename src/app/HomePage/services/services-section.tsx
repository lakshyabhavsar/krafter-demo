"use client";
import React, { useState, useRef, useEffect } from "react";
import AnimatedScrollContainer from "@/components/AnimatedScrollContainer";
import InfiniteCarousel from "@/components/mobile";
import PortfolioGrid from "@/app/digital-marketing/portfolio/demo";

const serviceCategories = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "Dedicated software engineering teams that include technical rising stars customer expectations and accelerate your growth.",
    details: [
      {
        title: "Android Apps",
        description:
          "Custom Android app development for scalable, high-performance mobile solutions. Boost your business with user-friendly, feature-rich Android applications tailored to your needs.",
      },
      {
        title: "IOS Apps",
        description:
          "Professional iOS app development for seamless, secure, and engaging experiences on iPhone and iPad. Enhance your brand with top-rated iOS mobile applications.",
      },
      {
        title: "Hybrid Apps",
        description:
          "Cross-platform hybrid app development using the latest frameworks. Reach both Android and iOS users with cost-effective, high-quality hybrid mobile apps.",
      },
      {
        title: "Progressive Apps",
        description:
          "Progressive Web App (PWA) development for fast, reliable, and engaging mobile experiences. Increase conversions with installable, offline-capable web apps.",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Streamline your software engineering to drive greater efficiency and create resilience across your products and platforms.",
    details: [
      {
        title: "Corporate Website",
        description:
          "Professional corporate website development to establish a strong online presence, enhance brand credibility, and engage clients with a modern, responsive design optimized for search engines.",
      },
      {
        title: "E-commerce Website",
        description:
          "Custom e-commerce website solutions for seamless online shopping experiences, secure payment integration, and scalable platforms designed to boost sales and improve SEO rankings.",
      },
      {
        title: "Service Website",
        description:
          "Tailored service website development to showcase your offerings, attract new customers, and drive conversions with user-friendly layouts and SEO-focused content.",
      },
      {
        title: "Portal Development",
        description:
          "Robust portal development for businesses and organizations, enabling efficient information management, user collaboration, and secure access with SEO best practices.",
      },
    ],
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Expert advice and strategic planning to help your business navigate complex challenges and achieve sustainable growth.",
    details: [
      {
        title: "Dharma ERP",
        description:
          "Comprehensive ERP software for businesses to streamline operations, manage resources, and drive digital transformation. Boost productivity and efficiency with our scalable Dharma ERP solutions.",
      },
      {
        title: "CRM",
        description:
          "Advanced CRM development for effective customer relationship management, sales automation, and improved client engagement. Enhance your business growth with our custom CRM solutions.",
      },
      {
        title: "Sub Contracting",
        description:
          "Efficient subcontracting management systems to optimize project workflows, track contracts, and ensure compliance. Simplify your business processes with our tailored subcontracting solutions.",
      },
      {
        title: "Sales",
        description:
          "Powerful sales management platforms to automate sales processes, track leads, and increase conversions. Drive revenue growth with our innovative sales solutions for your business.",
      },
      {
        title: "Finance",
        description:
          "Secure finance management systems for real-time tracking, reporting, and analysis. Improve financial decision-making and compliance with our robust finance software solutions.",
      },
    ],
  },
];

const ServicesSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  // Scroll handler to update active sidebar option
  useEffect(() => {
    let ticking = false;
    let lastActiveSection = 0;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offsets = sectionRefs.map(ref => ref.current?.getBoundingClientRect().top ?? 0);
          const activeIdx = offsets.findIndex((offset, idx) => {
            if (idx === offsets.length - 1) return offset < window.innerHeight / 2;
            return offset < window.innerHeight / 2 && offsets[idx + 1] > window.innerHeight / 2;
          });
          const newActiveSection = activeIdx === -1 ? 0 : activeIdx;
          if (lastActiveSection !== newActiveSection) {
            setActiveSection(newActiveSection);
            lastActiveSection = newActiveSection;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  // Scroll to section on sidebar click
  const scrollToSection = (idx: number) => {
    sectionRefs[idx].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] pb-20 max-md:overflow-y-auto max-md:max-h-screen">
      {/* Hero Section */}
      <AnimatedScrollContainer durationClass="duration-1000" easingClass="ease-in-out">
        <section className="w-full flex flex-col items-start justify-center py-24 xs:py-32 sm:py-36 px-4 xs:px-6 sm:px-8 text-left bg-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#90caf9]/20 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#463cc9] via-[#6a5afc] to-[#90caf9] text-transparent bg-clip-text drop-shadow-lg mb-4 xs:mb-6 sm:mb-8">
              Our Services
            </h1>
            <p className="mt-4 text-lg xs:text-xl sm:text-2xl text-[#3949ab] max-w-full sm:max-w-2xl">
              Empowering your business with cutting-edge technology, creative solutions, and strategic growth.
            </p>
          </div>
        </section>
      </AnimatedScrollContainer>
      <hr className="my-8 border-t-2 border-[#e0e7ff] w-1/2" />

      {/* Sidebar + Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 px-2 sm:px-4 mt-[-30px] md:mt-[-60px] z-10 relative max-md:overflow-y-auto max-md:max-h-[calc(100vh-120px)]">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 sticky top-[15rem] self-start">
          <nav className="flex flex-col gap-4 bg-white/80 rounded-2xl shadow-xl p-6">
            {serviceCategories.map((cat, idx) => (
              <button
                key={cat.id}
                className={`text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out ${
                  activeSection === idx
                    ? "bg-gradient-to-r from-[#463cc9] to-[#90caf9] text-white shadow-lg"
                    : "bg-transparent text-[#463cc9] hover:bg-[#e0e7ff] active:bg-[#e0e7ff] focus:bg-[#e0e7ff]"
                }`}
                onClick={() => scrollToSection(idx)}
              >
                {cat.title}
              </button>
            ))}
          </nav>
        </aside>
        {/* Main Content Sections */}
        <div className="flex-1 flex flex-col gap-4 bg-transparent max-md:overflow-y-auto max-md:max-h-[calc(100vh-180px)]">
          {serviceCategories.map((cat, idx) => (
            <React.Fragment key={cat.id}>
              <div
                ref={sectionRefs[idx]}
                className="scroll-mt-32"
              >
                <AnimatedScrollContainer animationClass="animate-fadeInUp">
                  <div className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center transition-all duration-500 ease-in-out border border-transparent">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#463cc9] via-[#6a5afc] to-[#90caf9] text-transparent bg-clip-text">
                      {idx === 0 ? 'We Develop' : cat.title}
                    </h2>
                    <p className="text-gray-700 text-base mb-4 min-h-[60px] text-center">{cat.description}</p>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 w-full mt-4 sm:mt-6">
                      {cat.details.map((detail, dIdx) => (
                        <div key={dIdx} className="bg-[#f0f4ff] rounded-xl p-3 shadow-md hover:shadow-lg active:shadow-lg focus:shadow-lg transition-all duration-300 ease-in-out">
                          <h3 className="text-base font-semibold mb-1 text-[#463cc9]">{detail.title}</h3>
                          <p className="text-gray-700 text-xs">{detail.description}</p>
                        </div>
                      ))}
                    </div>
                    {idx === 0 && (
                      <div className="w-full mt-8">
                        <InfiniteCarousel />
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="w-full mt-8">
                        <PortfolioGrid />
                      </div>
                    )}
                  </div>
                </AnimatedScrollContainer>
              </div>
              {idx < serviceCategories.length - 1 && (
                <hr className="my-4 border-t-2 border-[#e0e7ff] w-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
