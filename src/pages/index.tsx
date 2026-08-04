import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle, sectionTitle, sectionSubtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { FeatureCard } from "@/components/FeatureCard";

const SparklesIcon = (props: any) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const LightbulbIcon = (props: any) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-6c2.76 0 5-2.24 5-5 0-2.49-2.01-4.9-5-4.9s-5 2.41-5 4.9c0 2.76 2.24 5 5 5zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6-6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" />
  </svg>
);

const CheckCircleIcon = (props: any) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>

      <section className="py-section-lg">
        <div className="text-center mb-section-md">
          <h2 className={sectionTitle({ color: "default" })}>
            Why Choose Us
          </h2>
          <p className={sectionSubtitle({ color: "muted", class: "max-w-2xl mx-auto" })}>
            Everything you need to build beautiful, performant applications
            with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            description="Fully typed components with TypeScript support for better development experience"
            icon={<SparklesIcon size={24} />}
            title="Type Safe"
          />
          <FeatureCard
            description="Customizable themes and components that adapt to your brand and design needs"
            icon={<LightbulbIcon size={24} />}
            title="Highly Customizable"
          />
          <FeatureCard
            description="Built for accessibility with ARIA attributes and keyboard navigation out of the box"
            icon={<CheckCircleIcon size={24} />}
            title="Accessible"
          />
        </div>
      </section>

      <section className="py-section-lg border-t border-default-200">
        <div className="text-center mb-section-md">
          <h2 className={sectionTitle({ color: "default" })}>
            Who Uses Our Platform
          </h2>
          <p className={sectionSubtitle({ color: "muted", class: "max-w-2xl mx-auto" })}>
            Trusted by companies of all sizes to build and scale their
            applications.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Company A", "Company B", "Company C", "Company D"].map(
            (company) => (
              <div
                key={company}
                className="flex items-center justify-center p-4 rounded-lg border border-default-200 text-default-500 font-medium"
              >
                {company}
              </div>
            ),
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
