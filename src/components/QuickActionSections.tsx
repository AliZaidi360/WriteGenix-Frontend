import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { FileCheck, HelpCircle } from 'lucide-react';

export default function QuickActionSections() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Already have a masterpiece */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 hover-elevate transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-full bg-primary/10 p-3">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">
                  Already have a masterpiece that is ready to get published?
                </h3>
                <p className="text-lg font-bold text-accent mb-4">
                  DON'T WASTE A SINGLE MINUTE!
                </p>
                <p className="text-muted-foreground mb-6">
                  If you already have a masterpiece ready to go out to the world, we are here to do the rest for you.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">
                    Request Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Not sure if your work is good enough */}
          <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 hover-elevate transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-full bg-accent/10 p-3">
                <HelpCircle className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">
                  Not sure if your work is good enough to get published?
                </h3>
                <p className="text-lg font-bold text-primary mb-4">
                  DON'T WORRY!
                </p>
                <p className="text-muted-foreground mb-6">
                  Sit back and relax while we proofread, edit and write flawless content for your book and other publications!
                </p>
                <Button size="lg" variant="outline" className="w-full border-2" asChild>
                  <Link href="/contact">
                    TALK TO AN EXPERT
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

