import { Shield, Clock, DollarSign, Zap } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      text: '100% Satisfaction Guaranteed'
    },
    {
      icon: Clock,
      text: '24/7 Professional Support'
    },
    {
      icon: DollarSign,
      text: 'Affordable Prices'
    },
    {
      icon: Zap,
      text: 'Quickest Turnaround'
    }
  ];

  return (
    <div className="bg-primary/10 py-8 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                <Icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

