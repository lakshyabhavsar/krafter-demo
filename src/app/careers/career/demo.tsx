"use client";
import { useState } from "react";

const jobCategories = [
  "View all",
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
];

// Update the jobs data structure
const jobs = [
  {
    title: "Product Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    salary: "£45,000 PA",
    experience: "2-3 years",
  },
  {
    title: "Frontend Developer",
    department: "Development",
    type: "Full-time",
    location: "Remote",
    salary: "£50,000 PA",
    experience: "3-5 years",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    type: "Full-time",
    location: "Remote",
    salary: "£50,000 PA",
    experience: "3-5 years",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Service",
    type: "Full-time",
    location: "Remote",
    salary: "£50,000 PA",
    experience: "3-5 years",
  },
  {
    title: "Operations Lead",
    department: "Operations",
    type: "Full-time",
    location: "Remote",
    salary: "£50,000 PA",
    experience: "3-5 years",
  },
  {
    title: "Financial Analyst",
    department: "Finance",
    type: "Full-time",
    location: "Remote",
    salary: "£50,000 PA",
    experience: "3-5 years",
  },
  {
    title: "Project Manager",
    department: "Management",
    type: "Full-time",
    location: "Remote",
    salary: "£50,000 PA",
    experience: "3-5 years",
  },
];

export default function CareerSection() {
  const [selectedCategory, setSelectedCategory] = useState("View all");

  const filteredJobs = jobs.filter(
    (job) =>
      selectedCategory === "View all" || job.department === selectedCategory
  );

  return (
    <div className="min-w-[320px] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="text-center max-w-[280px] sm:max-w-2xl lg:max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#5b35b5] mb-4 sm:mb-6">
          Be part of <span className="bg-[#b6cddb] px-2">codekrafter</span>{" "}
          mission
        </h1>
        <p className="text-[#464647]/80 text-sm sm:text-base lg:text-lg">
          We believe in building teams where unique perspectives and talents can
          thrive and everyone has what they need to excel in their role, career,
          and at home.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center">
        {jobCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full border-2 transition-all ${
              selectedCategory === category
                ? "bg-[#5b35b5] text-white border-[#5b35b5]"
                : "border-[#5b35b5]/20 text-[#464647] hover:border-[#5b35b5]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="border-2 border-[#5D3891]/20 rounded-lg p-6 hover:shadow-xl transition-all bg-white group hover:border-[#5D3891]/40"
          >
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#5D3891]">{job.department}</span>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-[#5D3891]">
                    {job.title}
                  </h3>
                  {/* Job Listings - update the job card layout */}
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 21c2-3 6-8.5 6-12a6 6 0 10-12 0c0 3.5 4 9 6 12z"
                        />
                        <circle cx="12" cy="9" r="2" strokeWidth={2} />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="text-[#5D3891] text-sm font-medium hover:text-[#FFB84C] flex items-center gap-1">
                  View job
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
