"use client";
import React from "react";
import { StickyScroll } from "./sticky";
import Image from "next/image";

const content = [
  // Products Section
  {
    title: "Dharma ERP",
    description: "Empowering businesses, simplifying processes.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/images/home/dharma.jpg" width={400} height={400} className="h-full w-full object-cover rounded-lg" alt="Enterprise Solutions" />
      </div>
    ),
  },
  {
    title: "User Admin",
    description: "Scalable and secure cloud infrastructure solutions",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/images/home/useradmin.jpg" width={400} height={400} className="h-full w-full object-cover rounded-lg" alt="Cloud Platform" />
      </div>
    ),
  },
  {
    title: "AI Solutions",
    description: "Advanced artificial intelligence and machine learning tools",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/images/home/dashboard.jpg" width={400} height={400} className="h-full w-full object-cover rounded-lg" alt="AI Solutions" />
      </div>
    ),
  },
  {
    title: "Security Suite",
    description: "Comprehensive cybersecurity and protection systems",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/images/home/social.jpg" width={400} height={400} className="h-full w-full object-cover rounded-lg" alt="Security Suite" />
      </div>
    ),
  },
  {
    title: "Analytics Platform",
    description: "Data analytics and business intelligence solutions",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/images/home/dashboard.jpg" width={400} height={400} className="h-full w-full object-cover rounded-lg" alt="Analytics Platform" />
      </div>
    ),
  },

  // Services Section
  {
    title: "Data Science",
    description: "Transforming data into decisions.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/images/home/data.jpg" width={400} height={400} className="h-full w-full object-cover rounded-lg" alt="Consulting Services" />
      </div>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Boost visibility, drive success.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/images/home/social.jpg" width={400} height={400} className="h-full w-full object-cover rounded-lg" alt="Implementation" />
      </div>
    ),
  },
  {
    title: "App Development",
    description: "Innovate on the go.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/images/home/app.jpg" width={400} height={400} className="h-full w-full object-cover rounded-lg" alt="Training Programs" />
      </div>
    ),
  },
  {
    title: "Website Development",
    description: "Crafting digital excellence.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/images/home/website.jpg" width={400} height={400} className="h-full w-full object-cover rounded-lg" alt="Support & Maintenance" />
      </div>
    ),
  },
  {
    title: "Custom Development",
    description: "Tailored software development solutions",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/images/home/website.jpg" width={400} height={400} className="h-full w-full object-cover rounded-lg" alt="Custom Development" />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <>
      
      <div className="p-10">
      <div className="flex items-center justify-center py-4">
        <h2 className="text-3xl dark:text-black font-bold text-center">What We Offer</h2>
      </div>
        <StickyScroll content={content} />
      </div>
    </>
  );
}

