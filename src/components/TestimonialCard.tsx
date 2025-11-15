import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  bookTitle?: string;
  image?: string;
}

export default function TestimonialCard({ quote, author, role, bookTitle, image }: TestimonialCardProps) {
  return (
    <Card className="p-8 hover-elevate transition-all duration-300" data-testid={`card-testimonial-${author.toLowerCase().replace(/\s+/g, '-')}`}>
      <Quote className="h-10 w-10 text-accent/30 mb-4" />
      
      <p className="text-lg italic font-serif text-foreground mb-6 leading-relaxed">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        
        <div>
          <p className="font-semibold text-foreground" data-testid={`text-author-${author.toLowerCase().replace(/\s+/g, '-')}`}>{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
          {bookTitle && (
            <p className="text-sm text-primary font-medium italic mt-1">{bookTitle}</p>
          )}
        </div>
      </div>
    </Card>
  );
}
