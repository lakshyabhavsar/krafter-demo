import React from "react";
import { AnimatedBeamDemo } from "./annimated-beam/demo";
import { CompareDemo } from "./code/demo";
import { HeroDemo1 } from "./hero-1/demo";
import {  DisclosureCardGrid } from "./card/demo";
import { MagnetLinesDemo } from "./magnet-line/demo";
import { TabsDemo } from "../about/productTab/demo";
import { Feature108Demo } from "./feacture/demo";
import { BentoGridGalleryDemo } from "./gallery/demo";
import { HeroScrollDemo } from "./scroll-tab/demo";
import { ScrollVelocityDemo } from "./Scroll-velocity/demo";
import { HeroHighlightDemo } from "./hero-heighlight.tsx/demo";
import { SkeletonDemo } from "./skeleton/demo";
import { AnimatedPinDemo } from "./pin/demo";
import { Preview } from "./floating/demo";
import { Gallery4Demo } from "./image-card/demo";
import { TimelineDemo } from "./timeline/demo";
import { PodcastCards } from "./s/demo";
import { DemoHeroGeometric } from "./landing-design/demo";
import { RevealImageListDemo } from "./reveal-images/demo";
import InfiniteSliderVertical from "./slider/demo";
import PortfolioGrid from "./portfolio/demo";
import Demo from "./app/demo";

import WobbleCardDemo from "./wobble-card/demo";




const DigitalMarketing = () => {
  return (
    <>
   
        <AnimatedBeamDemo/>
        <TabsDemo/>
        <CompareDemo/>
        <HeroDemo1/>
        
        <DisclosureCardGrid/>
        <MagnetLinesDemo/>
        <Feature108Demo/>
        <BentoGridGalleryDemo/>
        <HeroScrollDemo/>
        <ScrollVelocityDemo/>
        <HeroHighlightDemo/>
        <SkeletonDemo/>
        <InfiniteSliderVertical/>
        <PortfolioGrid/>
        <Demo/>
        <WobbleCardDemo/>
        <AnimatedPinDemo/>
        <div className="relative h-screen w-full overflow-hidden">
          <Preview />
        </div>
        <Gallery4Demo/>
        <DemoHeroGeometric/>
        <RevealImageListDemo/>
        <div className="relative h-[200vh] mb-30 mt-0">
          <PodcastCards/>
          </div>
        <div className="relative ">
          <TimelineDemo/>
        </div>
        
       
        
    </>
  );
}; 

export default DigitalMarketing;