
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Minimalist Design",
    excerpt: "Exploring how less can be more in modern web design, focusing on clean lines and purposeful elements.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Building Sustainable Digital Products",
    excerpt: "A deep dive into creating environmentally conscious technology solutions for the future.",
    author: "Michael Torres",
    date: "March 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "The Psychology of User Experience",
    excerpt: "Understanding how human behavior influences digital interface design and user interaction patterns.",
    author: "Emma Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
  }
];

export const BlogSection = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Blogs</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          In-depth explorations and personal insights from our contributors
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500">{post.readTime}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
