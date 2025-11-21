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
    <div className="fixed top-[88px] left-0 right-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white shadow-lg animate-in slide-in-from-top">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-xs animate-pulse whitespace-nowrap">
            LIMITED TIME OFFER!
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base md:text-lg font-bold">70% OFF</span>
            <span className="text-xs md:text-sm">on all ghostwriting services</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
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

