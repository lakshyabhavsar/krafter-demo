
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-step',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.process-timeline',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate connecting lines
      gsap.fromTo('.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-timeline',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const processSteps = [
    {
      step: "01",
      title: "Planning & Strategy",
      description: "Define project scope, target audience, and technical requirements. Create wireframes and user journey maps."
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Design intuitive interfaces and seamless user experiences. Create prototypes and conduct usability testing."
    },
    {
      step: "03",
      title: "Development",
      description: "Build the application using chosen technologies. Implement features, integrate APIs, and ensure code quality."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across devices and platforms. Performance optimization and bug fixing."
    },
    {
      step: "05",
      title: "Deployment",
      description: "Launch the app on respective app stores. Monitor performance and gather user feedback for improvements."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 animate-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[42px] font-medium text-gray-900 mb-6">
            How Mobile App Development Works
          </h2>
          <p className="text-[22px] font-normal text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to creating successful mobile applications from concept to deployment
          </p>
        </div>

        <div className="process-timeline relative max-w-4xl mx-auto">
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600 origin-top"></div>
          
          {processSteps.map((step, index) => (
            <div key={index} className={`process-step flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                  <div className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>
              </div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
            alt="Mobile app development process"
            className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;