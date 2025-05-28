
import FeatureSection from "./features";
import HeroSection from "./hero";
import ProcessFlowSection from "./processflow";

export default function Sales() {
  return (
    <>
    <main className="bg-gradient-to-tr from-blue-900 to-purple-900 text-white min-h-screen">
        <HeroSection/>
        <FeatureSection/>
        <ProcessFlowSection/>
    </main>
    </>
  );
}
