import { sectionTitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ContentLayout } from "@/components/ContentLayout";
import { DocsSidebar } from "@/components/DocsSidebar";

const docsSections = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs/intro", active: true },
      { label: "Installation", href: "/docs/installation" },
      { label: "First Steps", href: "/docs/first-steps" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Components", href: "/docs/components" },
      { label: "Customization", href: "/docs/customization" },
      { label: "Theming", href: "/docs/theming" },
      { label: "Best Practices", href: "/docs/best-practices" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { label: "Component Props", href: "/docs/api/props" },
      { label: "Hooks", href: "/docs/api/hooks" },
      { label: "Utilities", href: "/docs/api/utilities" },
    ],
  },
  {
    title: "Examples",
    items: [
      { label: "Form Examples", href: "/docs/examples/forms" },
      { label: "Layout Patterns", href: "/docs/examples/layouts" },
      { label: "Advanced Patterns", href: "/docs/examples/advanced" },
    ],
  },
];

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="py-section-lg">
        <ContentLayout
          sidebar={<DocsSidebar sections={docsSections} />}
        >
          <h1 className={sectionTitle({ color: "default" })}>Introduction</h1>
          <p className="text-default-600 mt-4">
            Welcome to the documentation. This is a comprehensive guide to help
            you get started with our platform and make the most of its features.
          </p>

          <h2 className={sectionTitle({ color: "default", class: "mt-12" })}>
            What You'll Learn
          </h2>
          <ul className="space-y-3 mt-4 text-default-600">
            <li>• How to install and set up the platform</li>
            <li>• Component usage and customization</li>
            <li>• Best practices for building applications</li>
            <li>• Advanced patterns and techniques</li>
            <li>• Troubleshooting and FAQ</li>
          </ul>

          <h2 className={sectionTitle({ color: "default", class: "mt-12" })}>
            Quick Start
          </h2>
          <p className="text-default-600 mt-4">
            Get up and running in minutes. Start by exploring the Getting
            Started section to learn the basics, then move on to more advanced
            topics as you become familiar with the platform.
          </p>

          <h2 className={sectionTitle({ color: "default", class: "mt-12" })}>
            Need Help?
          </h2>
          <p className="text-default-600 mt-4">
            Check out the FAQ section or reach out to our support team. We're
            here to help!
          </p>
        </ContentLayout>
      </section>
    </DefaultLayout>
  );
}
