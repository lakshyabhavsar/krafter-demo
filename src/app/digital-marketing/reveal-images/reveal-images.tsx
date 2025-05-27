import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-4 sm:right-6 md:right-8 -top-1 z-40 h-16 sm:h-18 md:h-20 w-12 sm:w-14 md:w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit  overflow-visible py-4 sm:py-6 md:py-8">
      <h1 className="text-2xl g-10 sm:text-4xl md:text-4xl font-black text-black/50 transition-all duration-500 group-hover:opacity-40">
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-4 sm:group-hover:translate-x-5 md:group-hover:translate-x-6 group-hover:translate-y-4 sm:group-hover:translate-y-5 md:group-hover:translate-y-6 group-hover:rotate-12",
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "App development",
      images: [
        {
          src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Web design",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "DHarma ERP",
      images: [
        {
          src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
  ];
  return (
    <div className="relative min-h-screen w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg1.mp4" type="video/mp4" />
        
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col gap-1 rounded-sm   px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 w-full max-w-[1300px] mx-auto h-full flex items-center justify-center">
        <h3 className="text-3xl sm:text-4xl font-black uppercase text-white">Our services</h3>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-8">
          {items.map((item, index) => (
            <RevealImageListItem key={index} text={item.text} images={item.images} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { RevealImageList };
