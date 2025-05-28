"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <span className="flex items-center relative pl-0 pr-16 justify-start mr-auto">
          <Link href="/" className="group relative flex items-center">
            <Image
              src="/images/logo3-infinity.png"
              alt="Logo"
              width={48}
              height={24}
              className="w-[36px] md:w-[48px] transition-transform duration-300 group-hover:translate-x-[-6px]"
              priority
            />
            <Image
              src="/images/logo3-code.png"
              alt="Secondary Logo"
              width={56}
              height={28}
              className="absolute left-full w-[40px] md:w-[56px] opacity-0 transition-all duration-300 transform translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-[-2px]"
              priority
            />
          </Link>
        </span>

        {/* Hamburger Menu Button - visible on small screens */}
        <div className="md:hidden flex items-center ml-auto pr-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu - hidden on small screens */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-4 lg:space-x-6">
          <HoveredLink href="/about" className="hover:text-blue-500">
            About Us
          </HoveredLink>
          <MenuItem setActive={setActive} active={active} item="IT Services">
            <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 p-2 md:p-4 w-full max-w-xl">
              <ProductItem
                title="Mobile App Development"
                href="/services/mobile"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Modern, scalable websites and web apps for your business."
              />
              <ProductItem
                title="Website Development"
                href="/website"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Beautiful, user-friendly interfaces for web and mobile."
              />
              <ProductItem
                title="ERP Solutions"
                href="/services/erp"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Boost your online visibility and search rankings."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Data Science">
            <div className="text-sm grid grid-cols-3 gap-10 p-4 justify-items-center">
              <ProductItem
                title="Data Mining"
                href="/data-science/data-mining"
                src="/images/thumbnails/data-mining-thumbnail.png"
                description="Discover patterns and insights from large datasets using advanced statistical and computational techniques."
              />
              <ProductItem
                title="Machine Learning"
                href="/data/analytics"
                src="/images/thumbnails/ML-thumbnail.png"
                description="Build predictive models and automate decision-making processes through algorithms that learn from data."
              />
              <ProductItem
                title="Big Data"
                href="/data/business-intelligence"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Handle and analyze massive volumes of structured and unstructured data for actionable business intelligence."
              />
              <ProductItem
                title="Data Analysis"
                href="/data/business-intelligence"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Interpret complex data sets to identify trends, relationships, and meaningful insights for decision-making."
              />
              <ProductItem
                title="NLP"
                href="/data/business-intelligence"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Enable machines to understand, interpret, and generate human language using AI-powered linguistic analysis."
              />
              <ProductItem
                title="Cloud Computing"
                href="/data/business-intelligence"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Access scalable computing resources and data storage on-demand through cloud platforms like AWS, Azure, or Google Cloud."
              />
              <ProductItem
                title="Data Visualization"
                href="/data/business-intelligence"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Transform raw data into interactive charts, graphs, and dashboards to communicate insights clearly and effectively."
              />
              <ProductItem
                title="Data Exploration"
                href="/data/business-intelligence"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Conduct initial investigations of data sets to uncover patterns, spot anomalies, and generate hypotheses."
              />
            </div>
          </MenuItem>
          <HoveredLink
            href="/digital-marketing"
            className="hover:text-blue-500"
          >
            Digital Marketing
          </HoveredLink>
          <HoveredLink href="/careers" className="hover:text-blue-500">
            Careers
          </HoveredLink>
          <HoveredLink href="/PortfolioPage" className="hover:text-blue-500">
            Portfolio
          </HoveredLink>
          <HoveredLink href="/blogs" className="hover:text-blue-500">
            Blogs
          </HoveredLink>
        </div>
      </Menu>

      {/* Mobile Menu - shown when isMobileMenuOpen is true and on small screens */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-1 mx-auto max-w-4xl bg-white shadow-lg rounded-md bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 z-50">
          <div className="flex flex-col gap-4 p-4">
            <Link
              href="/about"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-xs text-neutral-400">&#8594;</span>
              About Us
            </Link>

            {/* IT Services */}
            <div>
              <p className="px-3 pb-1 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                IT Services
              </p>
              <div className="flex flex-col gap-1 ml-4 border-l-2 border-neutral-100 dark:border-neutral-800">
                <Link
                  href="/services/mobile"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Mobile App Development
                </Link>
                <Link
                  href="/website"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Website Development
                </Link>
                <Link
                  href="/services/erp"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  ERP Solutions
                </Link>
              </div>
            </div>

            {/* Data Science */}
            <div>
              <p className="px-3 pb-1 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Data Science
              </p>
              <div className="flex flex-col gap-1 ml-4 border-l-2 border-neutral-100 dark:border-neutral-800">
                <Link
                  href="/data-science/data-mining"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Data Mining
                </Link>
                <Link
                  href="/data/analytics"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Machine Learning
                </Link>
                <Link
                  href="/data/business-intelligence"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Big Data
                </Link>
                <Link
                  href="/data/business-intelligence"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Data Analysis
                </Link>
                <Link
                  href="/data/business-intelligence"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  NLP
                </Link>
                <Link
                  href="/data/business-intelligence"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Cloud Computing
                </Link>
                <Link
                  href="/data/business-intelligence"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Data Visualization
                </Link>
                <Link
                  href="/data/business-intelligence"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Data Exploration
                </Link>
              </div>
            </div>

            {/* Other Links */}
            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
              <div className="flex flex-col gap-1 ml-4">
                <Link
                  href="/digital-marketing"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Digital Marketing
                </Link>
                <Link
                  href="/careers"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Careers
                </Link>
                <Link
                  href="/PortfolioPage"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs text-neutral-400">&#8594;</span>
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
