"use client"
import React, { useState, useRef, useEffect } from 'react';
// Remove the unused Image import
// import Image from 'next/image';

const VerticalMenu = () => {
    const [activeSection, setActiveSection] = useState(1);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isInView, setIsInView] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const verticalSection = document.getElementById('vertical-menu-section');
            if (verticalSection) {
                const rect = verticalSection.getBoundingClientRect();
                const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                const isPartiallyVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                setIsInView(isFullyVisible || isPartiallyVisible);

                // Check which section is most visible
                const sectionElements = sectionRefs.current;
                let maxVisibleSection = activeSection;
                let maxVisibleArea = 0;

                sectionElements.forEach((section, index) => {
                    if (section) {
                        const rect = section.getBoundingClientRect();
                        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
                        if (visibleHeight > maxVisibleArea && visibleHeight > 0) {
                            maxVisibleArea = visibleHeight;
                            maxVisibleSection = index + 1;
                        }
                    }
                });

                setActiveSection(maxVisibleSection);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const handleMenuClick = (sectionId: number) => {
        setActiveSection(sectionId);
        sectionRefs.current[sectionId - 1]?.scrollIntoView({ behavior: 'smooth' });
    };

    const sections = [
        {
            id: 1,
            title: "Product",
            description: "Dedicated software engineering teams that include technical rising stars customer expectations and accelerate your growth.",
            bgImage: "/images/home/vr1.png",
            cards: [
                {
                    title: "Dharma-ERP",
                    description: "Enhancing Performance Through Digital Transformation"
                },
                {
                    title: "CRM",
                    description: "Building Seamless B2B2X and B2C Digital Trade"
                },
                {
                    title: "Finance",
                    description: "Accelerating Growth Through Development"
                },
                {
                    title: "Sub Contracting",
                    description: "Accelerating Growth Through Development"
                }
            ]
        },
        {
            id: 2,
            title: "Services",
            description: "Streamline your software engineering to drive greater efficiency and create resilience across your products and platforms.",
            bgImage: "/images/home/vr4.png",
            cards: [
                {
                    title: "IT Service",
                    description: "Building Core Competencies"
                },
                {
                    title: "Data Science",
                    description: "Modernizing Infrastructure"
                },
                {
                    title: "Digital Marketing",
                    description: "Data-Driven Decision Making"
                },
                {
                    title: "Advanced Analytics",
                    description: "Data-Driven Decision Making"
                }
            ]
        },
       
    ];

    return (
        <div className="relative" id="vertical-menu-section">
            {/* Vertical Navigation Menu */}
            <div className="sticky top-[20%] left-0 h-0 z-20 pointer-events-auto">
                <div className={`absolute left-8 transition-opacity duration-300 ${
                    isInView ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                    <div className="flex flex-col space-y-6">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleMenuClick(section.id)}
                                className={`text-left transition-all duration-300 group ${
                                    activeSection === section.id ? 'text-black' : 'text-gray-400'
                                }`}
                            >
                                <div className="flex items-center">
                                    <div className={`w-1 h-8 mr-4 transition-all duration-300 ${
                                        activeSection === section.id ? 'bg-[#463cc9]' : 'bg-transparent'
                                    }`} />
                                    <span className="text-lg font-medium">
                                        {section.title.replace('.', '')}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full snap-y snap-mandatory h-screen overflow-y-auto">
                {sections.map((section) => (
                    <div 
                        key={section.id}
                        ref={(el: HTMLDivElement | null) => {
                            sectionRefs.current[section.id - 1] = el;
                        }}
                        className="relative h-screen w-full flex items-center bg-[#e3e3e3] snap-start snap-always"
                    >
                        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                            {/* Content remains the same */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalMenu;