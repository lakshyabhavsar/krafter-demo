import { Card } from "./ui/card";
import { AspectRatio } from "./ui/aspectratio";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    alt: "Woman working on laptop",
    category: "Lifestyle"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    alt: "Technology circuit board",
    category: "Technology"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    alt: "Nature landscape with deer",
    category: "Nature"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
    alt: "Bridge and waterfall",
    category: "Nature"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop",
    alt: "Modern architecture",
    category: "Architecture"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    alt: "Programming code",
    category: "Technology"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
    alt: "Orange tabby cat",
    category: "Animals"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    alt: "Laptop on glass table",
    category: "Technology"
  }
];

export const ImageGallery = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Image Gallery</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A curated collection of visual stories and moments
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="relative">
              <AspectRatio ratio={4/3}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium bg-white/20 px-2 py-1 rounded">
                  {image.category}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
