import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@assets/generated_images/Hero_background_literary_scene_617a9711.png';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
          Transform Your Story Into a Bestseller
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional ghostwriting, publishing, and marketing services trusted by 500+ authors worldwide
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground border border-accent-border" data-testid="button-start-journey" asChild>
            <Link href="/contact">
              Start Your Book Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/10 backdrop-blur-md border-white/30 text-white hover:bg-background/20"
            data-testid="button-view-services"
            asChild
          >
            <Link href="/services">
              Explore Our Services
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span className="text-sm">500+ Books Published</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span className="text-sm">95% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span className="text-sm">10+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
