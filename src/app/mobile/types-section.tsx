import React, { useEffect, useState } from 'react';
import { Smartphone, Apple, Globe, Layers } from 'lucide-react';

const AppTypesSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which cards should be visible
      const cards = document.querySelectorAll('.app-type-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleCards(prev => new Set([...prev, index]));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const appTypes = [
    {
      icon: <Smartphone className="w-16 h-16 text-green-600" />,
      title: "Android App Development",
      subtitle: "Native Android Solutions",
      description: "Build powerful native Android applications using Java, Kotlin, and Android Studio. Leverage Google's ecosystem for maximum performance and platform-specific features.",
      features: ["Native Performance", "Google Play Store", "Material Design", "Android SDK"],
      gradient: "from-green-400 to-blue-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      icon: <Apple className="w-16 h-16 text-gray-800" />,
      title: "iOS App Development",
      subtitle: "Premium iOS Experiences",
      description: "Create elegant iOS applications using Swift and Xcode. Design beautiful interfaces that follow Apple's Human Interface Guidelines for optimal user experience.",
      features: ["Swift Programming", "App Store", "iOS SDK", "Premium UX"],
      gradient: "from-gray-400 to-gray-600",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      icon: <Globe className="w-16 h-16 text-purple-600" />,
      title: "Progressive Web Apps",
      subtitle: "Web-Based Mobile Solutions",
      description: "Develop PWAs that combine the best of web and mobile apps. Offer app-like experiences through web browsers with offline capabilities and push notifications.",
      features: ["Cross-Platform", "Offline Support", "Web Standards", "No App Store"],
      gradient: "from-purple-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      icon: <Layers className="w-16 h-16 text-orange-600" />,
      title: "Hybrid App Development",
      subtitle: "Cross-Platform Solutions",
      description: "Build once, deploy everywhere with hybrid frameworks like React Native, Flutter, or Cordova. Maximize code reuse while maintaining near-native performance.",
      features: ["Code Reusability", "Faster Development", "Cross-Platform", "Cost Effective"],
      gradient: "from-orange-400 to-red-500",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-28 relative"> {/* Increased vertical padding */}
      <div className="container mx-auto px-8"> {/* Increased horizontal padding */}
        <div className="text-center mb-24"> {/* More space below heading */}
          <h2 className="text-[48px] font-medium text-gray-900 mb-8"> {/* Larger heading, more margin */}
            Types of Mobile App Development
          </h2>
          <p className="text-[24px] text-gray-600 max-w-4xl mx-auto"> {/* Larger text, wider max width */}
            Choose the right development approach for your project. Each type offers unique advantages and is suited for different business needs.
          </p>
        </div>

        <div className="space-y-24"> {/* More space between cards */}
          {appTypes.map((type, index) => (
            <div
              key={index}
              className={`app-type-card flex flex-col lg:flex-row items-center gap-20 ${ // Increased gap
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } ${
                visibleCards.has(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{
                transform: `translateY(${scrollY * -0.01}px)`,
                animationDelay: `${index * 300}ms`
              }}
            >
              {/* Content Side */}
              <div className="flex-1 text-center lg:text-left px-4 lg:px-10 py-6"> {/* Added padding */}
                <div className="flex justify-center lg:justify-start mb-8"> {/* More margin */}
                  {type.icon}
                </div>
                
                <h3 className="text-[44px] font-medium text-gray-900 mb-4"> {/* Larger, more margin */}
                  {type.title}
                </h3>
                
                <h4 className="text-[24px] text-gray-600 mb-8"> {/* Larger, more margin */}
                  {type.subtitle}
                </h4>
                
                <p className="text-xl text-gray-700 mb-10 leading-relaxed"> {/* Larger, more margin */}
                  {type.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-10"> {/* More gap and margin */}
                  {type.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="bg-white/70 backdrop-blur-sm rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300" // More padding
                    >
                      <span className="font-semibold text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`bg-gradient-to-r ${type.gradient} text-white px-10 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  Learn More
                </button>
              </div>

              {/* Image Side */}
              <div className="flex-1 px-4 lg:px-10 py-6"> {/* Added padding */}
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${type.gradient} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  <img
                    src={type.image}
                    alt={type.title}
                    className="relative w-full h-96 object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500" // Taller image
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTypesSection;