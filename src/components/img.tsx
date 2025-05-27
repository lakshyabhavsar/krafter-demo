import Image from 'next/image';

export function ImageSection() {
  return (
    <div className="relative w-full mt-28">
      <Image
        src="/images/middle-bg1.jpeg"
        alt="Section 4 Image"
        width={1280}
        height={250}
        className="w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30 flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-white text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl">
            Right balance between technical performance and asthetics
          </h2>
        </div>
      </div>
    </div>
  );
}