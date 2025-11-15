import BlogCard from '../BlogCard';

export default function BlogCardExample() {
  return (
    <div className="p-8 max-w-md">
      <BlogCard
        title="10 Essential Tips for First-Time Authors"
        excerpt="Discover the most important lessons every new author should know before starting their publishing journey."
        category="Writing Tips"
        date="Nov 10, 2024"
        readTime="5 min read"
        slug="10-essential-tips-first-time-authors"
      />
    </div>
  );
}
