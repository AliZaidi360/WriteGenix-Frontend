import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+15551234567" className="flex items-center gap-2 hover:opacity-80">
            <Phone className="h-4 w-4" />
            <span>Call Us: 1-555-123-4567</span>
          </a>
          <a href="mailto:hello@writegenix.com" className="flex items-center gap-2 hover:opacity-80">
            <Mail className="h-4 w-4" />
            <span>Email Us: hello@writegenix.com</span>
          </a>
        </div>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background text-foreground hover:bg-background/90"
          asChild
        >
          <Link href="/contact">TALK TO AN EXPERT</Link>
        </Button>
      </div>
    </div>
  );
}

