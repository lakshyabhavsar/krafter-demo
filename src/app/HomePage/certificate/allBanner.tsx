import Product from "./product"
import LogoBanner from "./secondBanner"
export default function BannerGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* title Row - Logo and Title */}
      <div className="flex items-center justify-left gap-4 mb-8">
        
        <h1 className="text-3xl font-bold text-black">Certificates</h1>
      </div>
      
      {/* first Row - Award Banners */}
      <div className="grid grid-cols-1 mb-7 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
        <div className="h-full">
          <Product 
            title="ISO 9001" 
              
            accentColor="#545353" 
            
            logoSrc="/images/home/9001.png"
          />
        </div>
        
        <div className="h-full">
          <Product 
            title="ISO 14001" 
            accentColor="#545353" 
            
            logoSrc="/images/home/14001.png"
          />
        </div>
        
        <div className="h-full">
          <Product
            title="ISO 45001" 
            
            accentColor="#545353" 
            
            logoSrc="/images/home/45001.png"
          />
        </div>

        <div className="h-full">
          <Product 
            title="ISO 27001" 
            
            accentColor="#545353" 
            
            logoSrc="/images/home/27001.png"
          />
        </div>
        </div>
{/* first Row - Award Banners */}
<div className="flex items-center justify-left gap-4 mb-8">
        
        <h1 className="text-3xl font-bold text-black">Partners</h1>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5">
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
        {/*<div className="h-full">
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
        </div> */}
        </div>
      
    </div>
  )
}
