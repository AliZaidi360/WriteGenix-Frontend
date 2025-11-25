import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { getServicesByCategory } from '@/data/servicesData';
import { BookOpen, Code } from 'lucide-react';

export default function Services() {
  const bookServices = getServicesByCategory('book');
  const digitalServices = getServicesByCategory('digital');

  const renderServiceCard = (service: typeof bookServices[0]) => {
    const Icon = service.icon;
    return (
      <Link key={service.slug} href={`/services/${service.slug}`}>
        <Card className="p-8 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full" data-testid={`card-service-${service.slug}`}>
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-4">
              <Icon className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h3 className="text-2xl font-serif font-semibold text-center mb-4">
            {service.title}
          </h3>
          
          <p className="text-muted-foreground text-center mb-6 leading-relaxed">
            {service.description}
          </p>
          
          <ul className="space-y-3">
            {service.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="text-accent mt-1">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-6">
            <span className="text-primary hover:text-primary/80 font-medium text-sm">
              Learn More →
            </span>
          </div>
        </Card>
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive book publishing and digital solutions to bring your vision to life
              </p>
            </div>

            {/* Book Services Section */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-12">
                <div className="rounded-full bg-primary/10 p-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-serif font-bold">Book & Ebook Services</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                Complete publishing solutions from manuscript to bestseller
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bookServices.map(renderServiceCard)}
              </div>
            </div>

            {/* Digital Services Section */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-12">
                <div className="rounded-full bg-primary/10 p-3">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-serif font-bold">Digital Services</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                Modern web development and digital marketing solutions for your business
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {digitalServices.map(renderServiceCard)}
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="bg-muted/50 rounded-lg p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-4">Need a Custom Package?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Every project is unique. Contact us to discuss a tailored solution that meets your specific needs and budget.
                </p>
                <Button size="lg" data-testid="button-request-quote" asChild>
                  <Link href="/contact">
                    Request a Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
