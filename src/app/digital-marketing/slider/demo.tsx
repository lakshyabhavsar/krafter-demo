import { RainbowButton } from "./btn";
import { InfiniteSlider } from "./infinite-slider";

function InfiniteSliderVertical() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-gray-900">
            Discover Our Latest Collections
          </h2>
          <p className="text-lg text-gray-600 items-center md:items-start">
            Explore our curated selection of trending items. Each piece is carefully selected
            to bring you the best in style and quality.
          </p>
          <RainbowButton>Get Unlimited Access</RainbowButton>;
        </div>
    <div className='flex h-[350px] item-center justify-center space-x-4'>
      <InfiniteSlider direction='vertical'>
        <img
          src='/images/slider1.jpg'
          alt='Dean blunt - Black Metal 2'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/images/slider3.jpg'
          alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/images/slider4.jpg'
          alt='Yung Lean - Stardust'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/images/slider5.jpg'
          alt='Lana Del Rey - Ultraviolence'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/images/slider6.jpg'
          alt='A$AP Rocky - Tailor Swif'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520'
          alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
          className='aspect-square w-[120px] rounded-[4px]'
        />
      </InfiniteSlider>
      <InfiniteSlider direction='vertical' reverse>
        <img
          src='https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645'
          alt='DAYS BEFORE RODEO - Travis Scott'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/images/slider5.jpg'
          alt="You're in My System - TORYONTHEBEAT"
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/images/slider4.jpg'
          alt="You can't tell me - People Make the World Go Round"
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/images/slider3.jpg'
          alt='ye - Kanye West'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/images/slider2.jpg'
          alt='Slime Season 3 - Young Thug'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/images/slider1.jpg'
          alt='SWAG - 8ruki'
          className='aspect-square w-[120px] rounded-[4px]'
        />
      </InfiniteSlider>
    </div>
    </div>
    </div>
  );
} 

export default InfiniteSliderVertical;
