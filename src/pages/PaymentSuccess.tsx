import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <Card className="p-12 text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-accent/10 p-4">
              <CheckCircle className="h-16 w-16 text-accent" />
            </div>
          </div>
          
          <h1 className="text-4xl font-serif font-bold mb-4">Payment Successful!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your payment. We've received your order and will begin working on your project shortly.
          </p>
          <p className="text-muted-foreground mb-8">
            You will receive a confirmation email with all the details. Our team will contact you within 24 hours to discuss next steps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/">
                Return Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

