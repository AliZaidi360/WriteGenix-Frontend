import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-2 text-xs md:text-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3 md:gap-6 flex-wrap">
          <a href="tel:+15551234567" className="flex items-center gap-1.5 hover:opacity-80 whitespace-nowrap">
            <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Call Us: </span>
            <span>1-555-123-4567</span>
          </a>
          <a href="mailto:hello@writegenix.com" className="flex items-center gap-1.5 hover:opacity-80 whitespace-nowrap">
            <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Email: </span>
            <span className="hidden md:inline">hello@writegenix.com</span>
            <span className="md:hidden">hello@...</span>
          </a>
        </div>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background text-foreground hover:bg-background/90 text-xs whitespace-nowrap"
          asChild
        >
          <Link href="/contact">TALK TO AN EXPERT</Link>
        </Button>
      </div>
    </div>
  );
}

