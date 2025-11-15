import { useRoute } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getServiceBySlug } from '@/data/servicesData';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'wouter';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import NotFound from './not-found';

export default function ServiceDetail() {
  const [, params] = useRoute('/services/:slug');
  const service = params?.slug ? getServiceBySlug(params.slug) : undefined;

  if (!service) {
    return <NotFound />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-card">
          <div className="container mx-auto px-6">
            <Button variant="ghost" className="mb-8" data-testid="button-back-to-services" asChild>
              <Link href="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Services
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-primary/10 p-6">
                  <Icon className="h-16 w-16 text-primary" />
                </div>
              </div>
              <h1 className="text-5xl font-serif font-bold mb-6" data-testid="text-service-title">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">What's Included</h2>
                <ul className="space-y-4">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 bg-primary/5">
                <h2 className="text-2xl font-serif font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Schedule a free consultation to discuss your project and receive a custom quote tailored to your specific needs.
                </p>
                <Button size="lg" className="w-full" data-testid="button-consult-today" asChild>
                  <Link href="/contact">
                    Consult Today
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  No commitment required • Free consultation
                </p>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {service.fullDescription}
              </p>

              <h3 className="text-2xl font-serif font-bold mb-6">Why Choose This Service?</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-serif font-bold mb-6">Our Process</h3>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Let's Bring Your Vision to Life</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every project is unique. Contact us today for a free consultation and custom quote tailored to your specific needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" data-testid="button-get-custom-quote" asChild>
                  <Link href="/contact">
                    Get Your Custom Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" data-testid="button-view-all-services" asChild>
                  <Link href="/services">
                    View All Services
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
