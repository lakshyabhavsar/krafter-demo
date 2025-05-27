import ProductHuntBanner from "./product-hunt-banner"
import LogoBanner from "./logo-banner"
export default function BannerGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* First Row - Logo and Title */}
      <div className="flex items-center justify-center gap-4 mb-12">
        
        <h1 className="text-3xl font-bold text-gray-600">Certificate and Partner</h1>
      </div>
      
      {/* Second Row - Award Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
        <div className="h-full">
          <ProductHuntBanner 
            title="Golden Kitty Awards" 
            subtitle="PRODUCT HUNT"  
            accentColor="#F5A623" 
            textColor="#DA552F"
            logoSrc="/images/awards/golden-kitty.png"
          />
        </div>
        
        <div className="h-full">
          <ProductHuntBanner 
            title="Silver Paw Awards" 
            subtitle="PRODUCT HUNT" 
            accentColor="#9CA3AF" 
            textColor="#4B5563"
            logoSrc="/images/awards/silver-paw.png"
          />
        </div>
        
        <div className="h-full">
          <ProductHuntBanner 
            title="Maker Festival" 
            subtitle="PRODUCT HUNT" 
            accentColor="#8B5CF6" 
            textColor="#7C3AED"
            logoSrc="/images/awards/maker-fest.png"
          />
        </div>

        <div className="h-full">
          <ProductHuntBanner 
            title="Tech Innovation" 
            subtitle="PRODUCT HUNT" 
            accentColor="#10B981" 
            textColor="#059669"
            logoSrc="/images/home/Microsoft_365_logo.png"
          />
        </div>

        <div className="h-full">
          <LogoBanner 
            logoSrc="/images/home/Microsoft_365_logo.png"
            accentColor="#EF4444" 
          />
        </div>
        <div className="h-full">
          <LogoBanner 
            logoSrc="/images/home/oracle.png"
            accentColor="#EF4444" 
          />
        </div>
        <div className="h-full">
          <LogoBanner 
            logoSrc="/images/home/fiver.png"
            accentColor="#EF4444" 
          />
        </div>
        <div className="h-full">
          <LogoBanner 
            logoSrc="/images/home/upwork.png"
            accentColor="#EF4444" 
          />
        </div>
      </div>
    </div>
  )
}
