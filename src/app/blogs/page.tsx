import { BlogSection } from "./blogsection";
import { NewsSection } from "./newsection";
import { ArticleSection } from "./articlesection";
import { Header } from "./header";
import { ImageGallery } from "./imagegallery";

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-12 space-y-16">
        <BlogSection />
        <NewsSection />
        <ArticleSection />
        <ImageGallery />
      </main>
    </div>
  );
};

export default BlogsPage;