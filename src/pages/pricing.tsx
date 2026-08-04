import { sectionTitle, sectionSubtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { PricingCard } from "@/components/PricingCard";

const pricingTiers = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small projects and learning",
    features: [
      "Up to 5 projects",
      "Community support",
      "Core features",
      "1 GB storage",
    ],
  },
  {
    name: "Pro",
    price: "79",
    description: "For growing teams and applications",
    features: [
      "Unlimited projects",
      "Priority support",
      "Advanced features",
      "50 GB storage",
      "Analytics dashboard",
      "API access",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large-scale deployments",
    features: [
      "Unlimited everything",
      "24/7 dedicated support",
      "Custom integrations",
      "Unlimited storage",
      "Advanced analytics",
      "SLA guarantee",
      "Custom training",
    ],
  },
];

export default function PricingPage() {
  return (
    <DefaultLayout>
      <section className="py-section-lg">
        <div className="text-center mb-section-md">
          <h1 className={sectionTitle({ color: "default" })}>Pricing</h1>
          <p className={sectionSubtitle({ color: "muted", class: "max-w-2xl mx-auto" })}>
            Transparent pricing that scales with your needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-section-lg">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              name={tier.name}
              price={tier.price}
            />
          ))}
        </div>

        <div className="bg-default-100 rounded-lg p-8 text-center">
          <h3 className={sectionTitle({ color: "default" })}>
            Frequently Asked Questions
          </h3>
          <div className="mt-8 space-y-4 text-left max-w-2xl mx-auto">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Can I change my plan anytime?
              </h4>
              <p className="text-default-600">
                Yes, upgrade or downgrade your plan at any time. Changes take
                effect on your next billing cycle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Do you offer refunds?
              </h4>
              <p className="text-default-600">
                We offer a 14-day money-back guarantee if you're not satisfied
                with our service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Is there a free trial?
              </h4>
              <p className="text-default-600">
                Yes, all plans come with a 14-day free trial. No credit card
                required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
