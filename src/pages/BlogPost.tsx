import { useRoute } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogPostBySlug } from '@/data/blogPosts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import NotFound from './not-found';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  const post = params?.slug ? getBlogPostBySlug(params.slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-8">
              <Badge className="mb-4" data-testid={`badge-category-${post.category.toLowerCase()}`}>
                {post.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight" data-testid="text-post-title">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {post.readTime}
                </span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-ul:my-6 prose-li:my-2" data-testid="article-content">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <div className="mt-16 pt-8 border-t">
              <div className="bg-card p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold mb-4">Ready to Publish Your Book?</h3>
                <p className="text-muted-foreground mb-6">
                  From ghostwriting to marketing, we handle everything. Let's bring your story to life.
                </p>
                <Button size="lg" data-testid="button-get-started" asChild>
                  <Link href="/contact">
                    Get Started Today
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
