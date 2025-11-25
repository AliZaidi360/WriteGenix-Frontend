import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import ValueProposition from '@/components/ValueProposition';
import ServiceList from '@/components/ServiceList';
import BookWritersSection from '@/components/BookWritersSection';
import TrustBadges from '@/components/TrustBadges';
import QuickActionSections from '@/components/QuickActionSections';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { PenTool, BookOpen, Rocket, Palette, ShoppingCart, TrendingUp, Code, Megaphone, FileEdit } from 'lucide-react';
import femaleAuthor from '@assets/generated_images/Female_author_testimonial_photo_fcd9176f.png';
import maleAuthor from '@assets/generated_images/Male_author_testimonial_photo_cf608095.png';

export default function Home() {
  const bookServices = [
    {
      icon: PenTool,
      title: 'Ghostwriting',
      description: 'Professional writers bring your vision to life with expertly crafted manuscripts.',
      features: [
        'Complete manuscript writing',
        'Unlimited revisions',
        'Professional editing',
        'Your voice, our expertise'
      ]
    },
    {
      icon: BookOpen,
      title: 'Publishing',
      description: 'Get your book published on Amazon and all major platforms with our comprehensive support.',
      features: [
        'Amazon publishing',
        'All platform distribution',
        'ISBN registration',
        'Format optimization'
      ]
    },
    {
      icon: Palette,
      title: 'Book Cover Design',
      description: 'Eye-catching, professional cover designs that capture your books essence.',
      features: [
        'Custom cover design',
        'Multiple concepts',
        'Print & digital formats',
        'Unlimited revisions'
      ]
    },
    {
      icon: FileEdit,
      title: 'Editing & Proofreading',
      description: 'Meticulous editing and proofreading to ensure your manuscript is polished and professional.',
      features: [
        'Comprehensive editing',
        'Grammar & style check',
        'Formatting',
        'Quality assurance'
      ]
    }
  ];

  const digitalServices = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for your business.',
      features: [
        'Responsive design',
        'E-commerce integration',
        'Performance optimized',
        'Ongoing support'
      ]
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and drive results.',
      features: [
        'SEO optimization',
        'Social media marketing',
        'Content marketing',
        'Analytics & reporting'
      ]
    }
  ];

  const testimonials = [
    {
      quote: 'Working with WriteGenix was transformative. They took my rough ideas and helped me craft a compelling narrative that resonated with readers. The editing process was thorough, collaborative, and respectful of my voice. Within six months of publication, my book hit bestseller status in its category.',
      author: 'Dr. Jennifer Martinez',
      role: 'Author & Psychologist',
      bookTitle: 'Breaking the Silence: A Journey Through Trauma and Healing'
    },
    {
      quote: 'I had been sitting on my business insights for years, unsure how to present them. WriteGenix not only helped structure my knowledge into a coherent book but also handled the entire publishing and marketing process. The professionalism and attention to detail were outstanding.',
      author: 'David Chen',
      role: 'Entrepreneur & Business Consultant',
      bookTitle: 'Scaling Smart: Sustainable Growth Strategies for Modern Businesses'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      
      <main className="flex-1 relative">
        <Hero />
        
        <TrustBadges />

        <BookWritersSection />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive book publishing and digital solutions tailored to bring your vision to life
              </p>
            </div>

            {/* Book & Ebook Services */}
            <div className="mb-16">
              <h3 className="text-2xl font-serif font-semibold mb-8 text-center">Book & Ebook Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bookServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>

            {/* Digital Services */}
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-semibold mb-8 text-center">Digital Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {digitalServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" data-testid="button-view-all-services" asChild>
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <ServiceList />

        <QuickActionSections />

        <ValueProposition />

        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Success stories from authors who trusted us with their dreams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Start Your Publishing Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of successful authors who have transformed their stories into bestsellers with WriteGenix
            </p>
            <Button size="lg" variant="secondary" data-testid="button-get-free-consultation" asChild>
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
