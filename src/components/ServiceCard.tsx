import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { Link } from 'wouter';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="p-8 hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-primary/10 p-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </div>
      
      <h3 className="text-2xl font-serif font-semibold text-center mb-4">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-center mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-accent mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href="/contact"
        className="text-primary hover:text-primary/80 font-medium text-sm flex items-center justify-center gap-2 mt-4"
        data-testid={`link-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        Learn More →
      </Link>
    </Card>
  );
}
