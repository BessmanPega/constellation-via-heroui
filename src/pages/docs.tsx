import { sectionTitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ContentLayout } from "@/components/ContentLayout";
import { DocsSidebar } from "@/components/DocsSidebar";

const amenitySections = [
  {
    title: "Arrival & Departure",
    items: [
      { label: "Check-In", href: "/amenities/check-in", active: true },
      { label: "Check-Out", href: "/amenities/check-out" },
      { label: "Valet & Parking", href: "/amenities/valet" },
      { label: "Luggage Storage", href: "/amenities/luggage" },
    ],
  },
  {
    title: "Dining",
    items: [
      { label: "The Dining Room", href: "/amenities/dining-room" },
      { label: "Room Service", href: "/amenities/room-service" },
      { label: "The Bar", href: "/amenities/bar" },
      { label: "Private Events", href: "/amenities/private-events" },
    ],
  },
  {
    title: "Wellness",
    items: [
      { label: "The Spa", href: "/amenities/spa" },
      { label: "Fitness Room", href: "/amenities/fitness" },
      { label: "In-Room Treatments", href: "/amenities/in-room-treatments" },
    ],
  },
  {
    title: "Concierge Services",
    items: [
      { label: "Reservations & Tickets", href: "/amenities/reservations" },
      { label: "Local Recommendations", href: "/amenities/recommendations" },
      { label: "Business Services", href: "/amenities/business" },
    ],
  },
];

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="py-section-lg">
        <ContentLayout
          sidebar={<DocsSidebar sections={amenitySections} />}
        >
          <h1 className={sectionTitle({ color: "default" })}>Amenities</h1>
          <p className="text-default-600 mt-4">
            What follows is not exhaustive so much as illustrative. If you
            require something not listed here, ask the concierge — chances
            are it exists and simply isn't advertised.
          </p>

          <h2 className={sectionTitle({ color: "default", class: "mt-12" })}>
            Arrival & Departure
          </h2>
          <p className="text-default-600 mt-4">
            Check-in is at three, check-out at noon. Both are handled at the
            desk in the lobby, or, if you prefer, from the back seat of the
            car that brought you.
          </p>

          <h2 className={sectionTitle({ color: "default", class: "mt-12" })}>
            Dining
          </h2>
          <p className="text-default-600 mt-4">
            Breakfast is served in the Garden Room until eleven. Dinner runs
            later than you'd expect and stops asking questions after the
            second course. Room service does not sleep, though it does
            occasionally take its time.
          </p>

          <h2 className={sectionTitle({ color: "default", class: "mt-12" })}>
            Wellness
          </h2>
          <p className="text-default-600 mt-4">
            The spa occupies the lower level and asks that phones be left
            upstairs. The fitness room is small, well-equipped, and rarely
            used before ten.
          </p>

          <h2 className={sectionTitle({ color: "default", class: "mt-12" })}>
            Concierge Services
          </h2>
          <p className="text-default-600 mt-4">
            The concierge desk arranges dinner reservations, theater tickets,
            car service, and the sort of favors better requested in person
            than described on a website.
          </p>
        </ContentLayout>
      </section>
    </DefaultLayout>
  );
}
