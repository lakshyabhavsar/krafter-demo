"use client";
import { useState } from "react";
import Link from "next/link";

const categories = [
  "All",
  "Website Development",
  "E-commerce",
  "App Development",
  "Game",
  "ERP & CRMs",
  "Landing Pages",
];

const projects = [
  // Website Development Projects
  // {
  //   id: 1,
  //   title: "Corporate Website",
  //   categories: ["Website Development", "UI/UX"],
  //   image: "/images/portfolio/portfolio1.png",
  // },
  {
    id: 1,
    title: "Landing Pages",
    categories: ["Website Development", "UI/UX"],
    image: "/images/portfolio/portfolio1.png",
    href: "/chat-bot",
  },
  {
    id: 2,
    title: "Portfolio Platform",
    categories: ["Website Development", "UI/UX"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 3,
    title: "Blog Platform",
    categories: ["Website Development"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 4,
    title: "Educational Website",
    categories: ["Website Development"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 5,
    title: "News Portal",
    categories: ["Website Development"],
    image: "/images/portfolio/portfolio1.png",
  },

  // App Development Projects
  {
    id: 6,
    title: "Staff Book",
    categories: ["App Development", "Healthcare"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 7,
    title: "Food Delivery App",
    categories: ["App Development"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 8,
    title: "Social Media App",
    categories: ["App Development"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 9,
    title: "Learning Platform App",
    categories: ["App Development", "Education"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 10,
    title: "Travel Booking App",
    categories: ["App Development"],
    image: "/images/portfolio/portfolio1.png",
  },

  // Game Projects
  {
    id: 11,
    title: "Adventure Quest",
    categories: ["Game"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 12,
    title: "Puzzle Master",
    categories: ["Game"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 13,
    title: "Racing Simulator",
    categories: ["Game"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 14,
    title: "Strategy Wars",
    categories: ["Game"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 15,
    title: "Educational Game",
    categories: ["Game", "Education"],
    image: "/images/portfolio/portfolio1.png",
  },

  // ERP & CRMs Projects
  {
    id: 16,
    title: "Hospital Management System",
    categories: ["ERP & CRMs", "Healthcare"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 17,
    title: "School Management System",
    categories: ["ERP & CRMs", "Education"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 18,
    title: "Inventory Management",
    categories: ["ERP & CRMs"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 19,
    title: "HR Management System",
    categories: ["ERP & CRMs"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 20,
    title: "Customer Relations Portal",
    categories: ["ERP & CRMs"],
    image: "/images/portfolio/portfolio1.png",
  },

  // E-commerce Projects
  {
    id: 21,
    title: "Fashion Store",
    categories: ["E-commerce"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 22,
    title: "Electronics Shop",
    categories: ["E-commerce"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 23,
    title: "Grocery Platform",
    categories: ["E-commerce"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 24,
    title: "Furniture Store",
    categories: ["E-commerce"],
    image: "/images/portfolio/portfolio1.png",
  },
  {
    id: 25,
    title: "Digital Marketplace",
    categories: ["E-commerce"],
    image: "/images/portfolio/portfolio1.png",
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeTab === "All" ? true : project.categories.includes(activeTab);
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 8);
  };

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  return (
    <div className="min-w-[320px] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-8 sm:mt-12">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#3d7dd8] mb-4 pt-4">
            Our Portfolio
          </h2>
          <p className="text-gray-600">
            Discover the results of our collaborations
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-full transition-all ${
                activeTab === category
                  ? "bg-[#3d7dd8] text-black"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-full border border-gray-500 focus:outline-none focus:border-[#3d7dd8] transition-colors placeholder-gray-400 text-black"
          />
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedProjects.map((project) => (
              // <div
              //   key={project.id}
              //   className="bg-transparent rounded-lg overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out"
              // >
              //   <div className="relative aspect-video">
              //     <img
              //       src={project.image}
              //       alt={project.title}
              //       className="w-full h-full object-cover rounded-lg hover:brightness-110 transition-all duration-300"
              //     />
              //   </div>
              //   <div className="p-6 group">
              //     <h3 className="text-xl font-semibold text-[#3d7dd8] mb-3 group-hover:text-[#2c5aa0] transition-colors">
              //       {project.title}
              //     </h3>
              //     <div className="flex flex-wrap gap-2">
              //       {project.categories.map((cat) => (
              //         <span
              //           key={cat}
              //           className="px-3 py-1 text-sm bg-white/50 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white/70 transition-all duration-200"
              //         >
              //           {cat}
              //         </span>
              //       ))}
              //     </div>
              //   </div>
              // </div>
              <Link href={project.href || "#"} key={project.id}>
                <div className="cursor-pointer bg-transparent rounded-lg overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out">
                  <div className="relative aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <div className="p-6 group">
                    <h3 className="text-xl font-semibold text-[#3d7dd8] mb-3 group-hover:text-[#2c5aa0] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 text-sm bg-white/50 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white/70 transition-all duration-200"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No projects found matching your search.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-full bg-[#3d7dd8] text-white hover:bg-[#2c5aa0] transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
