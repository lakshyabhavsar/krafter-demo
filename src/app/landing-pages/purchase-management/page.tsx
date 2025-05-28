
import { FeaturesSection } from "./features"
import Hero from "./hero"
import { WorkflowSection } from "./workflow"

export default function PurchasePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero/>
            <FeaturesSection/>
            <WorkflowSection/>
        </div>
    )
}