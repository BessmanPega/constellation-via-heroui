import { sectionTitle, sectionSubtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { PricingCard } from "@/components/PricingCard";

const rooms = [
  {
    name: "The Classic Room",
    price: "340",
    description: "Sensible, well-proportioned, and exactly as advertised.",
    features: [
      "Queen bed, linen sheets",
      "Marble bath",
      "Morning newspaper at the door",
      "Views of the garden or street",
    ],
  },
  {
    name: "The Beaumont Suite",
    price: "680",
    description: "For those who prefer not to explain themselves twice.",
    features: [
      "Separate sitting room",
      "Four-poster bed",
      "Honor bar, self-reported",
      "Private terrace",
      "Turndown service",
      "Late checkout by request",
    ],
    isPopular: true,
  },
  {
    name: "The Presidential Residence",
    price: "1,450",
    description: "The sort of room one doesn't mention at dinner.",
    features: [
      "Two bedrooms and a study",
      "Butler service",
      "Private dining for up to eight",
      "Wood-burning fireplace",
      "A car, if needed",
      "Absolute discretion",
    ],
  },
];

const faqs = [
  {
    question: "What time is check-in?",
    answer:
      "Check-in is at three. We are, however, not unreasonable — arrive earlier and we will find somewhere for your coat.",
  },
  {
    question: "Do you allow pets?",
    answer:
      "We allow dogs of good character. We ask the same of their owners.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations are accepted up to 48 hours in advance, no questions asked — though we may ask anyway, out of habit.",
  },
];

export default function PricingPage() {
  return (
    <DefaultLayout>
      <section className="py-section-lg">
        <div className="text-center mb-section-md">
          <h1 className={sectionTitle({ color: "default" })}>
            Accommodations
          </h1>
          <p className={sectionSubtitle({ color: "muted", class: "max-w-2xl mx-auto" })}>
            Three rooms, none of them small. Rates are per night and include
            breakfast, on the assumption that you'll want it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-section-lg">
          {rooms.map((room) => (
            <PricingCard
              key={room.name}
              buttonLabel="Check Availability"
              description={room.description}
              features={room.features}
              isPopular={room.isPopular}
              name={room.name}
              period="night"
              price={room.price}
            />
          ))}
        </div>

        <div className="bg-default-100 rounded-lg p-8 text-center">
          <h3 className={sectionTitle({ color: "default" })}>
            Frequently Asked Questions
          </h3>
          <div className="mt-8 space-y-4 text-left max-w-2xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h4 className="font-semibold text-foreground mb-2">
                  {faq.question}
                </h4>
                <p className="text-default-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
