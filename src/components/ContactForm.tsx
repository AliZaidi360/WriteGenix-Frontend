import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  serviceType: z.string().min(1, 'Please select a service'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  projectDescription: z.string().min(20, 'Please provide more details (minimum 20 characters)'),
  timeline: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: '',
      name: '',
      email: '',
      phone: '',
      projectDescription: '',
      timeline: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
  };

  const progress = (step / 3) * 100;

  if (submitted) {
    return (
      <Card className="p-12 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-accent/10 p-4">
            <CheckCircle className="h-16 w-16 text-accent" />
          </div>
        </div>
        <h2 className="text-3xl font-serif font-bold mb-4">Thank You!</h2>
        <p className="text-muted-foreground text-lg mb-6">
          We've received your inquiry and will get back to you within 24 hours.
        </p>
        <Button onClick={() => { setSubmitted(false); setStep(1); form.reset(); }} data-testid="button-submit-another">
          Submit Another Inquiry
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <Progress value={progress} className="mb-2" />
        <p className="text-sm text-muted-foreground text-center">Step {step} of 3</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold">Select Your Service</h3>
              
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What service are you interested in?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-service-type">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ghostwriting">Ghostwriting</SelectItem>
                        <SelectItem value="publishing">Publishing (Amazon/All Platforms)</SelectItem>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="editing">Editing & Proofreading</SelectItem>
                        <SelectItem value="cover-design">Book Cover Design</SelectItem>
                        <SelectItem value="marketing">Book Marketing Services</SelectItem>
                        <SelectItem value="formatting">Formatting</SelectItem>
                        <SelectItem value="other">Other Services</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={() => {
                    if (form.getValues('serviceType')) {
                      setStep(2);
                    } else {
                      form.setError('serviceType', { message: 'Please select a service' });
                    }
                  }}
                  data-testid="button-next-step-1"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold">Project Details</h3>
              
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about your project</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide details about your book, target audience, timeline, and any specific requirements..."
                        className="min-h-[150px]"
                        {...field}
                        data-testid="textarea-project-description"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expected Timeline (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-timeline">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-plus-months">6+ months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(1)} data-testid="button-back-step-2">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    if (form.getValues('projectDescription').length >= 20) {
                      setStep(3);
                    } else {
                      form.setError('projectDescription', { message: 'Please provide more details' });
                    }
                  }}
                  data-testid="button-next-step-2"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold">Contact Information</h3>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} data-testid="input-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1 (555) 000-0000" {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="bg-muted/50 p-4 rounded-md">
                <p className="text-sm text-muted-foreground">
                  🔒 Your information is confidential and will never be shared. We'll contact you within 24 hours.
                </p>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(2)} data-testid="button-back-step-3">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="submit" data-testid="button-submit-form">
                  Submit Inquiry
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </Card>
  );
}
