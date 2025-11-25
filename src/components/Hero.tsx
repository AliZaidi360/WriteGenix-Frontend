import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/generated_images/Hero_background_literary_scene_617a9711.png)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight" 
            data-testid="text-hero-title"
          >
            Transform Your Story Into a Bestseller
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional ghostwriting, publishing, web development, and digital marketing services trusted by 500+ clients worldwide.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-base md:text-lg px-8 py-6" 
              data-testid="button-start-journey" 
              asChild
            >
              <Link href="/contact">
                Start Your Book Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-gray-800/80 border-gray-700 text-white hover:bg-gray-700 text-base md:text-lg px-8 py-6"
              data-testid="button-explore-services"
              asChild
            >
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base font-medium">500+ Books Published</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base font-medium">95% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base font-medium">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
