import { sectionTitle, sectionSubtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { TeamCard } from "@/components/TeamCard";

const leadership = [
  {
    name: "Beatrice Winslow",
    role: "General Manager",
    bio: "Has run the hotel since 1994 and has opinions about the flowers.",
  },
  {
    name: "Julian Thorne",
    role: "Head Concierge",
    bio: "Can produce dinner reservations, theater tickets, and alibis on short notice.",
  },
  {
    name: "Margaux Whitfield",
    role: "Executive Chef",
    bio: "Trained in Lyon. Tolerates no substitutions.",
  },
  {
    name: "Edmund Carrow",
    role: "Head of Housekeeping",
    bio: "Has never once raised his voice, and has never needed to.",
  },
];

const convictions = [
  {
    title: "Discretion",
    body: "We remember your name and forget your business.",
  },
  {
    title: "Craft",
    body: "Nothing arrives at your table, or your door, without someone having minded it closely.",
  },
  {
    title: "Continuity",
    body: "We have changed remarkably little since 1911, and see no urgent reason to start.",
  },
];

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="py-section-lg">
        <div className="text-center mb-section-md">
          <h1 className={sectionTitle({ color: "default" })}>About</h1>
          <p className={sectionSubtitle({ color: "muted", class: "max-w-2xl mx-auto" })}>
            A short account of who we are, and why we've stayed that way.
          </p>
        </div>

        <div className="bg-default-100 rounded-lg p-8 mb-section-lg text-center">
          <h2 className={sectionTitle({ color: "default" })}>A Brief History</h2>
          <p className="text-default-600 max-w-2xl mx-auto mt-4">
            Hotel Beaumont opened in 1911 at the corner of Marlborough and
            Clarendon, built on the conviction that a hotel ought to know its
            guests better than they know themselves. It has weathered two
            wars, several recessions, and at least one attempt at
            modernization, none of which left much of a mark. The lobby clock
            has not been reset since 1958. We consider this a feature.
          </p>
        </div>

        <div className="mb-section-lg">
          <h2 className={sectionTitle({ color: "default", class: "mb-8" })}>
            The Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member) => (
              <TeamCard
                key={member.name}
                bio={member.bio}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-default-200 pt-section-lg">
          <h2 className={sectionTitle({ color: "default", class: "mb-8" })}>
            A Few Convictions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {convictions.map((conviction) => (
              <div key={conviction.title}>
                <h3 className="font-semibold text-foreground mb-2">
                  {conviction.title}
                </h3>
                <p className="text-default-600">{conviction.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
