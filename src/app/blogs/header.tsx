
import { PenTool } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-3">
          <PenTool className="h-8 w-8 text-gray-700" />
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Editorial
          </h1>
        </div>
        <p className="text-center text-gray-600 mt-2 text-lg">
          Discover stories, insights, and perspectives
        </p>
      </div>
    </header>
  );
};