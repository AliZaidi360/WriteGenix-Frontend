import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Elements } from '@stripe/react-stripe-js';
import { getStripe } from '@/lib/stripe';
import CheckoutForm from './CheckoutForm';

interface PaymentButtonProps {
  amount: number;
  serviceName: string;
  buttonText?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export default function PaymentButton({
  amount,
  serviceName,
  buttonText = 'Pay Now',
  variant = 'default',
  size = 'default',
  className
}: PaymentButtonProps) {
  const [open, setOpen] = useState(false);
  const stripePromise = getStripe();

  const handleSuccess = () => {
    setOpen(false);
    // You can add a toast notification here
    window.location.href = '/payment-success';
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Payment</DialogTitle>
        </DialogHeader>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            amount={amount}
            serviceName={serviceName}
            onSuccess={handleSuccess}
          />
        </Elements>
      </DialogContent>
    </Dialog>
  );
}

