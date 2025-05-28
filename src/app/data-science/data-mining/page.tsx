import CapabilityCard from "./CapabilityCard";
import HeroSection from "./HeroSection";
import IndustryApplications from "./IndustryApplications";


export default function DataMining() {
    return (
      <>
        <main>
        <div className="text-white min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
          <HeroSection/>
        </div>
        <div className="bg-white text-gray-700">
          <IndustryApplications/>
        </div>
        </main>
      </>
    );
  }