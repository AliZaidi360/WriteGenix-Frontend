import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function ServiceList() {
  const services = [
    'Extensive Research and Interviews to learn all about your book',
    'Planning and outlining your book',
    'Ghostwriting original content based on interviews or research',
    'Revisions to our writing per your feedback and guidance',
    'Editing to ensure your text is error free',
    'Formatting and type-setting for publication',
    'Publishing consultancy for traditional publishing and self-publishing',
    'Book cover design',
    'Self-publishing services',
    'On-call availability for discussions and consultation throughout the project'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              BOOK WRITING SERVICES
            </h2>
            <p className="text-lg text-muted-foreground">
              Allow us to turn your ideas and concepts to words and direct you through the entire writing and publishing process. With our amazing book writing services, your dream of becoming a published author is about to come true.
            </p>
          </div>

          <Card className="p-8 md:p-12 mb-8">
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">
                Talk to an Expert
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

