import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

export default function FAQ() {
  const faqs = [
    {
      question: 'How does the ghostwriting process work?',
      answer: 'Our ghostwriting process begins with an in-depth consultation to understand your vision, target audience, and goals. We then create a detailed outline for your approval. Once approved, our experienced writers craft your manuscript chapter by chapter, sending drafts for your review and feedback. We incorporate unlimited revisions until you\'re completely satisfied with the final product. Throughout the process, you maintain full ownership and creative control.'
    },
    {
      question: 'How long does it take to complete a book?',
      answer: 'Timeline varies based on book length, complexity, and your availability for feedback. A typical 50,000-word book takes 3-6 months from start to finish, including writing, editing, and revisions. Rush services are available for tighter deadlines. We work with your schedule and can adjust our timeline to meet your specific launch date requirements.'
    },
    {
      question: 'Will I own the rights to my book?',
      answer: 'Absolutely. You retain 100% ownership and all rights to your book. Our ghostwriters and designers sign comprehensive NDAs and work-for-hire agreements, ensuring complete confidentiality and full rights transfer. Your name appears as the author, and you have complete control over all publishing and distribution decisions.'
    },
    {
      question: 'What is included in your publishing services?',
      answer: 'Our publishing services include professional formatting for both print and eBook formats, ISBN registration, cover design implementation, Amazon KDP setup, and distribution to major platforms. We handle all technical aspects of publishing, ensuring your book meets industry standards and is properly listed across all chosen platforms.'
    },
    {
      question: 'Do you offer marketing services?',
      answer: 'Yes! We offer comprehensive marketing packages including author website development, social media management, press release distribution, video trailer production, Amazon optimization, A+ Content creation, and targeted advertising campaigns. Our marketing strategies are customized based on your genre, target audience, and budget.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the specific services you need, book length, and project complexity. We offer flexible packages and custom quotes to fit different budgets. Contact us for a free consultation where we\'ll discuss your project and provide a detailed, transparent quote with no hidden fees.'
    },
    {
      question: 'Can you help with both fiction and non-fiction?',
      answer: 'Yes, our team includes specialists in various genres including fiction (literary, thriller, romance, sci-fi), non-fiction (memoir, biography, business, self-help), and specialized categories like children\'s books. We match you with writers experienced in your specific genre to ensure authentic voice and industry-appropriate content.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'Client satisfaction is our top priority. All our services include unlimited revisions during the project. We work closely with you throughout the process, ensuring regular communication and incorporating your feedback at every stage. We\'re not satisfied until you\'re thrilled with the final result.'
    },
    {
      question: 'Do you provide editing for manuscripts I\'ve already written?',
      answer: 'Absolutely! We offer comprehensive editing services including developmental editing, line editing, copy editing, and proofreading. Our editors will polish your manuscript while preserving your unique voice, ensuring it meets professional publishing standards.'
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply fill out our contact form or schedule a free consultation. We\'ll discuss your project, goals, timeline, and budget. Based on our conversation, we\'ll provide a customized proposal outlining services, timeline, and investment. Once you approve, we assign your dedicated team and begin bringing your book to life.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="py-20 bg-card">
          <div className="container mx-auto px-6 mb-12">
            <div className="text-center">
              <h1 className="text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about our ghostwriting, publishing, and marketing services
              </p>
            </div>
          </div>

          <FAQSection faqs={faqs} title="" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
