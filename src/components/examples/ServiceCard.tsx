import ServiceCard from '../ServiceCard';
import { PenTool } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        icon={PenTool}
        title="Ghostwriting"
        description="Professional writers bring your vision to life with expertly crafted manuscripts."
        features={[
          'Complete manuscript writing',
          'Unlimited revisions',
          'Professional editing',
          'Your voice, our expertise'
        ]}
      />
    </div>
  );
}
