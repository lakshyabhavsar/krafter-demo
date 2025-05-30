import CTASection from "./cta";
import FeaturesSection from "./features";
import BenefitSection from "./benifits";
import CurrentPhase from "./currentphase";
import HeroSection from "./HeroSection";

export default function DataMining() {
  return (
    <>
      <main>
        <div className="text-white min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
          <HeroSection />
        </div>

        <div className="bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] min-h-screen ">
          <FeaturesSection />
          <BenefitSection />
          <CurrentPhase />
          <CTASection />
        </div>
      </main>
    </>
  );
}
