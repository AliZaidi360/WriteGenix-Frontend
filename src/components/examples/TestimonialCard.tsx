import TestimonialCard from '../TestimonialCard';
import testimonialImage from '@assets/generated_images/Female_author_testimonial_photo_fcd9176f.png';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-2xl">
      <TestimonialCard
        quote="WriteGenix Solutions transformed my manuscript into a polished bestseller. Their team's expertise and dedication exceeded all expectations."
        author="Sarah Johnson"
        role="Published Author"
        bookTitle="The Silent Echo"
        image={testimonialImage}
      />
    </div>
  );
}
