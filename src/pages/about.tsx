import { sectionTitle, sectionSubtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { TeamCard } from "@/components/TeamCard";

const team = [
  {
    name: "Alice Johnson",
    role: "Founder & CEO",
    bio: "10+ years of experience building scalable applications",
  },
  {
    name: "Bob Smith",
    role: "CTO",
    bio: "Full-stack developer passionate about great UX",
  },
  {
    name: "Carol Williams",
    role: "Head of Design",
    bio: "Design system enthusiast and accessibility advocate",
  },
  {
    name: "David Brown",
    role: "Lead Developer",
    bio: "TypeScript and React expert",
  },
];

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="py-section-lg">
        <div className="text-center mb-section-md">
          <h1 className={sectionTitle({ color: "default" })}>About Us</h1>
          <p className={sectionSubtitle({ color: "muted", class: "max-w-2xl mx-auto" })}>
            We're building the future of application development, one component
            at a time.
          </p>
        </div>

        <div className="bg-default-100 rounded-lg p-8 mb-section-lg text-center">
          <h2 className={sectionTitle({ color: "default" })}>Our Mission</h2>
          <p className="text-default-600 max-w-2xl mx-auto mt-4">
            To empower developers and designers to create beautiful,
            accessible, and performant applications without compromising on
            developer experience. We believe that great tools should be both
            powerful and intuitive.
          </p>
        </div>

        <div className="mb-section-lg">
          <h2 className={sectionTitle({ color: "default", class: "mb-8" })}>
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
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
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Quality First
              </h3>
              <p className="text-default-600">
                We never compromise on quality. Every component is thoroughly
                tested and documented.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Developer Joy
              </h3>
              <p className="text-default-600">
                We focus on creating tools that bring joy to development,
                making coding a pleasure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Community
              </h3>
              <p className="text-default-600">
                We believe in the power of community and are dedicated to
                supporting our users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
