import { sectionTitle, sectionSubtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { BlogCard } from "@/components/BlogCard";

const blogPosts = [
  {
    title: "Getting Started with Constellation",
    excerpt:
      "Learn how to set up your first project and start building amazing applications.",
    date: "Mar 15, 2024",
    category: "Tutorial",
    slug: "getting-started",
  },
  {
    title: "Advanced Component Customization",
    excerpt:
      "Discover how to customize components to match your brand and design requirements.",
    date: "Mar 10, 2024",
    category: "Guide",
    slug: "advanced-customization",
  },
  {
    title: "Best Practices for Accessibility",
    excerpt:
      "Ensure your applications are accessible to all users with these proven practices.",
    date: "Mar 5, 2024",
    category: "Best Practices",
    slug: "accessibility-practices",
  },
  {
    title: "Performance Optimization Tips",
    excerpt:
      "Optimize your application performance with these actionable tips and tricks.",
    date: "Feb 28, 2024",
    category: "Performance",
    slug: "performance-tips",
  },
  {
    title: "TypeScript Integration Guide",
    excerpt:
      "Master TypeScript with our comprehensive guide to type-safe development.",
    date: "Feb 20, 2024",
    category: "Tutorial",
    slug: "typescript-guide",
  },
  {
    title: "Dark Mode Implementation",
    excerpt:
      "Add dark mode support to your application in just a few simple steps.",
    date: "Feb 15, 2024",
    category: "Feature",
    slug: "dark-mode",
  },
];

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="py-section-lg">
        <div className="text-center mb-section-md">
          <h1 className={sectionTitle({ color: "default" })}>Blog</h1>
          <p className={sectionSubtitle({ color: "muted", class: "max-w-2xl mx-auto" })}>
            Tips, guides, and best practices for building better applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              category={post.category}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
