import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { PenTool, Users, Award, Clock } from 'lucide-react';

export default function BookWritersSection() {
  const features = [
    {
      icon: PenTool,
      title: 'Professional Writers',
      description: 'We don\'t give our work to unpracticed interns. Our writers are proficient, full-time professionals– and we\'re outstanding at what we do.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our writers have been doing this for quite a while. We concentrate on writing book manuscripts with intellectual approach and vast experience.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'We have completed over a thousand renowned projects. Our statured client list is a testament to our dedication and premium service.'
    },
    {
      icon: Clock,
      title: 'Over a Decade of Experience',
      description: 'We have been providing leading book writers for hire for over a decade, seeking to become your number one choice.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Need <span className="text-accent">Book Writers For Hire</span>?<br />
              Look No Further
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We have Professional book writers for hire; we concentrate on writing book manuscripts. Whether you want a co-author, ghostwriter, or a consultant, who can help you with his intellectual approach and vast experience, we are very happy to be at your service.
            </p>
          </div>

          <div className="mb-12">
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <p className="text-muted-foreground leading-relaxed mb-4">
                You wanted to write a book. In fact, you have wanted to write a book for years now, but you never get the chance to make it happen and you have been wondering how you can find book writers for hire.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since we understand client benefit, we have mastered the specialty of combining our ability with yours. We know how to offer advice, while respecting your desire and needs as a writer. As a book writing company, we recognize your understanding you want with your target audience as a becoming a great book writer. Also creating your novel identity as an individual.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold mb-6 text-foreground">
              Our company is the best option if you want book writers for hire.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">
                Discover How We Can Help
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

