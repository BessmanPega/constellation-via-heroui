import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle, sectionTitle, sectionSubtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FeatureCard } from "@/components/FeatureCard";

const LeafIcon = (props: any) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
  </svg>
);

const DiningIcon = (props: any) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2a1 1 0 0 1 1 1v6.17a2 2 0 0 1-.59 1.41L6 12v9a1 1 0 1 1-2 0v-9l-1.41-1.42A2 2 0 0 1 2 9.17V3a1 1 0 1 1 2 0v6h1V3a1 1 0 1 1 2 0v6h1V3a1 1 0 0 1 1-1zm10 0a5 5 0 0 0-5 5v6a2 2 0 0 0 1.7 1.98L13 15v6a1 1 0 1 0 2 0v-6l-.7-.02A2 2 0 0 0 16 13V8h1v13a1 1 0 1 0 2 0V2z" />
  </svg>
);

const BellIcon = (props: any) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a1 1 0 0 1 1 1v1.06A8.001 8.001 0 0 1 20 12v5l1.6 2.13A1 1 0 0 1 20.8 21H3.2a1 1 0 0 1-.8-1.87L4 17v-5a8.001 8.001 0 0 1 7-7.94V3a1 1 0 0 1 1-1zM9 21a3 3 0 0 0 6 0H9z" />
  </svg>
);

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-2xl text-center justify-center">
          <span className={title()}>A certain standard,&nbsp;</span>
          <span className={title({ color: "gold" })}>quietly kept.&nbsp;</span>
          <div className={subtitle({ class: "mt-4" })}>
            Hotel Beaumont has stood at the corner of Marlborough and
            Clarendon since 1911. We have made very few changes since, and we
            don't intend to start now.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/accommodations"
          >
            Reserve a Room
          </Link>
          <Link
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href="/amenities"
          >
            Explore Amenities
          </Link>
        </div>
      </section>

      <section className="py-section-lg">
        <div className="text-center mb-section-md">
          <h2 className={sectionTitle({ color: "default" })}>
            The Essentials
          </h2>
          <p className={sectionSubtitle({ color: "muted", class: "max-w-2xl mx-auto" })}>
            Nothing you won't find at every good hotel — only, we think, a bit
            better attended to.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            description="A quiet room, warm water, and no music piped in to fill the silence."
            icon={<LeafIcon size={24} />}
            title="Spa & Bath"
          />
          <FeatureCard
            description="Dinner is served until eleven. Breakfast, we're told, is the better meal."
            icon={<DiningIcon size={24} />}
            title="The Dining Room"
          />
          <FeatureCard
            description="Reservations, recommendations, and the occasional discreet favor."
            icon={<BellIcon size={24} />}
            title="Concierge"
          />
        </div>
      </section>

      <section className="py-section-lg border-t border-default-200">
        <div className="text-center mb-section-md">
          <h2 className={sectionTitle({ color: "default" })}>
            As Featured In
          </h2>
          <p className={sectionSubtitle({ color: "muted", class: "max-w-2xl mx-auto" })}>
            We do not seek out attention, but it does find us occasionally.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Condé Nast Traveler",
            "Town & Country",
            "The Boston Globe",
            "Departures",
          ].map((publication) => (
            <div
              key={publication}
              className="flex items-center justify-center p-4 rounded-lg border border-default-200 text-default-500 font-serif italic"
            >
              {publication}
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
