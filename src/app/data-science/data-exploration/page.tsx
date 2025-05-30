import CTASection  from "./cta";
import Hero from "./hero";
import FeaturesSection from "./features";
import BenefitSection from "./benifit" 
import MethodologySection from "./methodology"

export default function PurchasePage() {
    return (
         <>
         <Hero />

        <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0]">
            <FeaturesSection />
            <BenefitSection />
            <MethodologySection />
            <CTASection />
        </div>
         </>
    );
}