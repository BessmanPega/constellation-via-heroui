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

const CocktailIcon = (props: any) => (
  <svg {...props} fill="currentColor" viewBox="0 0 48 48">
    <polygon points="8,9 40,9 25.5,29 25.5,37 22.5,37 22.5,29" />
    <rect height="3" rx="1" width="20" x="14" y="37" />
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
            description="The bar opens at five. Closing time has always been more of a suggestion."
            icon={<CocktailIcon size={24} />}
            title="The Cocktail Lounge"
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
