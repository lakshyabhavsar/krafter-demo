import React from "react";
import { TabsDemo } from "./productTab/demo";

import BannerGrid from "./component/banner-grid";
import InfiniteCarousel from "../../components/mobile";
import MobileCaraousel from "./carausel";

const AboutPage = () => {
  return (
    <>
      <div className="space-y-20 pb-0 bg-gray-300">
        <TabsDemo />

        <BannerGrid />
        <InfiniteCarousel />
        <MobileCaraousel />
      </div>
    </>
  );
};

export default AboutPage;
