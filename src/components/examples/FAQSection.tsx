import FAQSection from '../FAQSection';

const sampleFAQs = [
  {
    question: 'How does the ghostwriting process work?',
    answer: 'Our ghostwriting process begins with an in-depth consultation to understand your vision. We then create an outline, draft chapters for your review, and refine the manuscript based on your feedback until you\'re completely satisfied.'
  },
  {
    question: 'How long does it take to complete a book?',
    answer: 'Timeline varies based on book length and complexity. A typical 50,000-word book takes 3-6 months from start to finish, including writing, editing, and revisions. We work with your schedule to meet your deadlines.'
  },
  {
    question: 'Will I own the rights to my book?',
    answer: 'Absolutely. You retain 100% ownership and all rights to your book. Our ghostwriters sign comprehensive NDAs and work-for-hire agreements ensuring complete confidentiality and rights transfer.'
  }
];

export default function FAQSectionExample() {
  return <FAQSection faqs={sampleFAQs} />;
}
