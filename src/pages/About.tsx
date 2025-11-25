import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { CheckCircle, Users, BookOpen, Award, Heart } from 'lucide-react';
import aboutImage from '@assets/generated_images/About_section_workspace_background_e119270f.png';

export default function About() {
  const stats = [
    { number: '500+', label: 'Books Published' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Writers' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Stories',
      description: 'We believe every story deserves to be told beautifully and professionally.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your vision is our priority. We work collaboratively to bring your ideas to life.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in writing, editing, and publishing services.'
    },
    {
      icon: BookOpen,
      title: 'Industry Expertise',
      description: 'Our team brings decades of combined experience in publishing and marketing.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif font-bold mb-6">About WriteGenix Solutions</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transforming aspiring authors into published success stories
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img 
                  src={aboutImage} 
                  alt="WriteGenix Solutions workspace" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>

              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded over a decade ago, WriteGenix Solutions emerged from a simple belief: every story deserves to be told with excellence. What started as a small team of passionate writers has grown into a comprehensive publishing powerhouse.
                  </p>
                  <p>
                    We've helped over 500 authors bring their visions to life, from first-time writers to established professionals. Our holistic approach covers every aspect of the publishing journey—from initial manuscript development to marketing and distribution.
                  </p>
                  <p>
                    Today, WriteGenix Solutions stands as a trusted partner for authors worldwide, combining traditional publishing expertise with modern digital marketing strategies to ensure your book reaches its full potential.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Professional Excellence</h4>
                      <p className="text-muted-foreground">Industry-leading writers, editors, and designers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Complete Confidentiality</h4>
                      <p className="text-muted-foreground">Your story, your rights, guaranteed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Proven Results</h4>
                      <p className="text-muted-foreground">Numerous bestsellers and award-winning titles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <Card key={index} className="p-8 text-center" data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="mb-20">
              <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="p-8 text-center hover-elevate transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-primary/10 p-4">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
