
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, TrendingUp } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Tech Industry Embraces Remote-First Policies",
    summary: "Major companies announce permanent remote work options following productivity studies.",
    category: "Technology",
    timestamp: "2 hours ago",
    trending: true
  },
  {
    id: 2,
    title: "Sustainable Energy Breakthrough Announced",
    summary: "Revolutionary solar cell technology achieves 45% efficiency in laboratory tests.",
    category: "Science",
    timestamp: "4 hours ago",
    trending: true
  },
  {
    id: 3,
    title: "Global Climate Summit Reaches Historic Agreement",
    summary: "170 nations commit to carbon neutrality targets with binding enforcement mechanisms.",
    category: "Environment",
    timestamp: "6 hours ago",
    trending: false
  },
  {
    id: 4,
    title: "AI Research Lab Opens Source Code Repository",
    summary: "Leading artificial intelligence company releases open-source tools for developers worldwide.",
    category: "Technology",
    timestamp: "8 hours ago",
    trending: false
  },
  {
    id: 5,
    title: "Economic Markets Show Strong Recovery Signs",
    summary: "Financial analysts report positive indicators across multiple sectors and regions.",
    category: "Finance",
    timestamp: "10 hours ago",
    trending: false
  }
];

export const NewsSection = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">News</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest developments and breaking stories
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {newsItems.map((item, index) => (
          <Card key={item.id} className={`hover:shadow-md transition-all duration-300 cursor-pointer ${index === 0 ? 'lg:col-span-2' : ''}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center space-x-2">
                  {item.trending && (
                    <div className="flex items-center space-x-1 text-red-500">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-xs font-medium">Trending</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{item.timestamp}</span>
                  </div>
                </div>
              </div>
              <CardTitle className={`text-gray-900 hover:text-blue-600 transition-colors ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600">{item.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
