import { CheckCircle2, Globe, DollarSign, FileText, Users, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ValueProposition() {
  const privileges = [
    {
      icon: Globe,
      title: 'International Publication',
      description: 'Get Your Book Published on Amazon, Barnes & Noble, Kindle, Google Books and other leading platforms'
    },
    {
      icon: Award,
      title: 'Published Author Title',
      description: 'Use your published author title with full endorsement and credibility'
    },
    {
      icon: DollarSign,
      title: 'Sell Your Books Online',
      description: 'Be the exclusive money-maker for your effort and earn up to $10,000+ a month'
    },
    {
      icon: FileText,
      title: '100% Publishing Rights',
      description: 'Earn 100% publishing rights of your books - complete ownership'
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with renowned authors around the globe'
    },
    {
      icon: CheckCircle2,
      title: 'Exclusive Membership',
      description: 'Get featured on WriteGenix Publications Website'
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            The Privileges of Becoming a Published Author
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When you work with WriteGenix, you gain more than just a book - you gain a complete publishing advantage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {privileges.map((privilege, index) => {
            const Icon = privilege.icon;
            return (
              <Card key={index} className="p-6 hover-elevate transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{privilege.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {privilege.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

