import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-orange-50">
      {/* Split Layout */}
      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="relative z-10">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-4 leading-tight" data-testid="text-hero-title">
              MANIFEST YOUR
              <br />
              <span className="text-accent">CONCEPT THROUGH</span>
              <br />
              <span className="text-primary">GHOSTWRITING</span>
            </h1>
            <div className="text-3xl md:text-4xl font-bold text-primary mt-4">
              <p className="mb-2">**You Conceive**</p>
              <p className="mb-2">**We Construct**</p>
              <p>**Your Book**</p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Get rid of the troubles and tediousness of writing your own book. Let us ghostwrite your book and you take the credit for it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6" 
              data-testid="button-start-journey" 
              asChild
            >
              <Link href="/contact">
                LET'S GET STARTED
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              data-testid="button-live-chat"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              LIVE CHAT
            </Button>
          </div>

          <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground italic">
              "The rights and profits to your ghostwritten books are 100% your entitlement and property."
            </p>
          </div>
        </div>

        {/* Right Side - Visual Elements */}
        <div className="relative hidden lg:block">
          <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-2xl">
            {/* Book Stack Visual */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-primary/10 rounded-lg p-4 transform rotate-6">
                <BookOpen className="h-16 w-16 text-primary" />
              </div>
              <div className="bg-white rounded-lg shadow-xl p-6 mt-12">
                <div className="text-center mb-4">
                  <p className="text-xs text-muted-foreground mb-2">WRITTEN BY YOU</p>
                  <h3 className="text-xl font-bold text-primary">Your Book Title</h3>
                </div>
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-48 rounded flex items-center justify-center">
                  <BookOpen className="h-20 w-20 text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/10 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-8 text-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">500+ Books Published</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">95% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">100% Rights & Profits Yours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
