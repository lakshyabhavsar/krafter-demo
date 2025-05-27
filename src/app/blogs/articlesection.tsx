
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Eye } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Healthcare",
    excerpt: "Examining how machine learning algorithms are revolutionizing medical diagnosis and treatment protocols.",
    tags: ["AI", "Healthcare", "Technology"],
    views: "12.5k",
    readTime: "12 min read",
    featured: true
  },
  {
    id: 2,
    title: "Quantum Computing: Breaking the Classical Barriers",
    excerpt: "A comprehensive look at quantum supremacy and its implications for cryptography and computational science.",
    tags: ["Quantum", "Computing", "Science"],
    views: "8.2k",
    readTime: "15 min read",
    featured: false
  },
  {
    id: 3,
    title: "Blockchain Beyond Cryptocurrency",
    excerpt: "Exploring practical applications of distributed ledger technology in supply chain management and governance.",
    tags: ["Blockchain", "Supply Chain", "Innovation"],
    views: "6.8k",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 4,
    title: "The Rise of Edge Computing",
    excerpt: "How processing data closer to its source is transforming IoT and real-time applications.",
    tags: ["Edge Computing", "IoT", "Infrastructure"],
    views: "9.1k",
    readTime: "8 min read",
    featured: true
  }
];

export const ArticleSection = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Articles</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive analyses and research-backed perspectives on complex topics
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <Card key={article.id} className={`hover:shadow-lg transition-all duration-300 cursor-pointer group ${article.featured ? 'ring-2 ring-blue-100 bg-gradient-to-br from-blue-50 to-white' : ''}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-3">
                {article.featured && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Featured
                  </Badge>
                )}
                <div className="flex items-center space-x-4 text-sm text-gray-500 ml-auto">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{article.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
