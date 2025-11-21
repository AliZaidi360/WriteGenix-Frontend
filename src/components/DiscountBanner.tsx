import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white shadow-lg animate-in slide-in-from-top">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm animate-pulse">
            LIMITED TIME OFFER!
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">70% OFF</span>
            <span className="text-sm">on all ghostwriting services</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="bg-white text-orange-600 hover:bg-gray-100"
            asChild
          >
            <Link href="/contact">Claim Offer</Link>
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="hover:opacity-70"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

