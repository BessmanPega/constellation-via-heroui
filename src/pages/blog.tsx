import { sectionTitle, sectionSubtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { BlogCard } from "@/components/BlogCard";

const dispatches = [
  {
    title: "A Note from the General Manager",
    excerpt:
      "On the occasion of our 113th year, a few words on why so little has changed, and why that's rather the point.",
    date: "Jul 28, 2026",
    category: "Notes",
    slug: "note-from-the-general-manager",
  },
  {
    title: "This Season at Beaumont",
    excerpt:
      "The garden terrace reopens for the summer, a touch later than usual, on account of the roses.",
    date: "Jul 12, 2026",
    category: "Events",
    slug: "this-season-at-beaumont",
  },
  {
    title: "The Sunday Roast Returns",
    excerpt:
      "Chef Whitfield brings back a tradition retired in the nineties, over the objections of no one in particular.",
    date: "Jun 30, 2026",
    category: "Culinary",
    slug: "the-sunday-roast-returns",
  },
  {
    title: "On the Matter of the Lobby Clock",
    excerpt:
      "A brief history of the clock that has told the wrong time, faithfully, since 1958.",
    date: "Jun 14, 2026",
    category: "History",
    slug: "on-the-matter-of-the-lobby-clock",
  },
  {
    title: "A Guide to the Neighborhood, for Those Who Ask",
    excerpt:
      "Where to walk, what to skip, and which gallery opening is worth the trouble this month.",
    date: "May 29, 2026",
    category: "Notes",
    slug: "a-guide-to-the-neighborhood",
  },
  {
    title: "In Praise of the Off-Season",
    excerpt:
      "A modest defense of visiting when everyone else has the sense not to.",
    date: "May 3, 2026",
    category: "Notes",
    slug: "in-praise-of-the-off-season",
  },
];

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="py-section-lg">
        <div className="text-center mb-section-md">
          <h1 className={sectionTitle({ color: "default" })}>
            The Dispatch
          </h1>
          <p className={sectionSubtitle({ color: "muted", class: "max-w-2xl mx-auto" })}>
            Notes from the front desk, the kitchen, and the odd corner of the
            garden. Published when there's something worth saying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dispatches.map((post) => (
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
