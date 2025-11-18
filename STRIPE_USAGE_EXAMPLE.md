# Stripe Payment Integration - Usage Examples

## Quick Start: Adding Payment to Service Pages

### Example 1: Add Payment Button to ServiceDetail Page

```tsx
// src/pages/ServiceDetail.tsx
import PaymentButton from '@/components/PaymentButton';

// Add pricing map (you can also store this in servicesData.ts)
const servicePricing: Record<string, number> = {
  'ghostwriting': 2999.99,
  'book-cover-design': 299.99,
  'editing-proofreading': 499.99,
  'formatting': 199.99,
  'amazon-publishing': 149.99,
  'multi-platform-publishing': 249.99,
  'website-development': 999.99,
  'seo-digital-marketing': 399.99,
  'social-media-marketing': 299.99,
  'video-trailer-production': 599.99,
  'press-release': 199.99,
  'bestseller-campaign': 1999.99,
  'a-plus-content': 149.99,
  'amazon-optimization': 249.99,
  'illustrations': 499.99,
  'qr-code-integration': 99.99,
  'personalized-isbn': 125.00,
};

// In your component JSX, add the payment button:
<Card className="p-8 bg-primary/5">
  <h2 className="text-2xl font-serif font-bold mb-4">Ready to Get Started?</h2>
  <p className="text-muted-foreground mb-6 leading-relaxed">
    Schedule a free consultation or purchase this service directly.
  </p>
  
  {servicePricing[service.slug] && (
    <div className="mb-4">
      <p className="text-2xl font-bold mb-2">
        ${servicePricing[service.slug].toFixed(2)}
      </p>
      <PaymentButton
        amount={servicePricing[service.slug]}
        serviceName={service.title}
        buttonText="Purchase Now"
        size="lg"
        className="w-full mb-4"
      />
    </div>
  )}
  
  <Button size="lg" variant="outline" className="w-full" asChild>
    <Link href="/contact">
      Get Free Consultation
    </Link>
  </Button>
</Card>
```

### Example 2: Payment Button in Services List

```tsx
// src/pages/Services.tsx
import PaymentButton from '@/components/PaymentButton';

// Add pricing to service cards
{services.map((service) => {
  const price = servicePricing[service.slug];
  return (
    <Card key={service.slug}>
      {/* ... existing card content ... */}
      
      {price && (
        <div className="mt-6">
          <p className="text-2xl font-bold mb-3">${price.toFixed(2)}</p>
          <PaymentButton
            amount={price}
            serviceName={service.title}
            buttonText="Buy Now"
            size="sm"
            className="w-full"
          />
        </div>
      )}
    </Card>
  );
})}
```

### Example 3: Custom Payment Flow

```tsx
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Elements } from '@stripe/react-stripe-js';
import { getStripe } from '@/lib/stripe';
import CheckoutForm from '@/components/CheckoutForm';
import { Button } from '@/components/ui/button';

function CustomPaymentFlow() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  
  const handleSuccess = () => {
    setOpen(false);
    // Show success message, update UI, etc.
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setAmount(299.99)}>
          Pay $299.99
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Elements stripe={getStripe()}>
          <CheckoutForm
            amount={amount}
            serviceName="Custom Service"
            onSuccess={handleSuccess}
            onError={(error) => console.error(error)}
          />
        </Elements>
      </DialogContent>
    </Dialog>
  );
}
```

## Storing Prices

### Option 1: Add to servicesData.ts

```tsx
// src/data/servicesData.ts
export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  price?: number; // Add optional price field
  // ... other fields
}

export const services: Service[] = [
  {
    slug: 'ghostwriting',
    // ... other fields
    price: 2999.99,
  },
  // ...
];
```

### Option 2: Separate Pricing File

```tsx
// src/data/pricing.ts
export const servicePricing: Record<string, number> = {
  'ghostwriting': 2999.99,
  'book-cover-design': 299.99,
  // ...
};

export function getServicePrice(slug: string): number | undefined {
  return servicePricing[slug];
}
```

## Testing

Use Stripe test cards:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Requires 3D Secure**: `4000 0025 0000 3155`
- Use any future expiry date (e.g., 12/34)
- Use any 3-digit CVC

## Next Steps

1. Set up your backend API (see STRIPE_SETUP.md)
2. Add your Stripe publishable key to `.env`
3. Add pricing to your services
4. Test with Stripe test cards
5. Deploy and test in production

