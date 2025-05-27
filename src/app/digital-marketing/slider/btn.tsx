import React from "react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function RainbowButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="relative inline-block">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-rainbow"></div>
      <button
        className={cn(
          "relative px-8 py-4 bg-black text-white rounded-[30] font-medium",
          "hover:bg-black/90 transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export function RainbowButtonAlternate({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff0000] via-[#00ff00] to-[#0000ff] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-rainbow"></div>
      <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center">
        <span className="text-gray-100 group-hover:text-white transition duration-200">
          {children}
        </span>
      </button>
    </div>
  );
}
