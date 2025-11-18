import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'writegenix@gmail.com',
      subContent: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (949) 409-8389',
      subContent: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'New York, NY',
      subContent: 'Remote consultations available'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '24 Hours',
      subContent: 'Average response time'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to start your publishing journey? Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 text-center hover-elevate transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subContent}</p>
                </Card>
              ))}
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
