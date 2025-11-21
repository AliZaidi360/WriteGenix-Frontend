import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getServicesByCategory } from '@/data/servicesData';

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const bookServices = getServicesByCategory('book');
  const digitalServices = getServicesByCategory('digital');

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="sticky top-[40px] z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer">
              <h1 className="text-2xl font-serif font-bold text-foreground">WriteGenix</h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary data-[state=open]:text-primary text-muted-foreground flex items-center gap-1 outline-none">
                Services
                <ChevronDown className="h-3 w-3 transition-transform data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                <div className="p-2">
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Book & Ebook Services
                  </div>
                  {bookServices.slice(0, 8).map((service) => (
                    <DropdownMenuItem key={service.slug} asChild className="px-3 py-2">
                      <Link href={`/services/${service.slug}`} className="cursor-pointer text-sm">
                        {service.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <div className="border-t my-1"></div>
                  <DropdownMenuItem asChild className="px-3 py-2">
                    <Link href="/services" className="cursor-pointer font-semibold text-primary text-sm">
                      View All Book Services →
                    </Link>
                  </DropdownMenuItem>
                </div>
                <div className="border-t p-2">
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Digital Services
                  </div>
                  {digitalServices.map((service) => (
                    <DropdownMenuItem key={service.slug} asChild className="px-3 py-2">
                      <Link href={`/services/${service.slug}`} className="cursor-pointer text-sm">
                        {service.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/pricing"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === '/pricing' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button data-testid="button-get-started" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">CONTACT OUR EXPERTS!</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === item.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="py-2">
                <div className="text-sm font-semibold text-muted-foreground mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase">Book Services</div>
                  {bookServices.slice(0, 5).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <div className="text-xs font-semibold text-muted-foreground uppercase mt-4">Digital Services</div>
                  {digitalServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block text-sm font-semibold text-primary mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
              <Link 
                href="/pricing"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === '/pricing' ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Button className="w-full" data-testid="button-mobile-get-started" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  CONTACT OUR EXPERTS!
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
