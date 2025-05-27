"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MobileCaraousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/images/frame1.png",
        "/images/frame2.png",
        "/images/frame3.png",
        "/images/frame4.png",
        "/images/frame5.png",
        "/images/frame7.png",
        "/images/frame6.png",
        "/images/frame1.png",
        "/images/frame2.png",
        "/images/frame3.png",
        "/images/frame4.png",
        "/images/frame5.png",
        "/images/frame7.png",
        "/images/frame6.png"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Increased time to allow for sequential animations

        return () => clearInterval(timer);
    }, [images.length]);

    

    const getMultipleAdjacentIndexes = () => {
        const prevIndex2 = (currentIndex - 2 + images.length) % images.length;
        const prevIndex1 = (currentIndex - 1 + images.length) % images.length;
        const nextIndex1 = (currentIndex + 1) % images.length;
        const nextIndex2 = (currentIndex + 2) % images.length;
        return { prevIndex2, prevIndex1, nextIndex1, nextIndex2 };
    };

    return (
        <>
            {/* Mobile frame in center */}
            <div className="text-center mb-8 pt-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B3674] mb-3">
                        Our Mobile App Showcase
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Experience our intuitive and beautifully designed mobile application interface
                    </p>
                </div>
            <div className="relative h-[100vh] md:h-screen w-full overflow-hidden bg-white-600">
                {/* Heading Section */}
               

                {/* Mobile frame */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                    w-[310px] sm:w-[290px] h-[510px] sm:h-[510px] bg-black rounded-[40px] z-20 
                                    border-6 sm:border-8 border-[rgb(164, 89, 235)] shadow-2xl">
                            
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
                                        w-24 sm:w-32 h-4 sm:h-6 bg-black rounded-b-2xl"></div>
                            
                            {/* Main screen content */}
                            <div className="h-full w-full overflow-hidden rounded-[32px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}
                                        className="h-full w-full"
                                    >
                                        <img
                                            src={images[currentIndex]}
                                            alt={`Main ${currentIndex + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Side images - Modified for tablet and desktop */}
                        {/* First left image - Only visible on desktop */}
                        <motion.div 
                            className="hidden lg:block absolute top-1/2 left-[2%] xl:left-[5%] transform -translate-y-1/2 
                                    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]"
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={images[getMultipleAdjacentIndexes().prevIndex2]}
                                alt="Previous 2"
                                className="w-full h-full object-cover rounded-lg shadow-xl opacity-70"
                            />
                        </motion.div>

                        {/* Second left image - Visible on tablet and desktop */}
                        <motion.div 
                            className="hidden md:block absolute top-1/2 left-[20%] lg:left-[22%] transform -translate-y-1/2 
                                    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]"
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={images[getMultipleAdjacentIndexes().prevIndex1]}
                                alt="Previous 1"
                                className="w-full h-full object-cover rounded-lg shadow-xl opacity-70"
                            />
                        </motion.div>

                        {/* First right image - Visible on tablet and desktop */}
                        <motion.div 
                            className="hidden md:block absolute top-1/2 right-[20%] lg:right-[22%] transform -translate-y-1/2 
                                    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]"
                            initial={{ x: 100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={images[getMultipleAdjacentIndexes().nextIndex1]}
                                alt="Next 1"
                                className="w-full h-full object-cover rounded-lg shadow-xl opacity-70"
                            />
                        </motion.div>

                        {/* Second right image - Only visible on desktop */}
                        <motion.div 
                            className="hidden lg:block absolute top-1/2 right-[2%] xl:right-[5%] transform -translate-y-1/2 
                                    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]"
                            initial={{ x: 100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={images[getMultipleAdjacentIndexes().nextIndex2]}
                                alt="Next 2"
                                className="w-full h-full object-cover rounded-lg shadow-xl opacity-70"
                            />
                        </motion.div>

                        {/* Navigation dots - Repositioned below frame */}
                        <div className="absolute top-[85%] sm:top-[90%] left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 
                                            ${currentIndex === index ? 'bg-purple-600 scale-125' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                    
        </>
    );
};

export default MobileCaraousel;