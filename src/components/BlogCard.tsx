import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, category, date, readTime, slug }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-blog-${slug}`}>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" data-testid={`badge-category-${category.toLowerCase()}`}>{category}</Badge>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {readTime}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-serif font-semibold mb-3 leading-tight" data-testid={`text-title-${slug}`}>
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {excerpt}
        </p>

        <Link 
          href={`/blog/${slug}`}
          className="text-primary hover:text-primary/80 font-medium text-sm"
          data-testid={`link-read-more-${slug}`}
        >
          Read More →
        </Link>
      </div>
    </Card>
  );
}
