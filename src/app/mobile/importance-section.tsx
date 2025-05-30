import React, { useEffect, useState } from "react";
import {
  TrendingUp,
  Users,
  Globe,
  DollarSign,
  Smartphone,
  Tablet,
} from "lucide-react";

const ImportanceSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 400) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const importancePoints = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Market Growth",
      description:
        "Mobile app market is projected to reach $935 billion by 2023, showing exponential growth and opportunities.",
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "User Engagement",
      description:
        "Mobile apps provide 3x higher user engagement compared to mobile websites, creating stronger customer relationships.",
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: "Global Reach",
      description:
        "With 6.8 billion smartphone users worldwide, mobile apps offer unprecedented global market access.",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-orange-600" />,
      title: "Revenue Generation",
      description:
        "Apps generate revenue through multiple streams: purchases, subscriptions, ads, and in-app transactions.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile-First World",
      description:
        "Over 6.8 billion smartphone users worldwide rely on mobile apps for daily tasks, entertainment, and business operations.",
    },
    {
      icon: <Tablet className="w-12 h-12 text-purple-600" />,
      title: "Business Growth",
      description:
        "Mobile apps increase customer engagement by 3x and drive revenue growth through enhanced user experiences and accessibility.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-indigo-600" />,
      title: "Market Reach",
      description:
        "Reach global audiences instantly with mobile apps available in app stores, expanding your business beyond geographical boundaries.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[42px] font-medium text-gray-900 mb-6">
            Why Mobile App Development Matters
          </h2>
          <p className="text-[22px] text-gray-600 max-w-3xl mx-auto">
            In today's digital-first world, mobile applications have become the
            cornerstone of business success and user engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {importancePoints.map((point, index) => (
            <div
              key={index}
              className={`bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                transform: `translateY(${scrollY * -0.02}px)`,
              }}
            >
              <div className="flex justify-center mb-6">{point.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {point.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default ImportanceSection;
