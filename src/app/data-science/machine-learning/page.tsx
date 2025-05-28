import { CTASection } from "./cta";
import { FeaturesSection } from "./features";
import Hero from "./hero";
import { Statistic } from "./Statistics" // Fixed casing to match the actual file name

export default function PurchasePage() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <FeaturesSection />
            <Statistic />
            <CTASection />
        </div>
    );
}